document.addEventListener('DOMContentLoaded', function () {
    // Trigger the showImages function with 'popular' category when the page loads
    showImages('popular');

    // Highlight the 'Popular' button
    const popularButton = document.querySelector('.places button:nth-child(1)');
    popularButton.classList.add('selected');
});

function showImages(category) {
    const imagesContainer = document.getElementById('images-container');
    imagesContainer.innerHTML = ''; // Clear previous images

    // Define image URLs and corresponding text based on category
    let imageData = [];
    switch (category) {
        case 'popular':
            imageData = [
                { src: 'images/athens.jpg', city: 'Athens', country: 'Greece' },
                { src: 'images/paris.jpg', city: 'Paris', country: 'France' },
                { src: 'images/dubai.jpg', city: 'Dubai', country: 'Emirates' },
                { src: 'images/atlanta.jpg', city: 'Atlanta', country: ' Georgia' },
                { src: 'images/thailand.jpg', city: 'Bangkok', country: ' Thailand' }
            ];
            break;
        case 'united-states':
            imageData = [
                { src: 'images/newyork.jpg', city: 'New York', country: ' New York' },
                { src: 'images/washington.jpg', city: 'Washington', country: ' D.C.' },
                { src: 'images/la.jpg', city: 'Los Angeles', country: ' California' },
                { src: 'images/houston.jpg', city: 'Houston', country: ' Texas' },
                { src: 'images/atlanta.jpg', city: 'Atlanta', country: ' Georgia' }
            ];
            break;
        case 'europe':
            imageData = [
                { src: 'images/rome.jpg', city: 'Rome', country: ' Italy' },
                { src: 'images/paris.jpg', city: 'Paris', country: ' France' },
                { src: 'images/london.jpg', city: 'London', country: ' United Kingdom' },
                { src: 'images/barcelona.jpg', city: 'Barcelona', country: ' Spain' },
                { src: 'images/netherlands.jpg', city: 'Netherlands', country: ' Amsterdamn' }
            ];
            break;
        case 'asia':
            imageData = [
                { src: 'images/tokyo.jpg', city: 'Tokyo', country: ' Japan' },
                { src: 'images/thailand.jpg', city: 'Bangkok', country: ' Thailand' },
                { src: 'images/dubai.jpg', city: 'Dubai', country: ' Emirates' },
                { src: 'images/seoul.jpg', city: 'Sol', country: ' South Korea' },
                { src: 'images/beijing.jpg', city: 'Beijing', country: ' China' }
            ];
            break;
        case 'africa':
            imageData = [
                { src: 'images/harare.jpg', city: 'Harare', country: ' Zimbabwe' },
                { src: 'images/nairobi.jpg', city: 'Nairobi', country: ' Kenya' },
                { src: 'images/capetown.jpg', city: 'Capetown', country: ' South Africa' },
                { src: 'images/lagos.jpg', city: 'Lagos', country: ' Nigeria' },
                { src: 'images/agadir.jpg', city: 'Agadir', country: ' Morocco' }
            ];
            break;
        case 'south-america':
            imageData = [
                { src: 'images/rio.jpg', city: 'Rio', country: ' Brazil' },
                { src: 'images/cusco.jpg', city: 'Cusco', country: ' Peru' },
                { src: 'images/santiago.jpg', city: 'Santiago', country: ' Chile' },
                { src: 'images/cancun.jpg', city: 'Cancun', country: ' Mexico' },
                { src: 'images/sao.jpg', city: 'Sao Paulo', country: ' Brazil' }
            ];
            break;

        case 'australia':
            imageData = [
                { src: 'images/perth.jpg', city: 'Perth', country: ' Australia' },
                { src: 'images/melbourne.jpg', city: 'Melbourne', country: ' Victoria' },
                { src: 'images/sydney.jpg', city: 'Sydney', country: ' Australia' },
                { src: 'images/cairns.jpg', city: 'Cairns', country: ' Queensland' },
                { src: 'images/adelaide.jpg', city: 'Adelaide', country: ' Australia' }
            ];
            break;
        default:
            break;
    }

    imageData.forEach(data => {
        const container = document.createElement('div');
        container.classList.add('container');

        const img = document.createElement('img');
        img.src = data.src;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        // Construct the overlay text with city and country
        overlay.innerHTML = `<div class="city">${data.city}</div><div class="country">${data.country}</div>`;

        container.appendChild(img);
        container.appendChild(overlay);
        imagesContainer.appendChild(container);
    });

    // Remove the 'selected' class from all buttons
    const buttons = document.querySelectorAll('.places button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked button
    const selectedButton = document.querySelector(`.places button[data-category="${category}"]`);
    selectedButton.classList.add('selected');

    // Trigger animation after a short delay for smoother effect
    setTimeout(() => {
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.style.animationPlayState = 'running';
        });
    }, 100);
}
