module.exports = {
    command: ["pinterest", "googleimage", "wallpaper", "ppcp"],
    run: async (bot, m, { from, command, args }) => {
        bot.sendMessage(from, { text: `🖼️ Mencari gambar *${args.join(" ")}* di database...` });
    }
}
