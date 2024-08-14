// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission (Example Only)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for getting in touch! We will get back to you soon.');
    this.reset();
});

// Animation on Scroll
const scrollElements = document.querySelectorAll('.project-card, .course, form button');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Dark Mode Toggle (Optional)
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
// Handle Enroll Now Button Click
document.querySelectorAll('.enroll-button').forEach(button => {
    button.addEventListener('click', function () {
        alert('Thank you for enrolling! We will contact you with further details.');
    });
});
// Handle Service Button Click
document.querySelectorAll('.service-button').forEach(button => {
    button.addEventListener('click', function () {
        alert('Thank you for your interest! We will provide more information soon.');
    });
});

// Animate Experience Cards on Scroll
const experienceCards = document.querySelectorAll('.experience-card');

const showExperienceCards = () => {
    const triggerBottom = window.innerHeight * 0.85;

    experienceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', showExperienceCards);
showExperienceCards(); // Trigger animation on page load
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('responseMessage').textContent = result;
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'An error occurred.';
        console.error('Error:', error);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle form submission
        });
    } else {
        console.error('Form not found');
    }
});

