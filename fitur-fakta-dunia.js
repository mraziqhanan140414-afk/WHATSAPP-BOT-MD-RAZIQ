module.exports = {
    command: ["faktaunik", "sejarah", "motivasipagi"],
    run: async (bot, m, { from }) => {
        bot.sendMessage(from, { text: `💡 Tahukah kamu? Madu adalah satu-satunya makanan yang tidak basi.` });
    }
}
