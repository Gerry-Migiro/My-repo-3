// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });

            // Animation class on active section
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
    
     // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // Footer animation
    let footer = document.querySelector('footer');
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;
    const threshold = 50;

    if (scrollPosition >= documentHeight - threshold) {
        footer.classList.add('show-animate');
    } else {
        footer.classList.remove('show-animate');
    }
};
