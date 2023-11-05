const chalk = require('chalk');
const config = require('../config/settings.js');

module.exports = async ({
  client,
  messages
}) => {
  try {
    const body = messages.mtype === 'conversation' ? messages.message.conversation : messages.mtype === 'extendedTextMessage' ? messages.message.extendedTextMessage.text : '';
    const budy = typeof messages.text === 'string' ? messages.text : '';
    const command = body.startsWith(config.prefix) ? body.replace(config.prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
    const cleanCommand = command.replace(config.prefix, '');
    const args = body.trim().split(/ +/).slice(1);
    const query = q = args.join(' ');
    const query1 = q1 = query.split('|')[0]
    const query2 = q2 = query.split('|')[1]

    const ownerNumbers = config.owner.number;
    const senderNumber = messages.sender.replace(/\D/g, '');
    const senderName = messages.pushName || 'Undefined';
    const isOwner = ownerNumbers.includes(messages.sender);

    if (!config.public_mode) {
      if (!messages.key.fromMe) {
        return;
      };
    };

    if (messages.message) {
      client.readMessages([messages.key]);

      console.log(
        chalk.bgMagenta(' [New Message] '),
        chalk.cyanBright('Time: ') + chalk.greenBright(new Date()) + '\n',
        chalk.cyanBright('Message: ') + chalk.greenBright(budy || messages.mtype) + '\n' +
        chalk.cyanBright('From:'), chalk.greenBright(senderName), chalk.yellow('- ' + senderNumber) + '\n' +
        chalk.cyanBright('Chat Type:'), chalk.greenBright(!messages.isGroup ? 'Private Chat' : 'Group Chat - ' + chalk.yellow(messages.chat))
      );
    };
    
    try {
      messages.reply('Wait a moment...');
      const query = body;
      
      const fetchData = async (question) => {
        var baseUrl = config.api.url, relativeUrl = `/api/artificial-intelligence/chatgpt-35?api_key=${config.api.key}&question=${question}`;
        const response = await fetch(baseUrl + relativeUrl);
        
        return response.json();
      };
      
      const data = await fetchData(query);
      console.log(data);
      
      const response = data.data.answer;
      messages.reply(response);
    } catch (error) {
      console.error(error.message);
    };
    
  } catch (error) {
    messages.reply('Terjadi kesalahan pada server.');
    console.error(error);
  };
};