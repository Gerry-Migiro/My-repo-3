// Toggle icon navbar (mobile menu)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Animate sections on page load
window.onload = () => {
    let sections = document.querySelectorAll('section');
    sections.forEach((sec, i) => {
        setTimeout(() => {
            sec.classList.add('show-animate');
        }, i * 200); // delay for staggered animation
    });
};

// Footer animation only on scroll
window.onscroll = () => {
    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Close navbar when a link is clicked (mobile)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Footer animation trigger
    let footer = document.querySelector('footer');
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;
    const threshold = 50; // pixels of tolerance
    
    if (scrollPosition >= documentHeight - threshold) {
        footer.classList.add('show-animate');
    } else {
        footer.classList.remove('show-animate');
    }
};

