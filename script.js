$(document).ready(function() {
    //Declare Array of 10 numbers
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    /*Handler for Time div */
    $(".time").append("<ul class='numbers hoursFirst'></ul>,<ul class='numbers hoursLast last'></ul>,<ul class='numbers minutesFirst first'></ul>,<ul class='numbers minutesLast last'></ul>,<ul class='numbers secondsFirst first'></ul>,<ul class='numbers secondsLast last'></ul>");

    /*append 6 ui elements*/

    /*now append li to lines ul*/
    // arr.forEach(function(currentItem, index) {
    //     $(".numbers").append("<li>" + currentItem + "</li>");
    // });

    //Ciclo for per le ore (decine)
    for (var i = 0; i < 3; i++) {
        $(".hoursFirst").append("<li>" + arr[i] + "</li>");
    }
    //Ciclo per i minuti e i secondi (decine)
    for (var i = 0; i < 6; i++) {
        $(".first").append("<li>" + arr[i] + "</li>");
    }
    //Ciclo for per le ore, i minuti e i secondi (unita)
    for (var i = 0; i < arr.length; i++) {
        $(".last").append("<li>" + arr[i] + "</li>");
    }

    /*individual Digit first last*/
    var getFirstDigit = function(number) {
        return parseInt(number / 10);
    }

    var getLastDigit = function(number) {
        return number % 10;
    }

    var move = function() {
        var myDate = new Date();
        var seconds = myDate.getSeconds();
        var minutes = myDate.getMinutes();
        var hours = myDate.getHours();

        //console.log(hours + ":" + minutes + ":" + seconds);

        var animateFirstDigit = function(className, property, correction) {
            $(className).animate({}, function() {
                $(this).css("bottom", getFirstDigit(property) * 50 + correction);
            });
        }

        var animateSecondDigit = function(className, property) {
            $(className).animate({}, function() {
                $(this).css("bottom", getLastDigit(property) * 50);
            });
        }

        animateFirstDigit(".hoursFirst", hours, 350);
        animateSecondDigit(".hoursLast", hours);

        animateFirstDigit(".minutesFirst", minutes, 200);
        animateSecondDigit(".minutesLast", minutes);

        animateFirstDigit(".secondsFirst", seconds, 200);
        animateSecondDigit(".secondsLast", seconds);
    }

    setInterval(move, 1000);
});