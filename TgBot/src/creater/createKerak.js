const { Keyboard } = require("grammy");

const Button = new Keyboard().text("Sherik kerak").text("Ish joyi kerak").row().text("Hodim kerak").text("Ustoz kerak").row().text("Shogird kerak");

const yesNo = new Keyboard().text("Yes").text("No").resized();

module.exports = {Button, yesNo};