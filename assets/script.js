// today's date inside header, initialize local storage at load

function init() {
    const today = moment();
    $("#currentDay").text(today.format("MMM Do YY"));

    colorTimeBlocks();
    setInterval(colorTimeBlocks, 60000);
    $(".time-block").each(function() {
        var blockId = $(this).attr("id");
        // load saved data from local storage
        $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
    });
    
    $(".saveBtn").on("click", handleSave);
};
// variables

//const mondayEl = $('<div>');
//const tuesdayEl = $('<div>');
//const wednesdayEl = $('<div>');
//const thursdayEl = $('<div>');
//const fridayEl = $('<div>');
//const saturdayEl = $('<div>');
//const sundayEl = $('<div>');

const plannerContainer = $(".container");

const timeSlot = [
    '9AM',
    '10AM',
    '11AM',
    '12AM',
    '1PM',
    '2PM',
    '3PM',
    '4PM',
    '5PM',
];


// creating a for-loop to create a <div> element for each day

for (var i = 0; i < timeSlot.length; i++) {
    const timeSlotEl = $('<div>');
    const taskEl = $('<textarea>');
    const completedEl = $('<button>');

    timeSlotEl.text(timeSlot[i]);
    timeSlotEl.addClass('time-block')
    taskEl.text('');
    completedEl.addClass('saveBtn');
    
    taskEl.addClass('col-md-10');
    completedEl.addClass('col-md-1');
    timeSlotEl.addClass('row', 'hour');
    timeSlotEl.append(taskEl);
    timeSlotEl.append(completedEl);
    plannerContainer.append(timeSlotEl);
}

function colorTimeBlocks() {
    $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(moment().format("H"));
    
    $(this).removeClass("past present future");
    
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour > currentHour) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
    });
}

// function for saving

function handleSave(event) {
    var hourId = $(this).parent().attr("id");
    localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
}





