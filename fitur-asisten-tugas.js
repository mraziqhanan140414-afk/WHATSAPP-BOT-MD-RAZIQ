module.exports = {
    command: ["kalkulator", "cektypo", "ringkas", "kbbi"],
    run: async (bot, m, { from, command, args }) => {
        bot.sendMessage(from, { text: `✍️ Asisten Tugas sedang memproses *${command}*...` });
    }
}
