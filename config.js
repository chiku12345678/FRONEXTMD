const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2dtQjZrI#0HhU3ASOAp5Y7gXjhm4AbrQjMwUqVmE3brpTM3Aodmw",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/tr1wj5.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi FRONEXT-MD Is Online Now 💻\n*💻 Owner* - FRONEXT-MD\n\n*💻 Owner Number* -94743491027",
SUDO_NB: process.env.SUDO_NB || "94743491027",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

