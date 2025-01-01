const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "joke",
    desc: "😂 Get a random joke",
    react: "🤣",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://official-joke-api.appspot.com/random_joke';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;

        const jokeMessage = `
😂 *Here's a random joke for you!* 😂

*${joke.setup}*

${joke.punchline} 😄

*©𝙵𝚁𝙾𝙽𝙴𝚇𝚃 𝙼𝙳 𝙱𝚈 𝙲𝚈𝙱𝙴𝚁 𝙵𝚁𝙾𝙻𝚈ッ* `;

        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ ¢συℓ∂η'т ƒєт¢н α נσкє яιgнт ησω. ρℓєαѕє тяу αgαιη ℓαтєя.");
    }
});
