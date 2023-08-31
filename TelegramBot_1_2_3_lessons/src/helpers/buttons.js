const { Keyboard } = require("grammy");

const options = new Keyboard()
  .text("Sherik kerak")
  .text("Ish joyi kerak")
  .row()
  .text("Hodim kerak")
  .text("Ustoz kerak")
  .row()
  .text("Shogird kerak");

  const alter = new Keyboard().text("Ha").text("Yoq").resized()

const btn1 = options.keyboard[0][0];
const btn2 = options.keyboard[0][1];
const btn3 = options.keyboard[1][0];
const btn4 = options.keyboard[2][0];
const btn5 = options.keyboard[2][1];

module.exports = { btn1, btn2, btn3, btn4, btn5, options, alter };
