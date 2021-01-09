var Discord = require("discord.js");
var bot = new Discord.Client();
require('dotenv').config();
const ms = require('ms');

const app = require('./server');

const prefix = "az$";
const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}`);
  console.log("Chew bubblegum and kick some ass!");
});

bot.on("message", msg => {
   if (msg.guild === null) return;
   if (msg.author.bot) return;
    
   function checkPerms(msg){ 
    if(!msg.member.hasPermission("ADMINISTRATOR"))
    msg.channel.send('*You Do Not Have Access to That*')
  }
  
  if (msg.mentions.members.first() !== undefined){
    if(msg.mentions.members.first().id == '691444591857238086'){
        msg.channel.send('*If you need assistance with my commands use **az$cmd** to list them or **az$help**. \nFor general info about my services use the **az$info** command.*')
    }
  }
  
  let args = msg.content.substring(prefix.length).split(" ");
  
  let bannedwords = require('./banned');
  let badWordCount = require('./count'); 
  
  var Register = {
     id: msg.member.user.id,
     tag: msg.member.user.tag,
  };
  
  for(var i = 0; i < bannedwords.length; i++){
    let lowerCaseContent = msg.content.toLowerCase(); 
    let bannedWord = bannedwords[i];
    if(lowerCaseContent.includes(bannedWord)){
      Register.word = bannedWord;
      badWordCount.push(Register);
    } 
  } 
    if (badWordCount.length > 0){
      msg.delete();
      msg.reply("Please try to use less offensive words while you're here.");
      console.log('\n', badWordCount);
      //return;
    } 
   
    
  switch (args[0]){
     
    case 'info':
      bot.commands.get('info').execute(msg, args);
      break;

    case 'help':  
      bot.commands.get('help').execute(msg, args);
      break;

    case 'cmd':
      bot.commands.get('cmd').execute(msg, args);
      break;

    case 'rules':  
      bot.commands.get('rules').execute(msg, args);
      break;

    case 'kick':
      checkPerms(msg);
      bot.commands.get('kick').execute(msg, args);
      break;

    case 'ban':
      checkPerms(msg);
      bot.commands.get('ban').execute(msg, args);
      break;

    case 'mute':
      checkPerms(msg);
      bot.commands.get('mute').execute(msg, args);
      break;

    case 'list':
      checkPerms(msg);
      bot.commands.get('list').execute(msg, args);
      break;  
    
    case 'add':
      checkPerms(msg);
      bot.commands.get('add').execute(msg, args);
      break;

    case 'del':
      checkPerms(msg);
      bot.commands.get('del').execute(msg, args);
      break;

  }
     
});

  bot.on("error", (e) => {
  console.error(e);
  console.log("We're all out of bubblegum..");
  }); 

bot.login(process.env.TOKEN); 
