const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 client.on('message', message => {
  if (message.content.startsWith("+bot")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' servers:globe_with_meridians:',[${client.guilds.size}])
.addField(' members:busts_in_silhouette: ',[${client.users.size}])
.addField('rooms:books: ',[${client.channels.size}]) 
.addField(' ping:rocket: ',[${Date.now() - message.createdTimestamp}]) 
.addField('.negur  + HypeSquad ',negur)
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});

 


client.login(process.env.BOT_TOKEN);
