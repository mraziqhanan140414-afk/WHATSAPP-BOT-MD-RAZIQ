module.exports = {
    command: ["infogempa", "news", "cnn", "detik", "tribun"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `📰 Mengambil berita terkini dari *${command}*...` });
    }
}
