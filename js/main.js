/**
 * Main Application Logic
 * Ultra-Premium Animations using GSAP, ScrollTrigger, and Lenis
 */

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
});

function initLoader() {
    const loader = document.getElementById('loader');
    const progress = document.querySelector('.loader-progress');
    const logoParts = document.querySelectorAll('.loader-logo span');
    
    // Animate logo entrance
    gsap.from(logoParts, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
    });

    // Animate progress bar
    gsap.to(progress, {
        width: "100%",
        duration: 2.5,
        ease: "power2.inOut",
        onComplete: () => {
            // Fade out loader
            loader.classList.add('fade-out');
            document.body.classList.remove('loading');
            
            // Start main animations
            setTimeout(() => {
                initApp();
            }, 500);
        }
    });
}

function initApp() {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    initSmoothScroll();
    initCustomCursor();
    initMagneticButtons();
    initTypography();
    initCounters();
    initDeckSlider();
    initModule();
}

let lenis;

function initSmoothScroll() {
    // Use standard scroll for snap or custom implementation
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

function initDeckSlider() {
    const slides = gsap.utils.toArray('.deck-slide');
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    
    // Sidebar Click
    navItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            const sectionSelector = item.getAttribute('data-section');
            const target = document.querySelector(sectionSelector);
            
            lenis.scrollTo(target, {
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        });
    });

    // Next Slide Button
    document.querySelectorAll('.next-slide').forEach(btn => {
        btn.addEventListener('click', () => {
            const nextSlide = btn.closest('.deck-slide').nextElementSibling;
            if (nextSlide) {
                lenis.scrollTo(nextSlide);
            }
        });
    });

    // Tracking Active Slide
    slides.forEach((slide, i) => {
        ScrollTrigger.create({
            trigger: slide,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
                if (self.isActive) {
                    updateSidebar(i);
                    animateSlideContent(slide);
                }
            }
        });
    });

    function updateSidebar(index) {
        navItems.forEach((item, i) => {
            if (i === index) item.classList.add('active');
            else item.classList.remove('active');
        });
    }

    function animateSlideContent(slide) {
        const elements = slide.querySelectorAll('.gs-reveal');
        gsap.fromTo(elements, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            overwrite: true
        });
    }
}

function initModule() {
    const eventsModule = document.getElementById('events-module');
    const inquiryModule = document.getElementById('inquiry-module');
    const eventsBtn = document.getElementById('open-events-detail');
    const partnerBtns = document.querySelectorAll('.partner-trigger');
    
    const closeEvents = document.getElementById('close-module');
    const closeInquiry = document.getElementById('close-inquiry');

    if (eventsBtn) eventsBtn.addEventListener('click', () => eventsModule.classList.add('active'));
    if (closeEvents) closeEvents.addEventListener('click', () => eventsModule.classList.remove('active'));
    
    partnerBtns.forEach(btn => {
        btn.addEventListener('click', () => inquiryModule.classList.add('active'));
    });
    if (closeInquiry) closeInquiry.addEventListener('click', () => inquiryModule.classList.remove('active'));
}
