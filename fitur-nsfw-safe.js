module.exports = {
    command: ["hentai", "trap", "yuri", "ero"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: "❌ Fitur ini hanya aktif jika mode NSFW dinyalakan owner!" });
    }
}
