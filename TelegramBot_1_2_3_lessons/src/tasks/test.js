function vaqtSana(userInput) {
    // console.log('User input:', userInput);

    var userDate = new Date(userInput).getTime();
    // console.log('User date in milliseconds:', userDate);

    if (isNaN(userDate)) {
        return 'Format is wrong.';
    }

    var currentDate = new Date().getTime();
    var farq = userDate - currentDate;

    // console.log('Time difference in milliseconds:', farq);

    if (farq < 0) {
        return 'Enter date from the future';
    }

    var kun = Math.floor(farq / (1000 * 60 * 60 * 24));
    var soat = Math.floor((farq % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minut = Math.floor((farq % (1000 * 60 * 60)) / (1000 * 60));

    return (
        'Time left: ' +
        kun +
        ' days, ' +
        soat +
        ' hours, ' +
        minut +
        ' minutes. '
    );
}

module.exports = vaqtSana; // calculates how much time left till given date
