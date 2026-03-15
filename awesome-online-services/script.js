// Service Details Data
const serviceDetails = {
    'money-transfer': {
        title: 'Money Transfer Services',
        icon: '💸',
        description: 'Fast, secure, and reliable money transfer services to anywhere you need.',
        features: [
            'Instant transfers to bank accounts',
            'International money transfer',
            'Low transaction fees',
            'Secure and encrypted transactions',
            'Real-time tracking',
            '24/7 customer support'
        ],
        pricing: 'Starting at $2.99 per transfer'
    },
    'xerox': {
        title: 'Xerox & Photocopying',
        icon: '📋',
        description: 'High-quality photocopying services with quick turnaround times.',
        features: [
            'Black & white copying',
            'Color photocopying',
            'Double-sided printing',
            'Multiple page sizes',
            'Bulk discounts available',
            'Same-day service'
        ],
        pricing: 'Starting at $0.10 per page'
    },
    'internet-prints': {
        title: 'Prints from Internet',
        icon: '🌐',
        description: 'Print your documents directly from the internet with ease.',
        features: [
            'Print from email attachments',
            'Cloud storage integration',
            'Upload and print',
            'Various file formats supported',
            'Secure file handling',
            'Quick turnaround'
        ],
        pricing: 'Starting at $0.25 per page'
    },
    'pvc-cards': {
        title: 'PVC Cards',
        icon: '💳',
        description: 'Professional PVC cards for ID, membership, and business purposes.',
        features: [
            'Custom design options',
            'High-quality printing',
            'Durable PVC material',
            'Magnetic stripe option',
            'Barcode/QR code integration',
            'Bulk order discounts'
        ],
        pricing: 'Starting at $1.99 per card'
    },
    'lamination': {
        title: 'Lamination Services',
        icon: '📄',
        description: 'Protect your documents with our premium lamination services.',
        features: [
            'Hot and cold lamination',
            'Multiple thickness options',
            'Various sizes available',
            'Glossy and matte finish',
            'UV protection',
            'Long-lasting protection'
        ],
        pricing: 'Starting at $1.50 per document'
    },
    'spiral-binding': {
        title: 'Spiral Binding',
        icon: '📚',
        description: 'Professional spiral binding for reports, presentations, and more.',
        features: [
            'Various coil colors',
            'Multiple sizes supported',
            'Clear front and back covers',
            'Durable binding',
            'Quick service',
            'Bulk discounts'
        ],
        pricing: 'Starting at $3.99 per document'
    },
    'soft-binding': {
        title: 'Soft Binding',
        icon: '📖',
        description: 'Elegant soft binding solutions for your documents and books.',
        features: [
            'Professional appearance',
            'Perfect for manuscripts',
            'Various cover options',
            'Durable binding',
            'Custom spine printing',
            'Fast turnaround'
        ],
        pricing: 'Starting at $4.99 per document'
    },
    'large-prints': {
        title: 'Large Format Prints (A4 - A0)',
        icon: '🖨️',
        description: 'From standard A4 to large A0 posters and banners.',
        features: [
            'A4, A3, A2, A1, A0 sizes',
            'High-resolution printing',
            'Color and B&W options',
            'Various paper types',
            'Poster printing',
            'Blueprint printing'
        ],
        pricing: 'A4: $2.99 | A3: $5.99 | A2: $9.99 | A1: $14.99 | A0: $24.99'
    }
};

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const modal = document.getElementById('service-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const learnMoreButtons = document.querySelectorAll('.learn-more');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Hamburger animation
    const bars = hamburger.querySelectorAll('.bar');
    bars[0].style.transform = navMenu.classList.contains('active')
        ? 'rotate(-45deg) translate(-5px, 6px)'
        : 'none';
    bars[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    bars[2].style.transform = navMenu.classList.contains('active')
        ? 'rotate(45deg) translate(-5px, -6px)'
        : 'none';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = hamburger.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Service Card Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
});

// Observe pricing cards
document.querySelectorAll('.pricing-card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
});

// Learn More Button - Open Modal
learnMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const serviceType = button.getAttribute('data-modal');
        openServiceModal(serviceType);
    });
});

// Service Card Click - Open Modal
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.classList.contains('learn-more')) return;
        const serviceType = card.getAttribute('data-service');
        openServiceModal(serviceType);
    });
});

// Open Service Modal
function openServiceModal(serviceType) {
    const service = serviceDetails[serviceType];

    if (!service) return;

    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${service.icon}</div>
            <h2 style="color: var(--text-dark); margin-bottom: 0.5rem;">${service.title}</h2>
            <p style="color: var(--text-light); font-size: 1.125rem;">${service.description}</p>
        </div>

        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--text-dark); margin-bottom: 1rem;">Features:</h3>
            <ul style="list-style: none; padding: 0;">
                ${service.features.map(feature => `
                    <li style="padding: 0.75rem; margin-bottom: 0.5rem; background: var(--light-bg); border-radius: 10px; color: var(--text-dark);">
                        <span style="color: var(--primary-color); margin-right: 0.5rem;">✓</span>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
        </div>

        <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%); padding: 1.5rem; border-radius: 15px; text-align: center;">
            <h3 style="color: white; margin-bottom: 0.5rem;">Pricing</h3>
            <p style="color: white; font-size: 1.25rem; font-weight: 600;">${service.pricing}</p>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
            <a href="#contact" class="btn btn-primary" style="display: inline-block;" onclick="closeServiceModal()">
                Get Started
            </a>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Service Modal
function closeServiceModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeModal.addEventListener('click', closeServiceModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeServiceModal();
    }
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    console.log('Form submitted:', { name, email, service, message });

    // Show success toast
    showToast('Message sent successfully! We\'ll get back to you soon.');

    // Reset form
    contactForm.reset();
});

// Show Toast Notification
function showToast(message) {
    const toastMessage = document.querySelector('.toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for non-section links
        if (href === '#' || href.length <= 1) return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Pricing Button Click
document.querySelectorAll('.btn-pricing').forEach(button => {
    button.addEventListener('click', () => {
        const pricingCard = button.closest('.pricing-card');
        const planName = pricingCard.querySelector('.pricing-header h3').textContent;

        showToast(`You selected the ${planName} plan! Redirecting to contact form...`);

        setTimeout(() => {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');

    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 800);
    }
});

// Service card hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to hero title (optional enhancement)
function typeEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';

    let i = 0;
    const speed = 50;

    function type() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    // Uncomment to enable typing effect
    // type();
}

// Initialize animations on page load
window.addEventListener('load', () => {
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease';
    }

    // Preload modal content
    console.log('Awesome Online Services website loaded successfully!');
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    }, 250);
});

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Easter egg: Console message
console.log('%c🌟 Welcome to Awesome Online Services! 🌟', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cWe provide the best printing, binding, and money transfer services!', 'color: #8b5cf6; font-size: 14px;');
