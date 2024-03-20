function showImages(category) {
    const imagesContainer = document.getElementById('images-container');
    imagesContainer.innerHTML = ''; // Clear previous images

    // Define image URLs and corresponding text based on category
    let imageData = [];
    switch (category) {
        case 'popular':
            imageData = [
                { src: 'images/athens.jpg', text: 'Athens, Greece' },
                { src: 'images/paris.jpg', text: 'Paris, France' },
                { src: 'images/dubai.jpg', text: 'Dubai, Emirates' },
                { src: 'images/atlanta.jpg', text: 'Atlanta, Georgia' },
                { src: 'images/thailand.jpg', text: 'Bangkok, Thailand' }
            ];
            break;
        case 'united-states':
            imageData = [
                { src: 'images/newyork.jpg', text: 'New York, New York' },
                { src: 'images/washington.jpg', text: 'Washington, D.C.' },
                { src: 'images/la.jpg', text: 'Los Angeles, California' },
                { src: 'images/houston.jpg', text: 'Houston, Texas' },
                { src: 'images/atlanta.jpg', text: 'Atlanta, Georgia' }
            ];
            break;
        case 'europe':
            imageData = [
                { src: 'images/rome.jpg', text: 'Rome, Italy' },
                { src: 'images/paris.jpg', text: 'Paris, France' },
                { src: 'images/london.jpg', text: 'London, United Kingdom' },
                { src: 'images/barcelona.jpg', text: 'Barcelona, Spain' },
                { src: 'images/netherlands.jpg', text: 'Netherlands, Amsterdamn' }
            ];
            break;
        case 'asia':
            imageData = [
                { src: 'images/tokyo.jpg', text: 'Tokyo, Japan' },
                { src: 'images/thailand.jpg', text: 'Bangkok, Thailand' },
                { src: 'images/dubai.jpg', text: 'Dubai, Emirates' },
                { src: 'images/seoul.jpg', text: 'Sol, South Korea' },
                { src: 'images/beijing.jpg', text: 'Beijing, China' }
            ];
            break;
        case 'africa':
            imageData = [
                { src: 'images/harare.jpg', text: 'Harare, Zimbabwe' },
                { src: 'images/nairobi.jpg', text: 'Nairobi, Kenya' },
                { src: 'images/capetown.jpg', text: 'Capetown, South Africa' },
                { src: 'images/lagos.jpg', text: 'Lagos, Nigeria' },
                { src: 'images/agadir.jpg', text: 'Agadir, Morocco' }
            ];
            break;
        case 'south-america':
            imageData = [
                { src: 'images/rio.jpg', text: 'Rio, Brazil' },
                { src: 'images/cusco.jpg', text: 'Cusco, Peru' },
                { src: 'images/santiago.jpg', text: 'Santiago, Chile' },
                { src: 'images/cancun.jpg', text: 'Cancun, Mexico' },
                { src: 'images/sao.jpg', text: 'Sao Paulo, Brazil' }
            ];
            break;

        case 'australia':
            imageData = [
                { src: 'images/perth.jpg', text: 'Perth, Australia' },
                { src: 'images/melbourne.jpg', text: 'Melbourne, Victoria' },
                { src: 'images/sydney.jpg', text: 'Sydney, Australia' },
                { src: 'images/cairns.jpg', text: 'Cairns, Queensland' },
                { src: 'images/adelaide.jpg', text: 'Adelaide, Australia' }
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
        overlay.textContent = data.text;

        container.appendChild(img);
        container.appendChild(overlay);
        imagesContainer.appendChild(container);
    });

    // Trigger animation after a short delay for smoother effect
    setTimeout(() => {
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.style.animationPlayState = 'running';
        });
    }, 100);
}