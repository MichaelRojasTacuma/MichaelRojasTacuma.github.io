// ========================================
// NAVBAR FUNCTIONALITY
// ========================================

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Toggle menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(57, 255, 20, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ========================================
// ACTIVE LINK HIGHLIGHT (Scroll Spy)
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-neon-green');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('text-neon-green');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

console.log('🚀 Navbar loaded successfully!');

// ========================================
// HERO SECTION - TYPED.JS
// ========================================
document.addEventListener('DOMContentLoaded', function() {

    if (!document.querySelector('#typed-text')) {
        console.error('❌ No existe el elemento #typed-text.');
        return;
    }

    const typed = new Typed('#typed-text', {
        strings: [
            'Cloud Engineer ☁️',
            'DevOps Specialist 🚀',
            'Azure Expert 💙',
            'Terraform Developer 🔧',
            'CI/CD Architect 🔄',
            'Infrastructure as Code 📝',
            'Power Platform Developer ⚡'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: false
    });

    console.log('✨ Typed.js initialized!');
});


// ========================================
// COUNTER ANIMATION
// ========================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Iniciar counters cuando sean visibles
const observerOptions = {
    threshold: 0.5
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                if (counter.textContent === '0') {
                    animateCounter(counter);
                }
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar la sección hero
const heroSection = document.getElementById('home');
if (heroSection) {
    counterObserver.observe(heroSection);
}

// ========================================
// AOS (Animate On Scroll) INITIALIZATION
// ========================================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

console.log('🎨 AOS initialized!');