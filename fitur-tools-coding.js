module.exports = {
    command: ["js", "python", "html", "css", "runcode"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `💻 Mengonversi/Menjalankan kode *${command}*...` });
    }
}
