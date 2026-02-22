module.exports = {
    command: ["ai", "chatgpt", "gemini", "brainly", "google", "wikipedia"],
    run: async (bot, m, { from, command, args }) => {
        bot.sendMessage(from, { text: `🤖 Mengakses AI untuk mencari: ${args.join(" ")}...` });
    }
}
