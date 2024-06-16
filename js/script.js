document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all links
            links.forEach(l => l.classList.remove('active'));

            // Add active class to the clicked link
            link.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));

            // Show the targeted section
            const target = link.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});

const titles = [" Software Engineer ", " Web Developer "]; 
let titleIndex = 0;
const titleElement = document.getElementById("title");
let currentText = "";
let isDeleting = false;
let charIndex = 0;

function typeWriter() {
    if (isDeleting) {
        currentText = titles[titleIndex].substring(0, charIndex - 1);
        titleElement.innerHTML = currentText;
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
    } else {
        currentText = titles[titleIndex].substring(0, charIndex + 1);
        titleElement.innerHTML = currentText;
        charIndex++;
        if (currentText === titles[titleIndex]) {
            isDeleting = true;
        }
    }
    const typingSpeed = isDeleting ? 230 : 230; // Adjust typing and deleting speed here
    setTimeout(typeWriter, typingSpeed);
}

typeWriter();

// document.querySelector('.github-link').addEventListener('click', function(event) {
//     if (event.defaultPrevented) {
//         console.log("Default action prevented");
//     } else {
//         console.log("Redirecting to GitHub");
//     }
// });