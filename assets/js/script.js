// todays date under hero/banner 
{
    var today = moment().format("llll");
    $("#currentDay").append(today);

}

//view the timeblocks for that day
var momentTime = moment().startOf("today").add(7, "hour");
var hour = moment().format("H");

for (var i = 8; i < 20; i++) {
    var timeSlot = momentTime.add(1, "hour").format("HH:mm A");
    var currentState;

    // timeblock is color coded to indicate whether it is in the past, present, or future
    if (hour == i) {
        currentState = 'present';
    } else if (hour > i) {
        currentState = 'future';
    } else if (hour < i) {
        currentState = 'past';
    }

    var newStuff =
        `<container class="row" id='hour-${i}'>
            <div class="col-2"></div>
            <div class="hour w-25 p-4 col-1">${timeSlot}</div>
            <textarea class="description w-50 p-4 col-6 ${currentState} hour-${i}"></textarea>
            <button class="saveBtn w-25 p-4 col-1 fas fa-save fa-2x"></button>
            <div class="col-2">
            </div>  
        </container>
        <p></p>`
        ;

    $("#containAll").append(newStuff);




};

$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});


for (var i = 8; i < 20; i++) {
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
}