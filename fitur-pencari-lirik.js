module.exports = {
    command: ["lirik", "liriklagu", "chordgitar"],
    run: async (bot, m, { from, args }) => {
        bot.sendMessage(from, { text: `🎵 Mencari lirik lagu: *${args.join(" ")}*` });
    }
}
