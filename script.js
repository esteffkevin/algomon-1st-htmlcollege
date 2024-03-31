let links = document.querySelectorAll('.menu ul li a');

links.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.style.color = "orange"; // Change the colour to whatever you prefer
    });

    link.addEventListener('mouseout', function() {
        this.style.color = ''; // Revert to the default colour
    });
});

let images = document.querySelectorAll('.cuties img');

    images.forEach(image => {
        // Add mouseover event listener
        image.addEventListener('mouseover', function() {
            
            // Increase size when mouse is over
            image.style.transform = 'scale(1.1)'; // You can adjust the scale factor as needed
            image.style.transition = 'transform 0.5s ease'; // Add smooth transition
        });

        // Add mouseout event listener
        image.addEventListener('mouseout', function() {
            
            // Return to original size when mouse moves away
            image.style.transform = 'scale(1)';
        });
    });

let downloadLink = document.getElementById('downloadLink');

    downloadLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action of link
        alert('Downloading game... 19%'); // Show alert message
    });
