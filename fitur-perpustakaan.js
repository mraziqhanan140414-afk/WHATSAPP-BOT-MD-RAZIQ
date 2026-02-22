module.exports = {
    command: ["wiki", "perpus", "buku", "cariresep"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `📚 Sedang mencari informasi *${command}* di perpustakaan bot...` });
    }
}
