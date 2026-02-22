module.exports = {
    command: ["kick", "add", "hidetag", "promote", "demote", "antilink"],
    run: async (bot, m, { from, command, args }) => {
        bot.sendMessage(from, { text: `⚙️ Fitur Group *${command}* sedang diproses...` });
    }
}
