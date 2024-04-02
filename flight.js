const urlParams = new URLSearchParams(window.location.search);
const from = urlParams.get('from');
const to = urlParams.get('to');
const departureDate = urlParams.get('departureDate');
const returnDate = urlParams.get('returnDate');
const passengers = urlParams.get('passengers');

// Display user information
document.getElementById('from').textContent = from;
document.getElementById('to').textContent = to;
document.getElementById('departure-date').textContent = departureDate;
document.getElementById('return-date').textContent = returnDate;
document.getElementById('passengers').textContent = passengers;

// Function to update span elements with input values
function updateInfo() {
    const leavingInput = document.getElementById('leaving-input').value;
    const arrivingInput = document.getElementById('arriving-input').value;
    const dateInput = document.getElementById('date-input').value;

    document.getElementById('leaving').textContent = leavingInput;
    document.getElementById('arriving').textContent = arrivingInput;
    document.getElementById('date').textContent = dateInput;
}

// Event listeners for input elements
document.getElementById('leaving-input').addEventListener('input', updateInfo);
document.getElementById('arriving-input').addEventListener('input', updateInfo);
document.getElementById('date-input').addEventListener('input', updateInfo);