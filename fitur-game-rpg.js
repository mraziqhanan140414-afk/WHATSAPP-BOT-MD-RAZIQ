module.exports = {
    command: ["adventure", "mining", "heal", "inventory", "dungeon"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `⚔️ Memulai *${command}*... Kamu mendapatkan 100 XP!` });
    }
}
