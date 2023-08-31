const checkDate = (expires_date) => {
  let currentDate = new Date();

  let expirationDateString = expires_date;
  let expirationDate = new Date(expirationDateString);

  if (currentDate > expirationDate) {
    return false
  } else {
    return true
  }
};
module.exports = checkDate;
