module.exports = {
    command: ["tiktok", "ig", "ytmp3", "ytmp4", "fb", "git", "twitter"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `📥 Sedang mendownload dari *${command}*...` });
    }
}
