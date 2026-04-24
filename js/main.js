/**
 * Main Application Logic
 * Ultra-Premium Animations using GSAP, ScrollTrigger, and Lenis
 */

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    // Remove loading class
    document.body.classList.remove('loading');
    
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
});

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

    // Image reveal animations within panels
    const imgReveals = document.querySelectorAll('.img-reveal::after');
    
    panels.forEach((panel, i) => {
        const imgContainer = panel.querySelector('.img-reveal');
        if(!imgContainer) return;
        
        // Simpler approach: image scale down
        const img = imgContainer.querySelector('img');
        gsap.from(img, {
            scale: 1.5,
            scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: "left 80%",
                end: "right 20%",
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
