const { 
    default: makeWASocket, 
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion, 
    makeInMemoryStore 
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const fs = require('fs');
const chalk = require('chalk');
const config = require('./settings');

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('session');
    const { version } = await fetchLatestBaileysVersion();

    const bot = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true, 
        auth: state,
        browser: ["Monster Bot", "Chrome", "1.0.0"],
    });

    bot.ev.on('creds.update', saveCreds);

    bot.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            const m = chatUpdate.messages[0];
            if (!m.message || m.key.fromMe) return;

            const from = m.key.remoteJid;
            const sender = m.key.participant || m.key.remoteJid;
            const body = (m.message.conversation || m.message.extendedTextMessage?.text || m.message.imageMessage?.caption || "").trim();
            const isCmd = body.startsWith(".");
            const command = isCmd ? body.slice(1).split(/ +/).shift().toLowerCase() : "";
            const args = body.split(/ +/).slice(1);
            
            // Database & Time
            let db_user = JSON.parse(fs.readFileSync('./users.json'));
            const jam = new Date().getHours();
            const ucapan = jam < 11 ? "Pagi 🌅" : jam < 15 ? "Siang ☀️" : jam < 18 ? "Sore 🌆" : "Malam 🌙";

            // AUTO-REGISTER
            if (isCmd && !db_user.includes(sender)) {
                if (command !== 'daftar') return bot.sendMessage(from, { text: "⚠️ Silahkan daftar dulu dengan ketik *.daftar*" });
            }

            if (command === 'daftar') {
                if (db_user.includes(sender)) return bot.sendMessage(from, { text: "Kamu sudah terdaftar!" });
                db_user.push(sender);
                fs.writeFileSync('./users.json', JSON.stringify(db_user));
                return bot.sendMessage(from, { text: "✅ Pendaftaran Berhasil! Ketik *.menu*" });
            }

            // --- DYNAMIC PLUGIN HANDLER ---
            // Membaca file fitur-xxx.js di folder utama
            const files = fs.readdirSync('./').filter(file => file.endsWith('.js') && file.startsWith('fitur-'));
            
            for (let file of files) {
                // Hapus cache agar fitur bisa update live jika diedit
                delete require.cache[require.resolve(`./${file}`)];
                const plugin = require(`./${file}`);
                if (plugin.command && plugin.command.includes(command)) {
                    await plugin.run(bot, m, { 
                        from, body, args, sender, config, ucapan, command, store 
                    });
                }
            }

        } catch (err) {
            console.log(chalk.red("[ ERROR ] "), err);
        }
    });

    bot.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason !== DisconnectReason.loggedOut) startBot();
        } else if (connection === 'open') {
            console.log(chalk.green.bold("\n✅ BOT MONSTER CONNECTED!"));
            console.log(chalk.yellow(`Owner List: ${config.ownerNumber.join(', ')}`));
        }
    });
}

startBot();
