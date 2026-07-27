/* ============================================
   ESPY - Premium Website JavaScript
   ============================================ */

// Personality Data
const personalities = {
    friendly: {
        name: "Friendly Espy",
        phrases: [
            "Hey bestie! Ready to shop till we drop?",
            "Hiiii! I missed you! What are we buying today?",
            "There you are! I've been waiting to go shopping with you!",
            "Yay you're back! I was just thinking about what you should buy next!"
        ]
    },
    sassy: {
        name: "Sassy Espy",
        phrases: [
            "Well well well, look who finally showed up!",
            "Took you long enough! I've been ready to shop!",
            "Oh honey, you picked the right day to shop with me!",
            "Finally! I was getting bored in here!"
        ]
    },
    shy: {
        name: "Shy Espy",
        phrases: [
            "Oh! Hi there... I was just, um, organizing your wishlist...",
            "H-hi! I'm so happy you came to shop with me!",
            "Hey... I was just reading some reviews...",
            "Oh hello! I hope you're having a good day!"
        ]
    },
    energetic: {
        name: "Energetic Espy",
        phrases: [
            "HELLO BESTIE!! READY FOR THE MOST AMAZING SHOPPING SPREE EVER?!",
            "OMG OMG OMG! Shopping time! Let's GOOOOO!",
            "YOOO! I've been WAITING for this! Let's find you some fire stuff!",
            "Let's GO! I'm SO ready to help you find the PERFECT things!"
        ]
    },
    calm: {
        name: "Calm Espy",
        phrases: [
            "Hello there. Ready for a peaceful shopping session?",
            "Welcome back. I've prepared some recommendations for you.",
            "Good to see you. Let's take our time and find the best deals.",
            "Hi. I hope you're relaxed. Let's shop at your own pace."
        ]
    },
    protective: {
        name: "Protective Espy",
        phrases: [
            "Hey! I've been checking reviews and prices while you were gone!",
            "There you are! I found some things you need to know about!",
            "Welcome back! I've been keeping an eye on your favorite items!",
            "Hi! I've got some important shopping intel for you!"
        ]
    },
    playful: {
        name: "Playful Espy",
        phrases: [
            "Hiii! Guess what? I found the COOLEST stuff for you!",
            "Hehe, I've been playing with the recommendation engine!",
            "Yoo-hoo! Ready for a fun shopping adventure?",
            "Party time! Well, shopping party time!"
        ]
    },
    sophisticated: {
        name: "Sophisticated Espy",
        phrases: [
            "Good day. I've curated some exceptional finds for you.",
            "Welcome. I've been reviewing the latest collections.",
            "Hello. I have some refined recommendations to share.",
            "Greetings. Let's discuss your sartorial needs."
        ]
    }
};

let currentPersonality = 'friendly';
let phraseIndex = 0;

// ============================================
// Cursor Glow Effect
// ============================================
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// ============================================
// Create Particles
// ============================================
function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#FF8FAB', '#B39DDB', '#81D4FA', '#FFF176', '#FFAB91'];

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDuration = (10 + Math.random() * 20) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}
createParticles();

// ============================================
// Navigation Scroll Effect
// ============================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
    });
});

// ============================================
// Espy Character Interactions
// ============================================
const espyBody = document.querySelector('.espy');
const speechBubble = document.getElementById('speechBubble');
const speechText = document.getElementById('speechText');

// Espy hover reactions
espyBody.addEventListener('mouseenter', () => {
    speechText.textContent = "Ooh, you found me! 🎀";
    speechBubble.classList.add('visible');
});

espyBody.addEventListener('mouseleave', () => {
    speechBubble.classList.remove('visible');
});

// Espy click reaction
espyBody.addEventListener('click', () => {
    const phrases = [
        "That tickles! 😆",
        "Hey! I'm working here! 💼",
        "You're the best! 💕",
        "Let's shop! 🛍️",
        "I love you! ❤️",
        "Stop poking me! 😤",
        "Okay okay, I'm listening! 👂"
    ];
    speechText.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    speechBubble.classList.add('visible');

    setTimeout(() => {
        speechBubble.classList.remove('visible');
    }, 3000);
});

