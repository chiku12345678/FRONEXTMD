const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO* 

*⚡Owner Name -: Pasindu Jayasundara (Cyber Froly)*
*⚡Number* -: 94743491027
*⚡You tube -:* https://youtube.com/@avi_nethunter?si=TeM8WSPOhTlYfn2S
*⚡Whatsapp Chanel -:* https://whatsapp.com/channel/0029VaqPVqA1yT2CTlHi0o13

*©𝙵𝚁𝙾𝙽𝙴𝚇𝚃 𝙼𝙳 𝙱𝚈 𝙲𝚈𝙱𝙴𝚁 𝙵𝚁𝙾𝙻𝚈ッ*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/tr1wj5.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
