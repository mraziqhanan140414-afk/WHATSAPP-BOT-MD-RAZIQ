module.exports = {
    command: ["cekongkir", "jne", "jnt", "sicepat", "tiki"],
    run: async (bot, m, { from, args }) => {
        bot.sendMessage(from, { text: `📦 Mengecek biaya pengiriman ke *${args.join(" ")}*...` });
    }
}
