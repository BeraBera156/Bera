const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("584219070665195539")
setInterval(function() {
channel.send(`Bera Bera Rabe Rabe Rabe Bera`);
}, 30)
})

client.login(process.env.BOT_TOKEN);