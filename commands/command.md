## Commands Documentation
#### Azeari Bot Commands

This bot is built using a Command Handler and switch statements to manage user input regarding game event declarations.
*Note:* All commands must include the prefix `az$` in order for them to work properly. *Limited by Role* 
___

#### **Basic Commands**
| _Command_ | _Description_ |
| ----------- | ----------- |
| `az$cmd` | Full listing of Azeari's commands |
| `az$help` | General purpose asistance for commands |
| `az$info` | Design and Build Info for Azeari Bot |
| `az$rules` | Link to #rules channel in Guild  |

#### **Quick Commands**
| _Command_ | _Parameters_ | _Functionality_ |
| ----------- | ----------- |
| `az$kick` | @username time | az$kick @jm0nk3y77 300000 |
| `az$ban` | @username time |  az$ban @jm0nk3y77 600000 |
| `az$mute` | @username time | az$mute @jm0nk3y77 900000 |
| `az$list` | _takes in nothing_ |  _returns a list of banned words for your Guild/channel_ |
| `az$add` | input is word | az$add fizbuzz _-adds the word *fizbuzz* to banned words list-_|
| `az$del` | input is word | az$del fizbuzz _-removes the word *fizbuzz* from banned words list-_ |
* Times for Kick/Ban/Mute commands is currently set in milliseconds. *This will be corrected in future versions.*
