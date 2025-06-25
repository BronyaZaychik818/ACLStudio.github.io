// Navigation scroll effect
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

// Scroll effect for navigation
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile navigation toggle
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Burger animation
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking on a link and improve scroll positioning
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        
        // Get the target section id from the href
        const targetId = link.getAttribute('href');
        
        // Only process if it's an anchor link
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('nav').offsetHeight;
                
                // Get the target section's position
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
                
                // Scroll to the target with offset for the fixed header
                window.scrollTo({
                    top: targetPosition - headerHeight - 20, // Additional 20px buffer
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just log it and show a success message
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => group.style.display = 'none');
        
        const submitButton = document.querySelector('.submit-button');
        submitButton.style.display = 'none';
        
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.innerHTML = `
            <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--success-color); margin-bottom: 1rem;"></i>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting ACL Studio. We'll get back to you shortly.</p>
        `;
        successMessage.style.textAlign = 'center';
        successMessage.style.padding = '2rem';
        
        contactForm.appendChild(successMessage);
        
        // Reset form after 5 seconds
        setTimeout(() => {
            contactForm.reset();
            successMessage.remove();
            formGroups.forEach(group => group.style.display = 'block');
            submitButton.style.display = 'block';
        }, 5000);
    });
}

// Animation for elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.info-card, .job-card, .product-card, .division-card, .step');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.info-card, .job-card, .product-card, .division-card, .step');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation for elements in initial view
    animateOnScroll();
});

// Trigger animations on scroll
window.addEventListener('scroll', animateOnScroll);

// Apply the same smooth scrolling to footer links
document.querySelectorAll('.footer-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the target section id from the href
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Calculate header height for offset
            const headerHeight = document.querySelector('nav').offsetHeight;
            
            // Get the target section's position
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
            
            // Scroll to the target with offset for the fixed header
            window.scrollTo({
                top: targetPosition - headerHeight - 20, // Additional 20px buffer
                behavior: 'smooth'
            });
        }
    });
});