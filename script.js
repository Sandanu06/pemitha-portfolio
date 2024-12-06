// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission (Basic Client-Side Validation)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Simple Scroll Animations
window.addEventListener('scroll', function() {
     const sections = document.querySelectorAll('section');
     let scrollPosition = window.pageYOffset;

     sections.forEach(section => {
         const sectionTop = section.offsetTop - 100;
         const sectionHeight = section.offsetHeight;

         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
             const id = section.getAttribute('id');
             document.querySelectorAll('.navbar-menu a').forEach(link => {
                 link.classList.remove('active');
                 if (link.getAttribute('href') === `#${id}`) {
                     link.classList.add('active');
                 }
             });
         }
     });
});