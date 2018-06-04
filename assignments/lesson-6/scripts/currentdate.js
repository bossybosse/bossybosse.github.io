var today = new Date();
var day = today.getDate();
var year = today.getFullYear()

var monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = monthNames[today.getMonth()];

var weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weekDay = weekDayNames[today.getDay()];

var returnString = weekDay + ", " + day + " " + month + " " + year;

document.write(returnString);
