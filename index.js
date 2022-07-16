const { Client, Intents } = require('discord.js');
const { token, voleraID } = require('./config.json');
const answers = ["Это пассивная агрессия!","Геев не уважаем?","ты пидор.","Test message!","это же волерка"];
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

// When the client is ready, run this code (only once)

client.on('message', (msg)=>
{
    if(msg.author.bot)return
    if(msg.author.id === voleraID)
    if(parseInt(Math.random()*4) === 0)
    msg.reply(answers[parseInt(Math.random()*(answers.length-0.00001))])
}
);

client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);