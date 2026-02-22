module.exports = {
    command: ["dana", "ovo", "gopay", "qris", "donasi"],
    run: async (bot, m, { from, command, config }) => {
        bot.sendMessage(from, { text: `💰 Silahkan hubungi owner di wa.me/${config.ownerNumber} untuk ${command}` });
    }
}
