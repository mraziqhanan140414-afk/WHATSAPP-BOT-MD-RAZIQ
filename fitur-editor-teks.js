module.exports = {
    command: ["alay", "cooltext", "aesthetic", "font"],
    run: async (bot, m, { from, args }) => {
        bot.sendMessage(from, { text: `✨ Mengubah teks menjadi *${args.join(" ")}* yang keren.` });
    }
}
