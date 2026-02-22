module.exports = {
    command: ["jodoh", "artinama", "ramal", "kecocokan", "suamiistri"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🔮 Menghitung ramalan *${command}* berdasarkan primbon jawa...` });
    }
}
