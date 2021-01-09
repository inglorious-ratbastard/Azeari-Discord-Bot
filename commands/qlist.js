let bannedwords = require('../banned');
module.exports = {
  name: "list",
  desciption: "banned words index",
  execute(msg, args){ 
    msg.author.send(`The following words are banned in ${msg.guild.name}.. \n [${bannedwords}]`); 
  }
}