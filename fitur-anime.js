module.exports = {
    command: ["waifu", "neko", "shinobu", "megumin", "loli", "cosplay"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { image: { url: `https://api.waifu.pics/sfw/${command}` }, caption: `Nih ${command} kamu!` });
    }
}
