const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "about",

    desc: "To get the bot informations.",

    react: "ℹ️",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*
                    
 *I AM FRONEXT-MD WHATSAPP BOT*
 
*CREATED BY CYBER FROLY (PASINDU JAYASUNDARA)*..
           
*ɢɪᴛʜᴜʙ :*    
             
*ʏᴏᴜᴛᴜʙᴇ :* https://youtube.com/@avi_nethunter?si=3LvGb8czWMFNItz3
      
*ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ :* https://whatsapp.com/channel/0029VaqPVqA1yT2CTlHi0o13

*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})




