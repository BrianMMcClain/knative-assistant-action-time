module.exports = x => {
    d = new Date()

    var ampm = "AM";
    var hour = d.getHours();
    if (hour > 12) {
        hour -= 12;
        ampm = "PM";
    }

    var minute = d.getMinutes();
    if (minute == 0) {
        minute = "o' clock"
    }
    else if (minute < 10) {
        minute = `0${minute}`;
    }

    return `The current time is ${hour} ${minute} ${ampm}`
}