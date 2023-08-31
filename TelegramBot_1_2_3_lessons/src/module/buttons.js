const {Router} = require("@grammyjs/router")
const { sherik, ish, hodim, ustoz, shogirt } = require("../command/options")
const {writeIdIsh, writeHodim, writeUstoz, writeShogird} = require("../middleware/createModel")
const { writeId } = require("../middleware/Authorization")

const router = new Router((ctx) => ctx.session.step)

const all = router.route('hammasi')

all.hears("Sherik kerak",writeId,sherik)
all.hears("Ish joyi kerak",writeIdIsh, ish)
all.hears("Hodim kerak",writeHodim, hodim)
all.hears("Ustoz kerak",writeUstoz, ustoz)
all.hears("Shogird kerak",writeShogird, shogirt)


module.exports = router

