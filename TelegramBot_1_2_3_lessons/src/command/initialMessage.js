const {Composer} = require("grammy")
const {options,} = require("../helpers/buttons")

const bot = new Composer()

bot.command("start", async(ctx) =>{
    await ctx.reply(`<b>Hush kelibsiz ${ctx.from.first_name}
    bu UstozShogird kanal botining nusxasi</b>

    /help `,{
        parse_mode: "HTML",
        reply_markup:{
            ...options,
        },
    })
})

bot.command("help", async(ctx) =>{
    ctx.reply("UzGeeks faollari tomonidan tuzilgan Ustoz-Shogird kanali.\n\n Bu yerda Programmalash bo`yicha \n#Ustoz, \n#Shogird,\n#oquvKursi,\n#Sherik,\n#Xodim va \n#IshJoyi \ntopishingiz mumkin.\n \nE'lon berish: @usytestybot\n \nKanal @usytestychan")
})
module.exports = bot