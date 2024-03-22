document.getElementById('roomForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var roomId = document.getElementById('roomId').value;
    var capacity = document.getElementById('capacity').value;
    console.log("Room ID: " + roomId);
    console.log("Capacity: " + capacity);
    // Placeholder for room management functionality (e.g., sending data to the server)
});


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var duration = document.getElementById('duration').value;
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Duration: " + duration);
    // Placeholder for checking availability and displaying results
    var availability = document.getElementById('availability');
    availability.textContent = "Room available for booking!";
});
