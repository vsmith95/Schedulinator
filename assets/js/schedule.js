const times = 
    [
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
    ];
    console.log(times)


    const mainContainer = $('#mainContainer');
    const timeSlotContainerID = $('#timeSlotContainer');
    const timeSlotContainer = '<div id="timeSlotContainer" class="row"></div>';
    const timeSlot = '<div id="timeSlot" class="col text-right border border-dark border-3"><p id="scheduledTime"></p></div>';
    const eventBox = '<div id="eventBox" class="col-8 p-1 bg-secondary border border-dark border-3"><textarea id="eventText" class="w-100 h-100"></textarea></div>';
    const saveBtn = '<div id="save-btn" class="col bg-info text-center border border-dark border-3"><p>SAVE</p></div>';
    
    
    mainContainer.append(timeSlot);
    mainContainer.append(eventBox);
    mainContainer.append(saveBtn);