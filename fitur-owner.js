module.exports = {
    command: ["bc", "broadcast", "shutdown", "public", "self", "getsession"],
    run: async (bot, m, { from, command, sender, config }) => {
        if (!sender.includes(config.ownerNumber)) return;
        bot.sendMessage(from, { text: `👑 Owner Command: *${command}* executed.` });
    }
}
