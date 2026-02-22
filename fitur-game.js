module.exports = {
    command: ["tebakgambar", "susunkata", "suit", "tictactoe", "cekkhodam", "apakah"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🎮 Game *${command}* dimulai!` });
    }
}
