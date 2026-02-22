module.exports = {
    command: ["fasebulan", "gerhana", "planet", "nasa"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🚀 Mengintip luar angkasa melalui fitur *${command}*...` });
    }
}
