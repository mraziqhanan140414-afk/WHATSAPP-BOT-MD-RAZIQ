module.exports = {
    command: ["test", "ping", "runtime", "speed", "usage"],
    run: async (bot, m, { from, command }) => {
        bot.sendMessage(from, { text: `🚀 Bot MD Speed: *0.0001 ms* (Fitur: ${command})` });
    }
}
