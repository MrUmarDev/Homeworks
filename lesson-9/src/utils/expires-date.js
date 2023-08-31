let currentDate = new Date();
let daysToAdd = 7;
let expirationDate = new Date(
  currentDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000
);
let formattedExpirationDate = expirationDate.toISOString().split("T")[0];
module.exports = formattedExpirationDate;