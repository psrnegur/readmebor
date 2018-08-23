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
  if (message.content.startsWith(+bot + "bot")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' servers🌐',`[${client.guilds.size}]  `)
.addField(' members👥 ',` [${client.users.size}] `)
.addField('rooms📚 ',`[${client.channels.size}]`) 
.addField(' ping🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('.negur  + HypeSquad ',`negur`)
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
  if(+message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+Mhstr')){
if (message.author.id !== '389090790984515594') return message.reply('** only for admins **')
message.channel.sendMessage('sending... |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
client.on('ready', function(){    
  var ms = 40000 ;    
  var setGame = ['+inv','+help'];    
  var i = -1;    
  var j = 0;    
  setInterval(function (){    
      if( i == -1 ){    
j = 1;    
     }    
      if( i == (setGame.length)-1 ){    
          j = -1;    
    }    
     i = i+j;    
      client.user.setGame(setGame[i],`http://www.youtube.com/gg`);    
}, ms);    
  
});
client.on('message', message => {
  var prefix = "+";
        if(message.content === +hide + "hchannel") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('Channel Hided Successfully ! ✅  ')
   }
  }); 
  client.on('message', message => { //invite
    if (message.content.startsWith(+inv + "invite")) {
     if(!message.channel.guild) return;
if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 0,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const Embed11 = new Discord.RichEmbed()
        .setColor("#5016f3")
        .setDescription("sending in the priv...")
   .setFooter("HypeSquad ",'https://b.top4top.net/p_965t8no21.png')
                   .setTimestamp()
                message.channel.send('**done**');


      message.channel.sendEmbed(Embed11).then(message => {message.delete(3000)})
      message.author.sendEmbed(Embed11)
    }
});
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "+roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
client.on("message", message => { //clear
  var args = message.content.substring(+clear.length).split(" ");
  if (message.content.startsWith(prefix + "clear")) {
      if(!message.channel.guild) return message.reply('**❌ srry**');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  only admins**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``done ``",
color: 0x5016f3, 
footer: {

}
}}).then(msg => {msg.delete(3000)});
                }


});
client.on('message', message => { 
  var prefix ="!";
         if (message.content.startsWith(prefix + "id")) {
   var args = message.content.split(" ").slice(1);
   let user = message.mentions.users.first();
   var men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
    var mentionned = message.mentions.members.first();
       var h;
      if(mentionned) {
          h = mentionned
      } else {
          h = message.member
      }
             moment.locale('ar-TN');
    var id = new  Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL) 
  .setColor("#707070")
  .addField(': welcome bro', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
  .addField(': welcome bro', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
  .setFooter(`Morro Bot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
  .setThumbnail(heg.avatarURL);
  message.channel.send(id)
}       });





 


client.login(process.env.BOT_TOKEN);
