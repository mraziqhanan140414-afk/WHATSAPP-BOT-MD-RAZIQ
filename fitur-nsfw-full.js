module.exports = {
    command: ["hentai", "nsfw-neko", "trap", "blowjob", "bj", "ero"],
    run: async (bot, m, { from, command, sender, config }) => {
        const isOwner = sender.includes(config.ownerNumber);
        if (!isOwner) return bot.sendMessage(from, { text: "❌ Fitur NSFW hanya bisa diakses oleh Owner!" });
        
        bot.sendMessage(from, { 
            image: { url: `https://api.waifu.pics/nsfw/${command}` }, 
            caption: `🔥 NSFW ${command} pesananmu, jangan lupa kunci pintu!` 
        });
    }
}
