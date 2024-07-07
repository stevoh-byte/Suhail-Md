const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nairobi/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254768801963" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254768801963";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_44_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgyLFxuICAgICAgICA2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICA0MSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICA3MixcbiAgICAgICAgODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA3LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk4LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBNUh6UDVDZGJUTmI4ZkgwaFhUUFpDWFVWaDR6WTVndFdZYVlMUUlMTW1ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc2ODgwMTk2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTA2NTI3Q0E0NjZGMjcxNjJCRTg3RUU5QTIyMkMyMjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzk1ODg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlOSHlKZ2RPUmt5OExoY0Y5RmRsY3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWY0YmJkODctZmIyMi00NzJkLWFjYmYtZWI5MTk4MjJiYjc0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDI2LFxuICAgICAgMzEsXG4gICAgICA2LFxuICAgICAgMTYxLFxuICAgICAgNTksXG4gICAgICAxMDgsXG4gICAgICAyNCxcbiAgICAgIDE1NSxcbiAgICAgIDI1NCxcbiAgICAgIDE2MixcbiAgICAgIDM4LFxuICAgICAgOTIsXG4gICAgICA2NyxcbiAgICAgIDI0LFxuICAgICAgMzksXG4gICAgICAzOSxcbiAgICAgIDE0NixcbiAgICAgIDYwLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxMzIsXG4gICAgICAyMzUsXG4gICAgICAxLFxuICAgICAgMTI3LFxuICAgICAgOCxcbiAgICAgIDEyNCxcbiAgICAgIDI1NCxcbiAgICAgIDE3MSxcbiAgICAgIDgzLFxuICAgICAgMjQsXG4gICAgICAxNzAsXG4gICAgICAzNCxcbiAgICAgIDE4MyxcbiAgICAgIDExMixcbiAgICAgIDIyMCxcbiAgICAgIDE2MyxcbiAgICAgIDIwMSxcbiAgICAgIDE2NSxcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLRFhYUEtaNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzY4ODAxOTYzOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTEyNTI2OTc2NDkyNzI6ODZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0RmazRzREVPVFFyTFFHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhTzR4OEFqN2xSMG5GSkZ3dUhyYk41eGJmLzNnVmFwTjFHcTVOcVppTkFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlQZW4xS2xIWTJ0YWEvOSs4T1p4RlM3Uk55UGt0aWc3aVlHQ1VuaFhFRzg1UGZJQXhram83eEZZMmZBb1ZZTVZyNUJPM2RSLzlydEUwKzRoOEUwN0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRFaE1jMVBtN0ZhQzRaTVRmdi96a1JiQjBGVHFjb3pIbEhzOHFUZWJSQnBkSEM4Uzc1TWpqK1ExSDBVTUNHVVNuaUxHSmFBRDRjakpzTzhzcWZiWEN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc2ODgwMTk2Mzo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzOTU4NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDMkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMyTC5qc29uIjogIntcImtleURhdGFcIjpcImp6ME1qaVRuT28zU2tCbnlYdE0vSE9nRUdUYnBSdlkxWEFBZTNCcWdiMFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODI4Njk4NTkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzODE5ODM1NThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
