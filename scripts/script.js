function checkVisibility() {
    const animatedElements = document.querySelectorAll('.banner, .services, h1, h3, h4, a');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100 && !element.classList.contains('visible')) {
            element.classList.add('appear');
            element.classList.add('visible'); 
        }
    });
}

window.addEventListener('scroll', checkVisibility);
document.addEventListener('DOMContentLoaded', checkVisibility);


