const { Bot, InputFile , session} = require("grammy");
// const vaqtSana = require("../tasks/test");
// const geodist = require('geodist');
// const initialText = require("../models/initialText");
// const allText = require("../models/allText")
// const fileStore = {};
const compRouter = require('./command/initialMessage')
const { isChecked } = require("./middleware/Authorization")
const Home = require("./module/buttons")
const Sherik = require('./module/sherik')
const Ishjoy = require("./module/ish.joy")
const Hodim = require('./module/hodim')
const Shogird = require('./module/shogird')
const Ustoz = require('./module/ustoz');
const bot = new Bot("6628951879:AAHiOgWUP4PwZvBIBwX2ULWg4XFtOg0M8pg");

bot.api.setMyCommands([
    {command: "start", description: "START"},
    {command: "help", description: "HELP"},
])


bot.use(session({initial: () =>({step: "hammasi" })}))
bot.use(isChecked)
bot.use(compRouter)

bot.use(Home)
bot.use(Hodim);
bot.use(Sherik)
bot.use(Shogird)
bot.use(Ustoz)
bot.use(Ishjoy)

bot.catch((e) => {
    console.log('e: ', e);
})

bot.start()



//
// bot.command('start', (ctx) => {
//     ctx.reply(`Welcome to UMAR's bot.\n\nAt the moment I can do these operations:\n
//     1. Send me your location, I'm gonna tell you the distance from Center of the TASHKENT\n
//     2. Send me date from the future, I'll tell you how much time is left. Sending format is:\ndate: YYYY-MM-DD HH:MM:SS\n
//     3. Send me a file and I'll provide you ID. You can get your file later by sending ID. Sending format is:\nID: *file_id`);
// });
//
// bot.on(":location", (ctx) => {
//     const ntLoc = { lat: 41.311111, lon: 69.279722 }; // 41.311111, 69.279722
//     const userLoc = ctx.message.location;
//
//     const distanceInKm = geodist(ntLoc, userLoc, { unit: 'km' });
//     ctx.reply(`Distance is: ${distanceInKm.toFixed(2)} km`);
// });
//
// bot.hears(/^date:\s?(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})$/, async (ctx) => {
//     const userInput = ctx.message.text;
//     const keyword = "date:";
//     const dateAndTime = userInput.split(keyword)[1].trim();
//     const result = vaqtSana(dateAndTime);
//
//     console.log(result);
//
//     await ctx.reply(result);
// });
//
// bot.on(":document", (ctx) => {
//     const fileId = ctx.message.document.file_id;
//     const fileName = ctx.message.document.file_name;
//
//     // Store the file details using the file ID
//     fileStore[fileId] = {
//         fileId: fileId,
//         fileName: fileName,
//     };
//
//     ctx.reply(`File ${fileName} has been added with ID ${fileId}`);
// });
//
// bot.hears(/^ID:\s?(\S+)$/, async (ctx) => {
//     const userInput = ctx.message.text;
//     const keyword = "ID:";
//     const fileId = userInput.split(keyword)[1].trim();
//
//     if (fileStore[fileId]) {
//         const fileDetails = fileStore[fileId];
//         await ctx.replyWithDocument(fileDetails.fileId, { caption: `Here is the file: ${fileDetails.fileName}` });
//     } else {
//         await ctx.reply('File not found. Please provide a valid file ID.');
//     }
// });
//
// bot.start();
