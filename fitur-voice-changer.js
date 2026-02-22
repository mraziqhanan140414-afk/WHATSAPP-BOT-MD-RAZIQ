module.exports = {
    command: ["bass", "blown", "deep", "earrape", "fast", "fat"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🎤 Sedang mengubah audio menjadi efek *${command}*...` });
    }
}
