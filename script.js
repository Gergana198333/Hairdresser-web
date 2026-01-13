// ===================================
// NAVIGATION AND HAMBURGER MENU
// ===================================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        }
    });
});

// ===================================
// GALLERY FILTER
// ===================================

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block';
                setTimeout(() => item.classList.add('fade-in-visible'), 10);
            } else if (item.getAttribute('data-filter') === filter) {
                item.style.display = 'block';
                setTimeout(() => item.classList.add('fade-in-visible'), 10);
            } else {
                item.style.display = 'none';
                item.classList.remove('fade-in-visible');
            }
        });
    });
});

// ===================================
// MODAL - PRIVACY & GDPR
// ===================================

const privacyLink = document.querySelector('a[href="#privacy"]');
const privacyModal = document.getElementById('privacy');
const closeBtn = document.querySelector('.close');

if (privacyLink && privacyModal) {
    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.style.display = 'block';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        privacyModal.style.display = 'none';
    });
}

// Close modal when clicking outside of it
if (privacyModal) {
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            privacyModal.style.display = 'none';
        }
    });
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's a modal link
        if (href === '#privacy' || href === '#terms' || href === '#gdpr') {
            return;
        }

        const targetElement = document.querySelector(href);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// NAVBAR STICKY EFFECT
// ===================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

const revealElements = document.querySelectorAll(
    '.service-card, .booking-card, .review-card, .gallery-item, .info-card, .faq-item'
);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    observer.observe(element);
});

// ===================================
// FORM VALIDATION (if forms are added)
// ===================================

const handleFormSubmit = (formId) => {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });

            if (isValid) {
                alert('Thank you! Your message has been sent. We will contact you soon.');
                form.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
};

// ===================================
// ACTIVE NAV LINK HIGHLIGHTING
// ===================================

const navLinks2 = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks2.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = '';
        }
    });
});

// ===================================
// BOOKING BUTTON ACTIONS
// ===================================

const bookingButtons = document.querySelectorAll('a[href="#booking"]');

bookingButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Booking button clicked');
        // Can be integrated with actual booking system
    });
});

// ===================================
// WHATSAPP BUTTON
// ===================================

const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

whatsappButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Pre-filled message suggestion
        const message = encodeURIComponent('Hi! I would like to book an appointment at Luxe Salon.');
        console.log('WhatsApp message:', message);
    });
});

// ===================================
// LAZY LOADING FOR IMAGES (Optional)
// ===================================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Load actual image
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// COUNTER ANIMATION (for stats if added)
// ===================================

const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current);
        }
    }, 16);
};

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Luxe Salon website loaded successfully');

    // Initialize any dynamic content here
    // For example: Load testimonials from API, etc.
});

// ===================================
// MOBILE RESPONSIVE ADJUSTMENTS
// ===================================

const handleMobileMenu = () => {
    if (window.innerWidth <= 768) {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        }
    } else {
        navLinks.style.display = 'flex';
    }
};

window.addEventListener('resize', handleMobileMenu);

// Initialize on page load
handleMobileMenu();

// ===================================
// PRINT STYLES
// ===================================

window.addEventListener('beforeprint', () => {
    // Hide navigation and footer for printing
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
});

window.addEventListener('afterprint', () => {
    // Restore navigation and footer
    document.querySelector('.navbar').style.display = 'block';
    document.querySelector('.footer').style.display = 'block';
});
