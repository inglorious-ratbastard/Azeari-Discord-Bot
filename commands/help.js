module.exports = {
  name: "help",
  desciption: "bot help center",
  execute(msg, args){
    if(msg.member.hasPermission("ADMINISTRATOR"))
    msg.reply('My quick commands are written to simplify things.. \n All commands Must start with the **az$** prefix or they will not work. \n- my **Kick**, **Ban**, and **Mute** commands must take in an *@username* \n- the **Mute** command requres an amount of *time* set in *miliseconds* \n- use the **List** command to see a current version of the Banned Word List \n- use the **Add** and **Del** commands to make changes to the Banned Words')
    else msg.channel.send(`*For further assistance please contact your @moderator for ${msg.guild.name} \n if you have a grievance or other internal issue that needs immediate attention. \n Please be patient as it my job to help circumvent and report these problems.*`)
    return;
  }
}