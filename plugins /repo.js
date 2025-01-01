const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*📍REPO LINK ❤️‍🔥👇*

🧚‍♀️◦https://github.com/chiku12345678/FRONEXTMD

*📍PLEASE SUBSCRIBE MY YOUTUBE CHANNEL ❤️‍🔥👇*

🧚‍♀️◦ https://youtube.com/@avi_nethunter?si=kkpUOtZcEyUu5pT4

*📍PLEASE FOLLOW MY WHATSAPP CHANNEL❤️‍🔥👇*

🧚‍♀️◦ https://whatsapp.com/channel/0029VaqPVqA1yT2CTlHi0o13

*©𝙵𝚁𝙾𝙽𝙴𝚇𝚃 𝙼𝙳 𝙱𝚈 𝙲𝚈𝙱𝙴𝚁 𝙵𝚁𝙾𝙻𝚈ッ*

`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/tr1wj5.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
