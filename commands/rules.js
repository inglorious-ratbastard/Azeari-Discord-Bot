module.exports = {
  name: "rules",
  desciption: "guild rules",
  execute(msg, args){
    msg.reply(`Thank you for inquiring about our **Rules** here in ${msg.guild.name}..
     Please visit our <#701218060664701009> channel for details on our Guild rules & regulations.`);
     return;
  }
}