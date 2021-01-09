module.exports = {
  name: "cmd",
  desciption: "commands list",
  execute(msg, args){
    if(msg.member.hasPermission("ADMINISTRATOR"))
    msg.reply("\n Here's a list of my quick commands: \n **az$kick** @username \n **az$ban** @username \n **az$mute** @username time \n **az$list** \n **az$add** word \n **az$del** word \n Remember to use the prefix **az$** before each command.")
    else msg.channel.send(`*Sorry but only **Moderators** and **Administrator** have access to my commands. \n If you'd like to be assigned a particular role in ${msg.guild.name} please ask within.*`)
    return;
  }
}