const currentDate = moment().format('ddd MMM Do, YYYY');
const currentTime = moment

$(document).ready(function displayDate() {
    $("#currentDay").text( moment().format('ddd MMM Do, YYYY') );
});