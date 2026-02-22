module.exports = {
    command: ["alquran", "sholat", "doa", "kisah", "hadits"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🕋 Fitur Islami: *${command}*` });
    }
}
