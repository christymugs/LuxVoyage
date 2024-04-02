document.getElementById('flightButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form values
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const passengers = document.getElementById('passengers').value;

    // Redirect to flight.html with URL parameters
    window.location.href = `flight.html?from=${from}&to=${to}&departureDate=${departureDate}&returnDate=${returnDate}&passengers=${passengers}`;
});

document.getElementById('hotelButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form values
    const location = document.getElementById('location').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const guests = document.getElementById('guests').value;

    // Redirect to flight.html with URL parameters
    window.location.href = `hotel.html?location=${location}&departureDate=${departureDate}&returnDate=${returnDate}&guests=${guests}`;
});

document.getElementById('carButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form values
    const location = document.getElementById('location').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const passengers = document.getElementById('passengers').value;

    // Redirect to flight.html with URL parameters
    window.location.href = `flight.html?from=${from}&to=${to}&departureDate=${departureDate}&returnDate=${returnDate}&passengers=${passengers}`;
});