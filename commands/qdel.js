let bannedwords = require('../banned');
module.exports = {
  name: "del",
  desciption: "delete words index",
  execute(msg, args){
    //bannedwords.splice(bannedwords.indexOf(args[1]));
    msg.reply(`You have **removed** a word from the Blacklist!`);
  }
}