module.exports = {
    command: ["dmff", "dmls", "pubg", "chips", "topup"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `💳 *MENU TOPUP*\nCek harga ${command} termurah hanya di BOT WHATSAPP MD.` });
    }
}
