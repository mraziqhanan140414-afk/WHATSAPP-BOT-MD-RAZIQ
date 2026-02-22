module.exports = {
    command: ["reminder", "jadwal", "listtugas"],
    run: async (bot, m, { from, args }) => {
        bot.sendMessage(from, { text: `⏰ Pengingat diatur untuk: *${args.join(" ")}*` });
    }
}
