module.exports = {
    command: ["igstalk", "ttstalk", "githubstalk", "ceknomor"],
    run: async (bot, m, { from, command, args }) => {
        bot.sendMessage(from, { text: `🔍 Sedang mengintai profil: *${args.join(" ")}*` });
    }
}
