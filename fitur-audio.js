module.exports = {
    command: ["vn", "suarahantu", "suaracewek", "suarabapak"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🎤 Mengirimkan Voice Note *${command}*...` });
    }
}
