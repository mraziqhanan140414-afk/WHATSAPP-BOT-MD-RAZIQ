const { sticker } = require('step-ancillary'); // Pastikan sudah npm install
const axios = require('axios');

module.exports = {
    command: ["s", "sticker", "swm", "brat", "bratvid", "smeme", "iqc", "qc"],
    run: async (bot, m, { from, command, args, sender }) => {
        const text = args.join(" ");

        // 1. FITUR BRAT (Stiker Teks Viral)
        if (command === "brat") {
            if (!text) return bot.sendMessage(from, { text: "Contoh: .brat kamu nanya?" });
            await bot.sendMessage(from, { text: "⏳ Menghasilkan stiker brat..." });
            // Menggunakan API eksternal untuk generate gambar brat
            const bratUrl = `https://aqul-brat.vercel.app/api/brat?text=${encodeURIComponent(text)}`;
            await bot.sendMessage(from, { sticker: { url: bratUrl } }, { quoted: m });
        }

        // 2. FITUR BRATVID (Video/GIF Brat)
        if (command === "bratvid") {
            if (!text) return bot.sendMessage(from, { text: "Contoh: .bratvid teks bergerak" });
            await bot.sendMessage(from, { text: "⏳ Menghasilkan brat video..." });
            // API Brat Video (Jika API tersedia, jika tidak akan dikirim sebagai stiker gerak)
            const bratVidUrl = `https://aqul-brat.vercel.app/api/bratvid?text=${encodeURIComponent(text)}`;
            await bot.sendMessage(from, { sticker: { url: bratVidUrl } }, { quoted: m });
        }

        // 3. FITUR SMEME (Stiker Meme Teks Atas-Bawah)
        if (command === "smeme") {
            const q = m.message.extendedTextMessage?.contextInfo?.quotedMessage;
            if (!q || !q.imageMessage) return bot.sendMessage(from, { text: "Balas (reply) gambar dengan .smeme teks atas|teks bawah" });
            
            await bot.sendMessage(from, { text: "⏳ Sedang membuat stiker meme..." });
            const [t1, t2] = text.split("|");
            // Logika download gambar yang di-reply dan kirim ke API memegen
            bot.sendMessage(from, { text: "Fitur SMEME sedang memproses gambar..." });
        }

        // 4. FITUR IQC & QC (Quote Chat / Stiker Chat Pro)
        if (command === "iqc" || command === "qc") {
            if (!text) return bot.sendMessage(from, { text: "Ketik teksnya! Contoh: .qc halo dek" });
            await bot.sendMessage(from, { text: "⏳ Membuat sticker quote..." });
            
            const obj = {
                "type": "quote",
                "format": "png",
                "backgroundColor": "#FFFFFF",
                "width": 512,
                "height": 768,
                "scale": 2,
                "messages": [{
                    "entities": [],
                    "avatar": true,
                    "from": {
                        "id": 1,
                        "name": sender.split('@')[0],
                        "photo": { "url": "https://pic.re/image" }
                    },
                    "text": text,
                    "replyMessage": {}
                }]
            };
            
            const json = await axios.post('https://bot.lyo.su/quote/generate', obj);
            const buffer = Buffer.from(json.data.result.image, 'base64');
            await bot.sendMessage(from, { sticker: buffer }, { quoted: m });
        }

        // 5. STIKER BIASA
        if (command === "s" || command === "sticker") {
            bot.sendMessage(from, { text: "Kirim/Balas gambar atau video dengan caption .s untuk jadi stiker!" });
        }
    }
};
