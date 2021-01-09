let bannedwords = require('../banned');
module.exports = {
  name: "add",
  desciption: "add to words index",
  execute(msg, args){
    bannedwords.push(args[1]);
    msg.reply(`You have **added** a new word to the Blacklist!`);
  }
}
