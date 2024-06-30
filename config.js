const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "masterhelper@gmail.com";
global.location = "Asia/Colombo";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "94720797915@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github = process.env.GITHUB || "https://github.com/MrMasterOfc/MASTER-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaWWZa1G3R3c4TPADo0M";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2368f1b5d6ff724ae0c51.jpg";
global.devs = "94720797915";
global.sudo = process.env.SUDO || "94720797915";
global.owner = process.env.OWNER_NUMBER || "94720797915";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";  //Fill the value: 'unavailable'(for nothing) | 'available'(for alwaysonline) | 'composing'(for typing) | 'recording' | 'paused'
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "94720797915";
global.read_status_from = process.env.READ_STATUS_FROM || "94720797915";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
 "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNBVE5zSHlxRWlXbmRXM09oRUdacGFYekRMNEZmdlhzaUJnWGpFT01rTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lSZkNnMXBsOEFvUmRSalRod3NockxZNEhrRXdhQXlYWkJvbmdYb01DQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRkI1OElEeVFCbDFEK3hyL0dtYUNiQktXWi84eEZCVEtPRmZDUzVuOGs0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2M1JaQStqNFVqakhQOTNBV0ZmUnlNTXVtQWVocTVrc2RqNU1ZRVF1a2hJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFIVCtnWUFvcUhXRHJvTzVMTllYUXgvd1hmdExCSDJ2Z2dLeUlZczk5bUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdTcU9UUnU5dldaWTF1QUpYR3ZlZWtGTUpPZnc4R3JaL1RQcGRhNkk0M1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1tbWxSVENYR2p0TCtRWXhicERFL25wSUR5NzdkMHRhRnlxbnVoS2Jtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3l3SUF6V1UySVJLVnk4WkRsdEsweTNDaHgxd1l6NDBzQi9lb2FFNklEaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJVMmcwRDVSSzQxejJnM2RBak9xaHdMMzh3UnBpZDJWU21OOWtqam5TYXNpbDhEb3k0Q2FZN01qTWNvczMyamFEQzgrSk9jV2dVMHFpbFh5d1hRK2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJ3bjdkNUlvdjZFaTg1RlliYWViTGx1K0tqSGY4d0FabkVQOVc1REhaSEZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfaGhvcW4wSlR4Nl93TVhLaXRFaFdRIiwicGhvbmVJZCI6ImVjMjA1ZDRiLWQ2NmMtNGJmNi04NTg1LTMxMjhlYTZiMGY2NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSaXRLeDd5MkJHZ1A1THJvTDdnNHNtTjBMcTQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxEOGlXVTVmeFppUHNFc21KbDNxL3BCeTdsWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ016Wmdwb0ZFSlRpZ2JRR0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9Dc1lvZW4rZWQrMWtjTk1GdDhEWUpFTEdIOTZENDNRWTNNbnJVZzBManM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZhMmNPTW80U2R0WmNlQU5GeWZhdGFIUUxlYWFLRGVMZHd4cFVyMFYxcWpVNmtjVTRWa05PWDAreU1UdkNVSjNadlpQTStuR1gvRXV2ZkxvQlFqK0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4dDQza0xOcVI1UjMrMTdmR2o0RERYcGF0TGZadTdxWWh3dXEreHFLOFBFQTlqaXlYZ1F1cFI0b3ZpQVgveHBwTFR5dzJoWUJIeVR6K2NIK0Z1QjBnZz09In0sIm1lIjp7ImlkIjoiOTQ3MjA3OTc5MTU6MzZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSSBBTVxuXG5cblxuXG5NXG5cblxuXG5cblxuQVxuXG5cblxuXG5TXG5cblxuXG5cblRcblxuXG5cblxuRVxuXG5cblxuXG5SXG5cblxuXG5cbk1cblxuXG5cblxuSVxuXG5cblxuXG5OXG5cblxuXG5cbkQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjA3OTc5MTU6MzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZndyR0tIcC9ubmZ0WkhEVEJiZkEyQ1JDeGgvZWcrTjBHTnpKNjFJTkM0NyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTY5MzYwMn0="
  module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ꜱᴀʜᴀɴ ᴏꜰᴄ",
  author: process.env.PACK_AUTHER || "Shana",
  packname: process.env.PACK_NAME || "MASTER-MD",
  botname: process.env.BOT_NAME || "•ᴍᴀꜱᴛᴇʀ-ᴍᴅ•",
  ownername: process.env.OWNER_NAME || "Sahan",
  errorChat: process.env.ERROR_CHAT || "94720797915",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "345f70f1c3f2ecef4d718d33c14026f9",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
