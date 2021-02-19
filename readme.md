## Azeari Bot
#### Moderation and Filter Services for Discord Servers
Azeari is a bot designed with the intention of assisting your team members in maintaining a safe, unsoiled environment in their Discord servers. 
### **Features:**
* Fast and easy to use
* Built-in Command Handler
* Moderation Resources 
* Word Filter with Auto-Services
* ~~Role Assignment for Personalized Moderation~~
* Live Server and Hosting
___
#### **Commands:**
Users can use the `@Azeari` command to initilize a response from the bot,  `az$cmd` to list all commands or `az$help` for futher assistance. Full [documentation](#./commands/command.md) about this bot's commands has been provided for additional support.  
___
#### **Express Server and Live Hosting:**
This bot is built with a Node-Express backend server for the purpose of persistent hosting. This simple server is pinged by [UptimeRobot](https://uptimerobot.com) at a preset interval thus allowing the bot to remain active even during your host site's activity timeout settings. 
*The server will run on a default `PORT` unless specified otherwise.*
___
#### **How to Install and Run:**
1. Clone the repository
`git clone` 
2. Install the dependencies
`npm install` 
3. Create environment file and set bot credentials
 add `.env` file to your project folder
4. Run the Bot (also starts the Express server)
`npm index`
5. How to Run the Server (standalone version)
`npm server`

*The bot `TOKEN`, `ID` number, and Server `PORT` number must be properly configured within your own global enviroment `.env` file otherwise it will not work.*
___
#### **Source and License:**
Azeari Discord Bot was created by [Javier Yzaguirre](https://github.com/inglorious-ratbastard) and is considered free and open source to use as reference for those wanting to create their own bot or contribute to this project. 
___
#### **Reporting Bugs or Issues:**
If you would like to report a Bug or Issue in this project feel free to do so under the Issues tab or contact me directly about any major concerns. 
___
#### **Resources:**
[Repl.it](https://repl.it/)
[UptimeRobot](https://uptimerobot.com/)