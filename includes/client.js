/*
 * Information
 * Creator / Developer: Dani Ramdani (Dani Techno.) - FullStack Engineer
 * Contact creator / Developer: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)
*/

/* Thanks to
 * Dani Techno. - FullStack Engineer (Creator / Developer)
 * @danitech/wa-web-api (Library "WhatsApp Web API" provider)
*/

const chalk = require('chalk');
const config = require('../config/settings.js');

module.exports = async ({
  client,
  messages
}) => {
  try {
    const body = messages.mtype === 'conversation' ? messages.message.conversation : messages.mtype === 'extendedTextMessage' ? messages.message.extendedTextMessage.text : '';
    const budy = typeof messages.text === 'string' ? messages.text : '';

    const senderNumber = messages.sender.replace(/\D/g, '');
    const senderName = messages.pushName || 'Undefined';

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
      const question = body;

      const fetchData = async (question, apiKey) => {
        const baseURL = config.api.url;
        const relativeURL = `/api/artificial-intelligence/chatgpt-35?api_key=${apiKey}&question=${question}`;
        const data = await fetch(baseURL + relativeURL);
          
        return data.json();
      };
        
      const response = await fetchData(question, config.api.key); // Dapatkan API key disini: https://daniapi.biz.id
        
      console.log(response);
      messages.reply(response.data.answer);
    } catch {
      messages.reply('Terjadi kesalahan pada server.');
      console.error(error);
    };
  } catch (error) {
    messages.reply('Terjadi kesalahan pada server.');
    console.error(error);
  };
};