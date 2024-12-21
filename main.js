document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let textofEventName = eventName.value;
    let textofEventDate = eventDate.value;
    let textofEventTime = eventTime.value;
    let textofEventLocation = eventLocation.value;

    // Create a new list item
    let listItem = document.createElement('li');

    // Add the event details with line breaks
    listItem.innerHTML = `
        <div><strong>Event Name:</strong><span> ${textofEventName}</span></div>
        <div><strong>Date:</strong><span> ${textofEventDate}</span></div>
        <div><strong>Time:</strong><span> ${textofEventTime}</span></div>
        <div><strong>Location:</strong><span> ${textofEventLocation}</span></div>
    `;

    // Create a container for icons
    let iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');

    // Create the edit button
    let editIcon = document.createElement('i');
    editIcon.classList.add('fas', 'fa-edit', 'edit-icon');
    editIcon.addEventListener('click', function() {
        eventName.value = textofEventName;
        eventDate.value = textofEventDate;
        eventTime.value = textofEventTime;
        eventLocation.value = textofEventLocation;
        listItem.remove();
    });

    // Create the delete button
    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');
    deleteIcon.addEventListener('click', function() {
        if (confirm("Are you sure you want to delete this event?")) {
            listItem.remove();
        }
    });

    // Append icons to the container
    iconContainer.appendChild(editIcon);
    iconContainer.appendChild(deleteIcon);

    // Append the icon container to the list item
    listItem.appendChild(iconContainer);

    // Append the list item to the events list
    document.getElementById('events').appendChild(listItem);

    // Reset the form
    document.getElementById('eventForm').reset();
});