// Auto-cycle Espy phrases
const espyPhrases = [
    "Hey bestie! Ready to shop?",
    "I found some amazing deals!",
    "Your skin will love this one!",
    "Budget check! Let me see...",
    "I'm here to protect you! 🛡️",
    "This product looks great!",
    "Want to see what's trending?",
    "I love shopping with you! 💕"
];

setInterval(() => {
    if (!speechBubble.classList.contains('visible')) {
        speechText.textContent = espyPhrases[Math.floor(Math.random() * espyPhrases.length)];
        speechBubble.classList.add('visible');
        setTimeout(() => speechBubble.classList.remove('visible'), 4000);
    }
}, 6000);

// ============================================
// Personality Switcher
// ============================================
function switchPersonality(type) {
    currentPersonality = type;
    phraseIndex = 0;

    // Update active card
    document.querySelectorAll('.personality-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelector(`[data-personality="${type}"]`).classList.add('active');

    // Update demo bubble
    const demoText = document.getElementById('demoText');
    const demoLabel = document.getElementById('demoLabel');
    const data = personalities[type];

    demoText.style.opacity = '0';
    demoText.style.transform = 'translateY(10px)';

    setTimeout(() => {
        demoText.textContent = data.phrases[phraseIndex];
        demoLabel.textContent = data.name;
        demoText.style.opacity = '1';
        demoText.style.transform = 'translateY(0)';
    }, 200);
}

// Auto-cycle personality phrases
setInterval(() => {
    const data = personalities[currentPersonality];
    phraseIndex = (phraseIndex + 1) % data.phrases.length;

    const demoText = document.getElementById('demoText');
    demoText.style.opacity = '0';
    demoText.style.transform = 'translateY(10px)';

    setTimeout(() => {
        demoText.textContent = data.phrases[phraseIndex];
        demoText.style.opacity = '1';
        demoText.style.transform = 'translateY(0)';
    }, 200);
}, 4000);

// ============================================
// Stat Counter Animation
// ============================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// ============================================
// Scroll Reveal Animation
// ============================================
function setupScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.feature-card, .world-card, .personality-card, .step, .section-header, .download-card, .demo-container'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
}

// ============================================
// Ingredient Demo Animation
// ============================================
function animateIngredientDemo() {
    const ingredients = document.querySelectorAll('.ingredient');
    const warning = document.getElementById('mockWarning');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ingredients.forEach((ing, index) => {
                    setTimeout(() => {
                        ing.style.opacity = '1';
                        ing.style.transform = 'scale(1)';
                    }, index * 300);
                });

                setTimeout(() => {
                    warning.style.opacity = '1';
                    warning.style.transform = 'translateY(0)';
                }, ingredients.length * 300 + 500);
            }
        });
    }, { threshold: 0.3 });

    const demoSection = document.querySelector('.ingredient-demo');
    if (demoSection) observer.observe(demoSection);
}

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// Feature Card Tilt Effect
// ============================================
function setupTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ============================================
// Waitlist Handler
// ============================================
function handleJoinWaitlist() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();

    if (!email || !email.includes('@')) {
        emailInput.style.borderColor = '#EF5350';
        emailInput.placeholder = 'Please enter a valid email';
        setTimeout(() => {
            emailInput.style.borderColor = 'rgba(255,255,255,0.1)';
            emailInput.placeholder = 'Enter your email';
        }, 2000);
        return;
    }

    const btn = emailInput.nextElementSibling;
    btn.innerHTML = '<span>✓ You\'re on the list!</span>';
    btn.style.background = 'linear-gradient(135deg, #66BB6A, #43A047)';
    emailInput.value = '';

    speechText.textContent = "Yay! Welcome to the family! 💕";
    speechBubble.classList.add('visible');

    setTimeout(() => {
        btn.innerHTML = '<span>Join Waitlist</span>';
        btn.style.background = '';
        speechBubble.classList.remove('visible');
    }, 5000);
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    setupScrollReveal();
    setupTiltEffect();
    animateIngredientDemo();

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) heroObserver.observe(heroStats);

    setTimeout(() => {
        speechText.textContent = "Hey bestie! Welcome to my world! ✨";
        speechBubble.classList.add('visible');
        setTimeout(() => speechBubble.classList.remove('visible'), 4000);
    }, 1500);
});

window.switchPersonality = switchPersonality;
window.handleJoinWaitlist = handleJoinWaitlist;
