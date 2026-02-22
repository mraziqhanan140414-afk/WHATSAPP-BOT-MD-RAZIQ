module.exports = {
    command: ["menu", "help", "allmenu", "start"],
    run: async (bot, m, { from, sender, config, ucapan }) => {
        const menuTeks = `
╭━━━━━「 *${config.botName}* 」━━━━━
┃ 👋 Halo @${sender.split('@')[0]}
┃ 🕒 Selamat ${ucapan}
┃ 📊 Database: 50 Berkas Script
┃ 🚀 Fitur: 460+ Aktif & Stabil
┣━━━━━━━━━━━━━━━━━━━━━━━
┃
┣━━「 *GROUP & ADMIN* 」
┃ ➔ .kick .add .promote .demote
┃ ➔ .hidetag .tagall .group [open/close]
┃ ➔ .editinfo .linkgc .resetlink .revoke
┃ ➔ .setppgc .setname .setdesc
┃ ➔ .antilink [on/off] .welcome [on/off]
┃ ➔ .mute .unmute .totalpesan
┃
┣━━「 *DOWNLOADER* 」
┃ ➔ .tiktok .ttnowm .ttmp3 .ttaudio
┃ ➔ .ytmp3 .ytmp4 .ytsearch .play
┃ ➔ .igdl .igstory .igreels .fb .fbdl
┃ ➔ .gitdl .twitter .twt .threads
┃ ➔ .mediafire .gdrive .mega .pindl
┃
┣━━「 *MAKER & STICKER* 」
┃ ➔ .brat (Viral) .bratvid (GIF)
┃ ➔ .iqc (Quote) .qc .smeme (Meme)
┃ ➔ .sticker .s .swm .wm .take
┃ ➔ .attp .ttp .toimg .tovideo
┃
┣━━「 *AI & ASSISTANT* 」
┃ ➔ .ai .chatgpt .gemini .brainly
┃ ➔ .google .wiki .simi .remini
┃ ➔ .tohd .recolor .removebg
┃ ➔ .translate .tr-ja .tr-en
┃
┣━━「 *GAME RPG* 」
┃ ➔ .adventure .mining .heal .inventory
┃ ➔ .daily .monthly .claim .hourly
┃ ➔ .shop .buy .sell .transfer .gold
┃ ➔ .mancing .nambang .nebang
┃
┣━━「 *GAMES & FUN* 」
┃ ➔ .tebakgambar .tebakkata .suit
┃ ➔ .tictactoe .cekhodam .jodoh
┃ ➔ .apakah .bisakah .kapankah
┃ ➔ .cekjelek .cekganteng .cekcantik
┃
┣━━「 *ANIME & NSFW* 」
┃ ➔ .waifu .neko .shinobu .cosplay
┃ ➔ .hentai .nsfw-video .asupan-nsfw
┃ ➔ .bj .ero .cum .panties .orgy
┃
┣━━「 *ISLAMI & NEWS* 」
┃ ➔ .alquran .sholat .doa .kisahnabi
┃ ➔ .hadits .tahlil .jadwalsholat
┃ ➔ .infogempa .news .cnn .detik
┃
┣━━「 *TOOLS & SEARCH* 」
┃ ➔ .igstalk .ttstalk .ceknomor
┃ ➔ .pinterest .wallpaper .spotify
┃ ➔ .lyrics .chord .cekongkir
┃
┣━━「 *OWNER MENU* 」
┃ ➔ .bc .broadcast .shutdown .self
┃ ➔ .public .addpremium .block .eval
┃ ➔ .setppbot
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ ⚠️ _Gunakan bot dengan bijak!_
┃ 👑 *Owner:* @${config.ownerNumber}
╰━━━━━━━━━━━━━━━━━━━━━━━`;

        await bot.sendMessage(from, { 
            image: { url: config.thumb }, 
            caption: menuTeks, 
            mentions: [sender, config.ownerNumber + "@s.whatsapp.net"] 
        }, { quoted: m });
    }
}
