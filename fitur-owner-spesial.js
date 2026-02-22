const fs = require('fs');

module.exports = {
    command: ["bc", "broadcast", "shutdown", "addowner", "delowner", "eval"],
    run: async (bot, m, { from, command, args, sender, config }) => {
        
        // Proteksi: Cek apakah pengirim ada di list owner config
        const isOwner = config.ownerNumber.includes(sender.split('@')[0]);
        if (!isOwner) return bot.sendMessage(from, { text: "❌ Akses Ditolak! Fitur ini khusus Owner Bot. 😤" });

        switch (command) {
            case "addowner":
                let targetAdd;
                if (m.quoted) {
                    targetAdd = m.quoted.sender.split('@')[0];
                } else if (args[0]) {
                    targetAdd = args[0].replace(/[^0-9]/g, '');
                } else {
                    return bot.sendMessage(from, { text: "Tag atau reply orang yang mau dijadiin owner! 🗿" });
                }

                if (config.ownerNumber.includes(targetAdd)) return bot.sendMessage(from, { text: "Dia udah jadi owner, Bos!" });
                
                config.ownerNumber.push(targetAdd);
                bot.sendMessage(from, { 
                    text: `✅ Berhasil! @${targetAdd} sekarang adalah Owner Bot.`,
                    mentions: [targetAdd + '@s.whatsapp.net']
                });
                break;

            case "delowner":
                let targetDel;
                if (m.quoted) {
                    targetDel = m.quoted.sender.split('@')[0];
                } else if (args[0]) {
                    targetDel = args[0].replace(/[^0-9]/g, '');
                } else {
                    return bot.sendMessage(from, { text: "Tag atau reply owner yang mau dihapus! 🗿" });
                }

                const index = config.ownerNumber.indexOf(targetDel);
                if (index > -1) {
                    config.ownerNumber.splice(index, 1);
                    bot.sendMessage(from, { text: `🗑️ Akses owner @${targetDel} telah dicabut!` });
                } else {
                    bot.sendMessage(from, { text: "Nomor itu emang bukan owner, Bos." });
                }
                break;

            case "bc":
            case "broadcast":
                if (!args[0]) return bot.sendMessage(from, { text: "Masukkan teks iklan!" });
                let db_user = JSON.parse(fs.readFileSync('./users.json'));
                await bot.sendMessage(from, { text: `📢 Mengirim BC ke ${db_user.length} user...` });
                for (let user of db_user) {
                    await bot.sendMessage(user, { text: `*📢 BROADCAST OWNER*\n\n${args.join(" ")}` });
                }
                bot.sendMessage(from, { text: "✅ Selesai!" });
                break;

            case "shutdown":
                await bot.sendMessage(from, { text: "📴 Bot dimatikan oleh owner..." });
                process.exit();
                break;

            case "eval":
                if (!args[0]) return;
                try {
                    let evaled = await eval(args.join(" "));
                    bot.sendMessage(from, { text: String(evaled) });
                } catch (e) {
                    bot.sendMessage(from, { text: String(e) });
                }
                break;
        }
    }
}
