// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let footer = document.querySelector('footer');

window.onscroll = () => {
    let top = window.scrollY;

    // Section highlight and animation
    sections.forEach(sec => {
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    document.querySelector('header').classList.toggle('sticky', top > 100);

    // Collapse navbar on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Footer animation — improved version
    let footerRect = footer.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    if (footerRect.top <= windowHeight && footerRect.bottom >= 0) {
        footer.classList.add('show-animate');
    } else {
        footer.classList.remove('show-animate');
    }
};
