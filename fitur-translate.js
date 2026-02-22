module.exports = {
    command: ["tr", "translate", "indojawa", "indosunda"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🌐 Menerjemahkan teks via *${command}*...` });
    }
}
