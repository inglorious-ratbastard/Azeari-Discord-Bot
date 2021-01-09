module.exports = {
  name: "ban",
  desciption: "guild member ban",
  execute(msg, args){
    const userb = msg.mentions.users.first();

      if(userb){
        const member = msg.guild.member(userb);

        if(member){
          member.ban({reason: `You have been **banned** from ${msg.guild.name}`}).then(() =>{
           msg.reply(`The user ${userb.tag} has now been **banned**.`);
          });
        } else {
          msg.reply("That user isn\'t in this Guild");
        }
      } else {
         msg.reply("Who would you like me to **ban**?");
      }

    }
}