module.exports = {
    command: ["tinyurl", "ouo", "bitly", "cuttly"],
    run: async (bot, m, { from, command, args }) => {
        bot.sendMessage(from, { text: `🔗 Memperpendek link menggunakan *${command}*...` });
    }
}
