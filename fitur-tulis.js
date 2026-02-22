module.exports = {
    command: ["nulis", "nuliskanan", "nuliskiri", "nulisbuku"],
    run: async (bot, m, { from, command, args }) => {
        bot.sendMessage(from, { text: `✍️ Sedang menuliskan teks *${args.join(" ")}* ke buku virtual...` });
    }
}
