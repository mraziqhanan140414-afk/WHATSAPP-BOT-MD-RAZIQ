module.exports = {
    command: ["toimg", "tovideo", "tomp3", "toptt", "tovv"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `⚙️ Mengonversi media ke *${command}*...` });
    }
}
