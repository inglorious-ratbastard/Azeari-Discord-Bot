module.exports = {
  name: "rules",
  desciption: "guild rules",
  execute(msg, args){
    const rule = msg.guild.channels.cache.find(channel => channel.name === "rules");

    msg.reply(`Thank you for inquiring about our **Rules** here in **${msg.guild.name}**..
     Please visit our ${rule} channel for details on our Guild rules & regulations.`);
     return;
  }
}