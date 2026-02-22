module.exports = {
    command: ["spotify", "joox", "lyrics", "chord", "shazam"],
    run: async (bot, m, { from, command, args }) => {
        bot.sendMessage(from, { text: `🎵 Mencari lagu/lirik: *${args.join(" ")}*` });
    }
}
