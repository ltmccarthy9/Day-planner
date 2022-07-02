# Day-planner

## Description
This application is a day planner designed to allow you schedule your day as it progresses.
The date and time down to the second are displayed at the top of the page. Next, the application has
a box with the coresponding hour for every hour in the day.  The current hour block is colored red, while
the hours that have already passed are grey and those that are still yet to come 
are colored green.  Each of these boxes has a text area and a coresponding save button that allows the user to 
write what they want to do in those hours and save it so that it continues to display upon refresh.

## Technologies Used
* HTML
* CSS
* Javascript
* gitbash
* github
* bootstrap
* Visual Studio Code

## Deployed Link


## Code 

This function selects each hour block and grabs it's id that corresponds to the hour and
determines where it is relationally to the current hour, and coloring it given it's status.
```
    var currentHour = moment().hour();
    console.log(currentHour);
    changeColor();
    setInterval(changeColor, 60000);
    function changeColor() {
        $(".time-block").each(function(){
            var hour = parseInt($(this).attr("id"));
            console.log(hour);
            if (currentHour > hour) {
                $(this).removeClass("present");
                $(this).removeClass("future");
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
```

## Demonstration
