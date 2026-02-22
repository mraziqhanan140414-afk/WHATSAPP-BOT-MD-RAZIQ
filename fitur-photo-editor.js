module.exports = {
    command: ["tumpal", "wasted", "jail", "gay-card", "glass"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🎨 Sedang mengedit foto dengan efek *${command}*...` });
    }
}
