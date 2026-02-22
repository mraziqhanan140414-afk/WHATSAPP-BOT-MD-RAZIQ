module.exports = {
    command: ["asupan", "jedagjedug", "storywa", "vnmama"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🎥 Mengirimkan video *${command}* random...` });
    }
}
