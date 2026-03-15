// Service Details Data
const serviceDetails = {
    'money-transfer': {
        title: 'Money Transfer Services',
        icon: 'fas fa-money-bill-transfer',
        description: 'Fast, secure, and reliable money transfer services to help you send money anywhere.',
        features: [
            'Quick processing times',
            'Competitive exchange rates',
            'Secure transactions',
            'Multiple payment options',
            'Track your transfers',
            '24/7 customer support'
        ],
        pricing: 'Transfer fees: 2-3% per transaction'
    },
    'xerox': {
        title: 'Xerox Services',
        icon: 'fas fa-copy',
        description: 'High-quality photocopying services for all your document needs.',
        features: [
            'Black & White copying',
            'Color copying available',
            'Bulk order discounts',
            'Double-sided printing',
            'Various paper sizes',
            'Fast turnaround time'
        ],
        pricing: 'Starting at $0.08 per page'
    },
    'internet-prints': {
        title: 'Internet Prints',
        icon: 'fas fa-globe',
        description: 'Print documents directly from the internet, cloud storage, or email.',
        features: [
            'Print from Google Drive',
            'Print from Dropbox',
            'Email to print',
            'URL to print',
            'Social media prints',
            'Instant processing'
        ],
        pricing: 'Standard printing rates apply'
    },
    'pvc-cards': {
        title: 'PVC Card Services',
        icon: 'fas fa-id-card',
        description: 'Professional PVC cards for identification, membership, and business needs.',
        features: [
            'ID cards',
            'Membership cards',
            'Loyalty cards',
            'Business cards',
            'Custom designs',
            'Durable material'
        ],
        pricing: '$5.00 per card (discounts on bulk orders)'
    },
    'lamination': {
        title: 'Lamination Services',
        icon: 'fas fa-file-shield',
        description: 'Protect your important documents with professional lamination.',
        features: [
            'Various sizes available',
            'Glossy or matte finish',
            'Hot lamination',
            'Cold lamination',
            'Menu lamination',
            'Certificate protection'
        ],
        pricing: 'A4: $1.00 | A3: $2.00'
    },
    'spiral-binding': {
        title: 'Spiral Binding',
        icon: 'fas fa-book',
        description: 'Durable spiral binding for reports, manuals, and thick documents.',
        features: [
            'Various coil colors',
            'Multiple sizes',
            'Transparent covers',
            'Professional finish',
            'Quick turnaround',
            'Bulk discounts'
        ],
        pricing: '$2.50 per document'
    },
    'soft-binding': {
        title: 'Soft Binding',
        icon: 'fas fa-book-open',
        description: 'Professional soft binding perfect for presentations and reports.',
        features: [
            'Thermal binding',
            'Perfect binding',
            'Multiple cover options',
            'Professional appearance',
            'Quick service',
            'Custom options'
        ],
        pricing: '$3.50 per document'
    },
    'large-prints': {
        title: 'Large Format Prints',
        icon: 'fas fa-print',
        description: 'From A4 to A0 size prints for posters, banners, and technical drawings.',
        features: [
            'A4 to A0 sizes',
            'Color or B&W',
            'High resolution',
            'Various paper types',
            'Architectural drawings',
            'Poster printing'
        ],
        pricing: 'A4: $0.10 | A3: $0.20 | A2: $3.50 | A1: $7.00 | A0: $12.00'
    }
};

// DOM Elements
let mobileMenuToggle, navLinks, contactForm, modal, modalBody, modalClose;
let serviceCards, learnMoreButtons;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    setupEventListeners();
    initializeAnimations();
    setupScrollAnimations();
});

// Initialize DOM elements
function initializeElements() {
    mobileMenuToggle = document.getElementById('mobileMenuToggle');
    navLinks = document.getElementById('navLinks');
    contactForm = document.getElementById('contactForm');
    modal = document.getElementById('serviceModal');
    modalBody = document.getElementById('modalBody');
    modalClose = document.querySelector('.modal-close');
    serviceCards = document.querySelectorAll('.service-card');
    learnMoreButtons = document.querySelectorAll('.learn-more');
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Navigation links
    const navLinkElements = document.querySelectorAll('.nav-link');
    navLinkElements.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScrollTo(targetId);

            // Update active link
            navLinkElements.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Learn More buttons
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const serviceCard = button.closest('.service-card');
            const serviceType = serviceCard.getAttribute('data-service');
            showServiceModal(serviceType);
        });
    });

    // Service cards click
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceType = card.getAttribute('data-service');
            showServiceModal(serviceType);
        });
    });

    // Modal close
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Scroll event for header
    window.addEventListener('scroll', handleScroll);

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}

// Smooth Scroll
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Show Service Modal
function showServiceModal(serviceType) {
    const service = serviceDetails[serviceType];
    if (!service) return;

    const modalContent = `
        <div class="service-modal-content">
            <div class="service-modal-header">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h2>${service.title}</h2>
            </div>
            <p class="service-description">${service.description}</p>
            <div class="service-features">
                <h3>Features:</h3>
                <ul>
                    ${service.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="service-pricing">
                <h3>Pricing:</h3>
                <p><strong>${service.pricing}</strong></p>
            </div>
            <div class="service-cta">
                <a href="#contact" class="btn btn-primary" onclick="closeModal()">Get Quote</a>
            </div>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Handle Form Submit
function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const formMessage = document.getElementById('formMessage');

    // Simulate form submission (in real app, this would send to server)
    formMessage.textContent = 'Thank you for your inquiry! We will get back to you shortly.';
    formMessage.className = 'form-message success';

    // Reset form after 3 seconds
    setTimeout(() => {
        contactForm.reset();
        formMessage.style.display = 'none';
    }, 3000);
}

// Handle Scroll Effects
function handleScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
}

// Update Active Navigation
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Initialize Animations
function initializeAnimations() {
    // Animate statistics counter
    const statNumbers = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                animateCounter(target);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => observer.observe(stat));
}

// Animate Counter
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Setup Scroll Animations
function setupScrollAnimations() {
    const animateElements = document.querySelectorAll('.service-card, .pricing-card, .info-card, .feature');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// Service Card Hover Effects
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Dynamic greeting based on time
function setGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Welcome to';

    if (hour < 12) {
        greeting = 'Good Morning! Welcome to';
    } else if (hour < 18) {
        greeting = 'Good Afternoon! Welcome to';
    } else {
        greeting = 'Good Evening! Welcome to';
    }

    // Update hero title if needed (optional enhancement)
}

// Initialize greeting on load
setGreeting();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console message for developers
console.log('%c🌟 Awesome Online Services', 'font-size: 20px; color: #4f46e5; font-weight: bold;');
console.log('%cWebsite developed with care', 'font-size: 12px; color: #6b7280;');

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showServiceModal,
        closeModal,
        smoothScrollTo
    };
}
