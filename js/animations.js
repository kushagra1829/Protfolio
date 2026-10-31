/**
 * ANIMATIONS & MOTION ENGINE — KUSHAGRA ANAND PORTFOLIO
 * Powers: Lenis smooth scroll, GSAP ScrollTrigger, Book spotlight, Nav travel transition
 */

let lenisInstance = null;

// Initialize Lenis Smooth Scroll
function initSmoothScroll() {
  if (typeof Lenis !== 'undefined') {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenisInstance.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    // Live scroll progress percentage update
    lenisInstance.on('scroll', (e) => {
      const scrollFraction = e.progress || 0;
      const progressPercent = Math.min(100, Math.max(0, Math.round(scrollFraction * 100)));
      
      const percentEl = document.getElementById('scroll-percentage');
      const barEl = document.getElementById('scroll-progress-bar');
      if (percentEl) percentEl.textContent = `${progressPercent}%`;
      if (barEl) barEl.style.width = `${progressPercent}%`;
    });
  } else {
    // Fallback standard scroll listener
    window.addEventListener('scroll', () => {
      const scrollH = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollH > 0 ? window.scrollY / scrollH : 0;
      const progressPercent = Math.min(100, Math.max(0, Math.round(scrollFraction * 100)));
      
      const percentEl = document.getElementById('scroll-percentage');
      const barEl = document.getElementById('scroll-progress-bar');
      if (percentEl) percentEl.textContent = `${progressPercent}%`;
      if (barEl) barEl.style.width = `${progressPercent}%`;
    }, { passive: true });
  }
}

// Scroll to target element smoothly
function scrollToSection(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -60, duration: 1.2 });
  } else {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// Nav Travel Transition: Zoom/tilt out, display target station, land smoothly
function executeTravelTransition(targetSelector, targetName) {
  const travelOverlay = document.getElementById('travel-overlay');
  const travelLabel = document.getElementById('travel-target-label');
  const travelBar = document.getElementById('travel-progress-bar');

  if (travelOverlay && travelLabel && travelBar) {
    travelLabel.textContent = `TARGET: ${targetName.toUpperCase()}`;
    travelOverlay.classList.add('travel-active');
    travelBar.style.width = '0%';

    // Play subtle audio if sound enabled
    if (window.soundEngine) window.soundEngine.playTravelTone();

    // Progress bar animation inside overlay
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      travelBar.style.width = `${progress}%`;
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          scrollToSection(targetSelector);
          travelOverlay.classList.remove('travel-active');
        }, 200);
      }
    }, 50);
  } else {
    scrollToSection(targetSelector);
  }
}

// Spotlight Interaction on the Origin Open Book
function initBookSpotlight() {
  const bookEl = document.getElementById('origin-book');
  if (!bookEl) return;

  bookEl.addEventListener('mousemove', (e) => {
    const rect = bookEl.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    bookEl.style.setProperty('--mouse-x', `${x}%`);
    bookEl.style.setProperty('--mouse-y', `${y}%`);
  });

  // Tilt Book on Scroll if GSAP is available
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.to(bookEl, {
      rotateX: -1.5,
      rotateY: 1,
      transformPerspective: 1000,
      ease: 'none',
      scrollTrigger: {
        trigger: '#origin',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }
}

// Section Reveal Transitions
function initScrollReveals() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // Reveal Hero elements
  gsap.from('#hero .tilt-left-1, #hero .tilt-right-1, #hero .tilt-left-2', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
    delay: 0.2
  });

  // Reveal Section Headers on Scroll
  gsap.utils.toArray('h2.font-display').forEach((heading) => {
    gsap.from(heading, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}

// Wire everything on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initBookSpotlight();
  initScrollReveals();
});

