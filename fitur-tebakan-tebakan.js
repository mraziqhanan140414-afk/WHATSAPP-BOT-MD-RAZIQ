module.exports = {
    command: ["tebaklirik", "tebakkalimat", "tebakbendera", "tebakkimia"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🎮 Game *${command}* dimulai! Silahkan jawab dalam 30 detik.` });
    }
}
