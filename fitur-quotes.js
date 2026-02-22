module.exports = {
    command: ["quotes", "katabijak", "motivasihidup", "gombalan"],
    run: async (bot, m, { from, command }) => {
        const quotes = ["Jangan menyerah sebelum pairing code tembus", "Bot ini dibuat dengan penuh cinta"];
        bot.sendMessage(from, { text: `💬 ${quotes[Math.floor(Math.random() * quotes.length)]}` });
    }
}
