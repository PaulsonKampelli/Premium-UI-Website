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
    initHeroAnimation();
    initCounters();
    initHorizontalScroll();
    initMarquee();
    initScrollProgress();
    initDeckNav();
    initModule();
}

let lenis;

function initSmoothScroll() {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easing
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower || window.innerWidth <= 1024) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;

        gsap.set(cursor, { x: cursorX, y: cursorY });
        gsap.set(follower, { x: followerX, y: followerY });
    });

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .magnetic');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        });
    });
}

function initMagneticButtons() {
    const magnetics = document.querySelectorAll('.magnetic');
    
    if(window.innerWidth <= 1024) return;

    magnetics.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(btn, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.8,
                ease: "power3.out"
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}

function initTypography() {
    // Split text into lines for animation
    const splitTexts = document.querySelectorAll('.gs-reveal');
    
    splitTexts.forEach(text => {
        const split = new SplitType(text, { types: 'lines, words' });
        
        // Wrap lines for masking effect
        split.lines.forEach(line => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('line-wrapper');
            wrapper.style.overflow = 'hidden';
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.set(text, { visibility: 'visible' });
        gsap.set(split.words, { yPercent: 100, opacity: 0 });

        ScrollTrigger.create({
            trigger: text,
            start: "top 85%",
            onEnter: () => {
                gsap.to(split.words, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.05,
                    ease: "power4.out"
                });
            }
        });
    });
}

function initHeroAnimation() {
    // Apple-style pinning and scaling hero image
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: true
        }
    });

    tl.to(".hero-media-wrapper", {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        duration: 1,
        ease: "none"
    }, 0)
    .to(".hero-overlay", {
        backgroundColor: "rgba(0,0,0,0.6)",
        duration: 1
    }, 0)
    .to(".hero-title", {
        y: -50,
        opacity: 0,
        duration: 0.5
    }, 0)
    .to(".hero-subtitle", {
        y: -30,
        opacity: 0,
        duration: 0.5
    }, 0.1);
}

function initCounters() {
    const counters = document.querySelectorAll('.gs-counter');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const line = counter.parentElement.querySelector('.stat-line');
        
        ScrollTrigger.create({
            trigger: counter,
            start: "top 80%",
            onEnter: () => {
                // Number counter
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    ease: "power2.out",
                    snap: { innerHTML: target % 1 !== 0 ? 0.1 : 1 },
                    onUpdate: function() {
                        if(target % 1 !== 0) {
                            counter.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
                        }
                    }
                });
                
                // Line extension
                if(line) {
                    gsap.to(line, {
                        width: "100%",
                        duration: 1.5,
                        ease: "power3.out"
                    });
                }
            },
            once: true
        });
    });
}

function initHorizontalScroll() {
    if(window.innerWidth <= 1024) return; // Skip horizontal scroll on mobile

    const horizontalContainer = document.querySelector('.horizontal-container');
    const panels = gsap.utils.toArray('.horizontal-panel');
    
    // Horizontal scroll pinning
    let horizontalTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-scroll-section",
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => "+=" + horizontalContainer.offsetWidth
        }
    });

    // Parallax effect on images within panels
    panels.forEach((panel, i) => {
        const img = panel.querySelector('.panel-image-container img');
        if(!img) return;
        
        gsap.fromTo(img, {
            x: "-20%"
        }, {
            x: "20%",
            ease: "none",
            scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: "left right",
                end: "right left",
                scrub: true
            }
        });
    });
}

function initMarquee() {
    const marquees = document.querySelectorAll('.marquee-container');
    
    marquees.forEach((marquee, i) => {
        const direction = marquee.classList.contains('reverse') ? 1 : -1;
        
        gsap.to(marquee, {
            xPercent: direction * -50,
            ease: "none",
            scrollTrigger: {
                trigger: ".large-typography-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });
}

function initScrollProgress() {
    gsap.to('.scroll-progress', {
        width: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3
        }
    });
}

function initDeckNav() {
    const navItems = document.querySelectorAll('.deck-nav-item');
    const sections = [
        '#overview',
        '#scale',
        '#luxury',
        '#dining',
        '#entertainment',
        '#events',
        '.cta-section'
    ];

    // Click handler
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionSelector = item.getAttribute('data-section');
            const target = document.querySelector(sectionSelector);
            
            if (target) {
                lenis.scrollTo(target, {
                    offset: 0,
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            }
        });
    });

    // Update active state and counter on scroll
    sections.forEach((selector, index) => {
        const section = document.querySelector(selector);
        if(!section) return;

        ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
                if(self.isActive) {
                    updateDeckNav(index);
                }
            }
        });
    });

    function updateDeckNav(index) {
        navItems.forEach((item, i) => {
            if(i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update counter
        const currentCounter = document.querySelector('.slide-counter .current');
        if(currentCounter) {
            currentCounter.innerText = (index + 1).toString().padStart(2, '0');
        }
    }
}

function initModule() {
    // Events Module
    const eventsModule = document.getElementById('events-module');
    const eventsOpenBtn = document.querySelector('#events .btn');
    const eventsCloseBtn = document.getElementById('close-module');

    // Inquiry Module
    const inquiryModule = document.getElementById('inquiry-module');
    const inquiryBtns = document.querySelectorAll('.btn-primary, .cta-section .btn, .nav-actions .btn');
    const inquiryCloseBtn = document.getElementById('close-inquiry');

    const openModule = (mod) => {
        mod.classList.add('active');
        document.body.style.overflow = 'hidden';
        lenis.stop();
    };

    const closeModule = (mod) => {
        mod.classList.remove('active');
        document.body.style.overflow = 'auto';
        lenis.start();
    };

    if (eventsOpenBtn && eventsModule) {
        eventsOpenBtn.addEventListener('click', () => openModule(eventsModule));
    }

    if (eventsCloseBtn && eventsModule) {
        eventsCloseBtn.addEventListener('click', () => closeModule(eventsModule));
    }

    if (inquiryModule) {
        inquiryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Prevent trigger if it's the "View Details" or other specific buttons
                if(btn.innerText.toLowerCase().includes('download') || btn.innerText.toLowerCase().includes('view')) return;
                openModule(inquiryModule);
            });
        });

        if (inquiryCloseBtn) {
            inquiryCloseBtn.addEventListener('click', () => closeModule(inquiryModule));
        }
    }
}
