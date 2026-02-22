module.exports = {
    command: ["cekrekening", "biayaadmin", "kursdollar"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `💸 Menampilkan data *${command}* terbaru.` });
    }
}
