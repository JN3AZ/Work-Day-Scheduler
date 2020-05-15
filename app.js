const date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date);

$(".time-block").each(function (){
    const currentHour = parseInt(moment().format("H"));
    const hour = parseInt($(this).attr("data-hour"));

    if(hour < currentHour) {
        //past time block
        $(this).find("textarea").addClass("past");
    } else if (hour > currentHour) {
        //future
        $(this).find("textarea").addClass("future");
    } else {
        //curent hour
        $(this).find("textarea").addClass("present");
    }
    // console.log(hour, currentHour);
});

$("#9a").val(localStorage.getItem("9a"));
$("#10a").val(localStorage.getItem("10a"));
$("#11a").val(localStorage.getItem("11a"));
$("#12p").val(localStorage.getItem("12p"));
$("#13p").val(localStorage.getItem("13p"));
$("#14p").val(localStorage.getItem("14p"));
$("#15p").val(localStorage.getItem("15p"));
$("#16p").val(localStorage.getItem("16p"));
$("#17p").val(localStorage.getItem("17p"));

$(".saveBtn").on('click', function (){
    let time = $(this).siblings('textarea').attr('id');
    let text = $(this).siblings('textarea').val();
    localStorage.setItem(time, text);
});