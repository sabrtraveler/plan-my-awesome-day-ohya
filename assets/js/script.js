// todays date under hero/banner
{
  var today = moment().format("dddd, MMMM Do YYYY: h:mm:ss a");
  $("#currentDate").append(today);
}

// work day hours for the scheduler
var workTime = moment().startOf("hour").add(12, "hour");
var hour = moment().format("H");

// for loop to create the total work time slots
for (var i = 9; i < 19; i++) {
  var timePeriod = workTime.add(1, "hour").format("h:mm A");
  var timeState;

  // the time period is color graded to represent if it's in the past/present/future
  if (hour == i) {
    timeState = "present";
  } else if (hour > i) {
    timeState = "past";
  } else if (hour < i) {
    timeState = "future";
  }

  // design the work day scheduler using bootstrap
  var workScheduler = `<container class="row" id='hour-${i}'>
            <div class="col-2"></div>
            <div class="hour w-25 p-4 col-1">${timePeriod}</div>
            <textarea class="description w-50 p-4 col-6 ${timeState} hour-${i}"></textarea>
            <button class="saveBtn w-25 p-4 col-1 fas fa-save fa-2x"></button>
            <div class="col-2">
            </div>  
        </container>
        <br>`;
  $("#schedulerContainer").append(workScheduler);
}

// save button function to store data in local storage
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});

for (var i = 9; i < 19; i++) {
  $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
}
