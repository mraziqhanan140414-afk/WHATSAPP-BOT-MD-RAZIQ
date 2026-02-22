module.exports = {
    command: ["sertifikattol", "sertifikatff", "sertifikatpacar"],
    run: async (bot, m, { from, command, args }) => {
        bot.sendMessage(from, { text: `🎓 Sedang membuat *${command}* untuk nama ${args.join(" ")}` });
    }
}
