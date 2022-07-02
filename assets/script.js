$(document).ready(function () {

    // Static


    // The first basic method of Moment.js is the moment() method. Use this to get today's info!
    console.log(moment());

    console.log(moment().format());

    // Using moment format, there are different ways that we can display todays date!
    $("#date").text(moment());
    $("#date-formatted").text(moment().format());
    $("#date-my").text(moment().format("dddd, MMMM Do YYYY"));

    $("#day-week").text(moment().format('do'));
    $("#day-month").text(moment().format('Do'));
    $("#day-year").text(moment().format('DDDo'))

    // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss')
        $("#time").text(currentTime)
    }

    // Here we will get the number of hours in the year
    let updateHour = function () {
        let date = moment().dayOfYear()
        let yearHours = date * 24
        let todayHours = moment().hour();
        let sumHours = yearHours + todayHours
        $("#hours").text(sumHours)
    }

    // Here we will get the number of minutes in the week
    let updateMinutes = function () {
        let date = moment().weekday();
        let weekMinutes = (date * 24 * 60) + (moment().minute());
        $("#minutes").text(weekMinutes);
    }

    // Here we will get the number of seconds in the day
    let updateSeconds = function () {
        let todayHours = moment().hour();
        let todaySeconds = todayHours * 60 * 60;
        let thisSecond = moment().second();
        let sumSeconds = thisSecond + todaySeconds;
        $("#seconds").text(sumSeconds);
    }

    let countdown = function () {

        // Friday
        let friday = moment().day("fr")._d

        // convert this into day of the year
        let fridayDate = moment(friday).dayOfYear();

        // This will get the milliseconds of Friday
        let fridayMils = fridayDate * 24 * 60 * 60 * 1000
        // Turn into seconds

        // Today
        // Turn into milliseconds

        let date = moment().dayOfYear()
        let yearMils = date * 24 * 60 * 60 * 1000
        let todayMils = moment().hour() * 60 * 60 * 1000;
        let thisMilsSecond = moment().second() * 1000;
        let thisMils = moment().millisecond();

        // This value should be increasing over time
        let sumMils = yearMils + todayMils + thisMilsSecond + thisMils;

        let ms = fridayMils - sumMils;
        $("#countdown").text(ms)
    }

    // To initally set the times, we will call the functions
    updateTime();
    updateHour();
    updateMinutes();
    updateSeconds();
    countdown();

    // To continuously call the functions, we will use setInterval
    setInterval(updateTime, 1000);
    setInterval(updateHour, 1000);
    setInterval(updateMinutes, 1000);
    setInterval(updateSeconds, 1000);
    setInterval(countdown, 1);

    var currentHour = moment().hour();
    console.log(currentHour);
    changeColor();
    function changeColor() {
        $(".time-block").each(function(){
            var hour = parseInt($(this).attr("id"));
            console.log(hour);
            if (currentHour > hour) {
                $(this).addClass("past");
            }else if (currentHour === hour){
                $(this).removeClass("past");
                $(this).addClass("present");
            }else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

})


//use momentjs to guide conditional coloring of timeblocks
//OPTIONS:
    //set all timeblocks to "future(green)" as default
    // example conditional: if (moment()isBetween(12:00 and 1:00 am)) 
 //                                 $hour1 class = present
 //                         else if (moment()is after 1:00 am) 
//                                  $hour1 class = past
//                          else  class = future
 //
 //
 // FOR DISPLAYINNG TEXT       
 //  assign text to variable for each hour.  ie: var hour1Text = ...localstorage
 //  Save this upon click of save button. display it outside of this event 
 //
 //                    ["11:00"]
//                    if (moment()isBetween(12:00 and 1:00 am)) 
//                                 $hour1 class = present
//                    else if (moment()is after 1:00 am) 
//                                  $hour1 class = past
//                    else  class = future