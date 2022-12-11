// creating the functionality
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


// creating the edited functionality


// creating functionality that enables 10 days after to always be displayed

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate(); 
// const futureDate = new Date(2022, 4, 30, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const futureYear = futureDate.getFullYear();
let futureMonth = futureDate.getMonth();
futureMonth = months[futureMonth];
let futureDay = futureDate.getDay();
futureDay = weekdays[futureDay];
const futureHour = futureDate.getHours();
const futureMin = futureDate.getMinutes();
const futureSecs = futureDate.getSeconds();
giveaway.innerHTML = `Giveaway Ends on ${futureDay}, ${futureHour} ${futureMonth} ${futureYear}, ${futureHour}:${futureMin}am`


// creating the countdown functionality properly

function functionality(){
    const futureTime = futureDate.getTime();
    const currentTime = new Date().getTime();
    const t = futureTime - currentTime;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;
    const oneSec = 1000;

    // getting the days, hours, mins, secs left
    const daysLeft = Math.round(t / oneDay);
    const hoursLeft = Math.floor((t % oneDay) / oneHour);
    const minsLeft = Math.floor((t % oneHour) / oneMin);
    const secsLeft = Math.floor((t % oneMin) / oneSec);
    const arr = [daysLeft, hoursLeft, minsLeft, secsLeft]
    // creating the o added fucntionality
    function numbersLessThanTen(num){
        if(num < 10){
            return `0${num}`
        }
        else{
            return num;
        }
    }
    items.forEach(function(item, index){
        item.innerHTML = numbersLessThanTen(arr[index]);
    })    
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4>Give Away Has Expired</h4>`        
    }

}
const countdown = setInterval(() => {
    functionality();
}, 1000);
functionality();

