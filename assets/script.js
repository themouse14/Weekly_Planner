// today's date inside header

const today = moment();
$("#currentDay").text(today.format("MMM Do YY"));

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
    const task = $('<input>');
    const completedEl = $('<button>');

    timeSlotEl.text(timeSlot[i]);
    task.text('');
    
    timeSlotEl.append(task);
    timeSlotEl.append(completedEl);
    plannerContainer.append(timeSlotEl);
}

// setting attributes to timeSlot slots






