module.exports = {
  name: "mute",
  desciption: "guild member mute [timed]",
  execute(msg, args){
    var person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.fetch(args[1]));

     if(!person) return  msg.reply("Which user should I **mute**?")
 
        let mainrole = msg.guild.roles.fetch(role => role.name === "@everyone");
        let role = msg.guild.roles.fetch(role => role.name === "mute");
           
        if(!role) return msg.reply("Couldn't find the **mute** role.")
 
        let time = args[2];
          if(!time){
            return msg.reply("You didnt specify a time!");
          }
 
          person.roles.remove(mainrole.id)
          person.roles.add(role.id);
 
 
          msg.channel.send(`@${person.user.tag} has now been **muted** for ${ms(ms(time))}`)
 
          setTimeout(function(){
               
          person.roles.add(mainrole.id);             
          person.roles.remove(role.id);
          console.log(role.id)

          msg.channel.send(`@${person.user.tag} has been **unmuted**.`)
            }, ms(time));
  }
}