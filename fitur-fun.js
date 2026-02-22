module.exports = {
    command: ["gay", "lesbi", "pintar", "cantik", "ganteng", "cek"],
    run: async (bot, m, { from, command }) => {
        const persen = Math.floor(Math.random() * 100);
        bot.sendMessage(from, { text: `Cek *${command}* kamu adalah: ${persen}%!` });
    }
}
