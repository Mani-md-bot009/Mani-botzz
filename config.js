const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUV5NGo5T1R2a3ZaZmFkUXRFL01wT1A3KzJwZW1vV2RBQ1RKTXZZcm4xZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpoT2tPN3Jnb2FFSFZ3UkRnTVRPVlBvK2t1NUM4YW5RYitLOGJLQ0VGQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRlpTRElsb0haTU1JZkwxN0pvVERkeUpYblEvalFFMElMR1ZhV3ZncUZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJySmpRcGV4YW9SVW9EWkwwSUFUQUQ1aFUwZ0RPNUs2R1E0ZXJTRGxva1JBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVLSUdBOC9UYm1oNFhIbktOSGtDRlMrZFliK1huYlk1dUtBa1MyUGRoMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU4SVpFQ2dhdDJJNm1rU1lzdFI4UERMODdQR0R1QUp2WnRNc3Nnbjd1Qms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtSR0I4U3BYK3FUbUhWYWI1L0h4RHRncTc3TmlhRDhDek1JNFhzVVVsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0R5eEVlOHBkTllOSExreHViOEtrQWsxT2l0ZDlrREZjaGdqKy9VcWxTbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIyM0Ewbzl3dXIrY1JSYW1QR211aVVYcUhBUHBWSEVGWkRRRFJ0Tm9YaEpwcDVDM3dqMzI2SjZCeW00eUtMNHZJeW5CMStDVnpEOFBpSU1yZHBEZGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6IjZuZ2JiL1Rwa1BqL1lsY09sbFBSL3NQUGZoRG5SN0dJMnMvcUZBZ2ViTWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTk4OTc3NjkyNzIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMxNEM4RTIzQzcxRDFEOEVCNzIzNDFBRTg5MTQ2ODFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUwMjE2OTB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk5ODk3NzY5MjcyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMjhCRkQ5NDAyRDQ4RjJBNzEyMTA5RTI5RjY2RDQyRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MDIxNjkxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5OTg5Nzc2OTI3MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTk5MTc3MzY4MjI2RkZBRTRFRjFGQTRCOTNDM0E3OUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTAyMTY5M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQjFBWERMQ0UiLCJtZSI6eyJpZCI6Ijk5ODk3NzY5MjcyMToyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjUyMTEwOTA2MTAxODYxOjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYjB3KzRHRVBTQzdzUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1QmUyYU1vTUVEeVdpcURoYXJyMXJEZHR1NUhEOFlIek5qQVZacTN6NEdvPSIsImFjY291bnRTaWduYXR1cmUiOiJpK0RWb2NnTkhBRTNuenl2OTIxZktRYUdXYUpOYzVhT1lNaE0vR3E2NVUvU0pTQ2ZlQ2krR0U0Y0tnNDduYTloYXFCbkpLR1VzSW94bU9JV3dFRmpBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicXNIUVpCU0ovVmhWbEk0Qno1QWJkQ3R0WXZlS0dDNDBISUd1QjJtV2JVT3N2bWRmeXZFS3BmRlBjZzVkNmd2c1lsUUdwZmxyVFNBSGJ5L3VablhYaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5OTg5Nzc2OTI3MjE6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlUVh0bWpLREJBOGxvcWc0V3E2OWF3M2JidVJ3L0dCOHpZd0ZXYXQ4K0JxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUwMjE2ODgsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlByIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Mani-bot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Mani-bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mani-bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923033096103",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ManiMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ManiMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "9233033096103",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
