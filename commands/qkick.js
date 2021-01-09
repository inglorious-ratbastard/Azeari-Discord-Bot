module.exports = {
  name: "kick",
  desciption: "guild member kick",
  execute(msg, args){
    const userk = msg.mentions.users.first();

      if(userk){
        const member = msg.guild.member(userk);

        if(member){
          member.kick(`You have been **kicked** from ${msg.guild.name}`).then(() =>{
           msg.reply(`Succesfully **kicked** ${userk.tag}`);
          }).catch(err => {
            msg.reply('I was unable to **kick** the member');
            console.log(err);
          });
        } else {
          msg.reply("That user isn\'t in this Guild");
        }
      } else {
         msg.reply("Who would you like me to **kick**?");
      }
      
  }
}