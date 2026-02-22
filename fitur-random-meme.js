module.exports = {
    command: ["meme", "memeindo", "darkjokes", "jokesbapak"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🤣 Mengambil *${command}* paling lucu dari internet...` });
    }
}
