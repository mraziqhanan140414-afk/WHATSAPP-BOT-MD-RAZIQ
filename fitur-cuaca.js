module.exports = {
    command: ["cuaca", "suhu", "prediksihujan"],
    run: async (bot, m, { from, args }) => {
        bot.sendMessage(from, { text: `☁️ Mengecek kondisi cuaca di *${args.join(" ")}*...` });
    }
}
