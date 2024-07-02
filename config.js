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
global.sudo = process.env.SUDO || "94720797915,94763621705";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JwOHl5OFRXVTJ3a0g2cDM2VDQ5dWFQNlljU01BT1pPTGtIaVNKNVRVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMm9wT2N5Y2dMSWUxdzV4S1VreU5zVmU3dFdUUVlzZlB6SkRWUmdzU01FVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTHYvTkNiOEVSd1FZa1VsaUV0T012QTdEdGFtNWpyMTY5aWRnTnl2Y2xrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQjRjNGRDRmJFVzdkRlBrdldpT1p4bGtsR3JMZmpZS2NHL0hxQUZ4RUJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNOTm80aVl5UEprQ1BKaVZSS3NnVmRIZEVuV2NuTmRRaFBnZU45ek5zbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFZXdYYzNWNGt0MVVzNlgwMG52NlcxNk9ieHdUR1pvV0gzblhRSDBVMVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xMbVZWdkNWYnRMZVIxMGs4Q05vVy9sQ3BxaHA5WjUzYmJuVmg0YS9WTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnJFL01qSnV3TnFwUzA1YlR6Y3c5WEFnK1NydllDb3RIVGVNOWdHb0tCbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx4NFA3K0FQdXBMR3FVZERYUHBVSDlBSjdxRjh2OUIwbVhqSm82aHMxRVRxVC9NT3FxNHVQWEdXUXRTejBLem9ZaWlZRzF6OTdSUER2ejJLbFNieGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiJ0cE96UFZycjJZWW52ZVg1ZG52MWlKTWFTYlZHZFhTbGVhN0lNbGhLZmJnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3S3hmQllKMFM0MjRyaUdvV1VpTTBRIiwicGhvbmVJZCI6IjQyNWJiYWZkLTU1ZjctNDNmNC04NzZkLTE4MGIwZWQ5NDQzYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzcWpnSDFEbHZTVTN2NktLMlFVR01rZGtWWUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2lPbFpiamNWb2FJZDY2SUszSVI5a2p5V1pjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5DUlBZNVNSIiwibWUiOnsiaWQiOiI5NDc3NDcyMTkxMTo4NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZec8J2XpvCdl5vwnZeU8J2XoSDwnZee8J2XlPCdl6rwnZec8J2XpvCdl5sifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xqUGdKOEVFSkdIa2JRR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFxWkY0U1NhcHFPd2NRQjhoYmx6MVQzNWZCbEdIQUIyVDVrSkY2ODFqQ1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1hYnFEbmZ3cUtsNWRicEFYOUZ4dTkxZk1ZeVBOUnYraHhzZVozeW0vWTNZTHAxaDVrd1AwSzdKRDZya1VkUTVnV1NNOStMQ09mNzZtc3RSUUY5RkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4Ym5BRk1vNFBZc1FrM29sMzgwT01KYnJJQ0xvZ3FEUVJ4dVczK05OUmdnN0hkcWZTdmozbmkxQ0NqOVNFQkNSeFJ6d2g3MTFjNDlWc3B5cU9mREhndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc0NzIxOTExOjg0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVLbVJlRWttcWFqc0hFQWZJVzVjOVU5K1h3WlJod0FkaytaQ1Jldk5Zd2wifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk5NDQwOTR9"

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
