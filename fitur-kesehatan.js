module.exports = {
    command: ["cekbmi", "infopenyakit", "obatpusing"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🏥 Konsultasi bot mengenai *${command}* sedang diproses.` });
    }
}
