module.exports = {
    command: ["fbstalk", "twtstalk", "threads", "bluebird"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🌐 Mencari data sosial media via *${command}*...` });
    }
}
