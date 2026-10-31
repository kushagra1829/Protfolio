/**
 * MAIN ENGINE — KUSHAGRA ANAND PORTFOLIO
 * Data-Driven Component Rendering & Interactive Controllers
 */

// Sound Telemetry Synthesizer (Native Web Audio API)
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true; // Muted by default per specification
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.05) {
    if (this.isMuted) return;
    try {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio fallback silent
    }
  }

  playStationChime() {
    this.playTone(587.33, 'triangle', 0.15, 0.06); // D5
    setTimeout(() => this.playTone(880, 'sine', 0.2, 0.05), 80); // A5
  }

  playClickTone() {
    this.playTone(440, 'sine', 0.05, 0.03);
  }

  playTravelTone() {
    this.playTone(329.63, 'sawtooth', 0.25, 0.04);
  }

  toggleMute() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isMuted = !this.isMuted;
    const mutedIcon = document.getElementById('sound-icon-muted');
    const activeIcon = document.getElementById('sound-icon-active');

    if (mutedIcon && activeIcon) {
      if (this.isMuted) {
        mutedIcon.classList.remove('hidden');
        activeIcon.classList.add('hidden');
      } else {
        mutedIcon.classList.add('hidden');
        activeIcon.classList.remove('hidden');
        this.playStationChime();
      }
    }
    return this.isMuted;
  }
}

const soundEngine = new SoundEngine();
window.soundEngine = soundEngine;

// =========================================================================
// 1. PRELOADER CONTROLLER
// =========================================================================
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const counterEl = document.getElementById('preloader-counter');
  const barEl = document.getElementById('preloader-bar');
  const skipBtn = document.getElementById('skip-preloader-btn');

  if (!preloader || !counterEl || !barEl) return;

  let count = 0;
  let isDone = false;

  const dismissPreloader = () => {
    if (isDone) return;
    isDone = true;
    preloader.classList.add('preloader-hidden');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  };

  if (skipBtn) {
    skipBtn.addEventListener('click', dismissPreloader);
  }

  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 8) + 4;
    if (count >= 100) {
      count = 100;
      clearInterval(interval);
      counterEl.textContent = '100%';
      barEl.style.width = '100%';
      setTimeout(dismissPreloader, 350);
    } else {
      counterEl.textContent = `${count}%`;
      barEl.style.width = `${count}%`;
    }
  }, 40);
}

// =========================================================================
// 2. CUSTOM CURSOR TRACKER
// =========================================================================
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const cursorLabel = document.getElementById('cursor-label');
  if (!cursor || !cursorLabel) return;

  // Only activate on devices with fine pointer
  if (window.matchMedia('(pointer: coarse)').matches) {
    cursor.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    currentX += (mouseX - currentX) * 0.22;
    currentY += (mouseY - currentY) * 0.22;
    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Delegate contextual label changes
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-cursor]');
    if (target) {
      const labelText = target.getAttribute('data-cursor');
      cursorLabel.textContent = labelText;
      cursor.classList.add('has-label', 'hovering');
    } else {
      cursor.classList.remove('has-label', 'hovering');
    }
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
}

// =========================================================================
// 3. TOP BAR ROTATING ONE-LINERS
// =========================================================================
function initTopBarRotator() {
  const rotatorEl = document.getElementById('top-bar-rotator');
  if (!rotatorEl || !CONTENT.topBarLines || !CONTENT.topBarLines.length) return;

  let currentIndex = 0;
  setInterval(() => {
    rotatorEl.style.opacity = '0';
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % CONTENT.topBarLines.length;
      rotatorEl.textContent = CONTENT.topBarLines[currentIndex];
      rotatorEl.style.opacity = '1';
    }, 300);
  }, 4200);
}

// =========================================================================
// 4. FIXED BOTTOM NAVIGATION & ACTIVE SECTION HIGHLIGHTING
// =========================================================================
function initBottomNav() {
  const navPills = document.querySelectorAll('.nav-pill');
  if (!navPills.length) return;

  // Pill click handlers with travel transition
  navPills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = pill.getAttribute('href');
      const sectionName = pill.getAttribute('data-section') || 'TRANSIT';
      
      navPills.forEach(p => p.classList.remove('bg-royal-blue', 'text-white'));
      pill.classList.add('bg-royal-blue', 'text-white');

      if (typeof executeTravelTransition === 'function') {
        executeTravelTransition(targetId, sectionName);
      } else if (typeof scrollToSection === 'function') {
        scrollToSection(targetId);
      }
    });
  });

  // Track sections on scroll using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -40% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navPills.forEach((pill) => {
          if (pill.getAttribute('href') === `#${id}`) {
            pill.classList.add('bg-royal-blue', 'text-white');
          } else {
            pill.classList.remove('bg-royal-blue', 'text-white');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}

// =========================================================================
// 5. EXPANDABLE PROJECTS DECK (Section 03)
// =========================================================================
function initProjectsDeck() {
  const container = document.getElementById('projects-deck-container');
  if (!container || !CONTENT.projects) return;

  container.innerHTML = CONTENT.projects.map((proj, idx) => `
    <div class="project-card bg-cream-paper border-brutal shadow-brutal hover-press rounded-md cursor-pointer transition-all ${idx === 0 ? 'expanded' : ''}" 
         data-id="${proj.id}" 
         data-cursor="EXPAND"
         tabindex="0"
         role="button"
         aria-expanded="${idx === 0 ? 'true' : 'false'}"
         aria-label="Expand project ${proj.name}">
      
      <!-- Card Summary Bar -->
      <div class="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 select-none">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 bg-black text-accent-yellow font-display text-lg flex items-center justify-center border-brutal-sm shadow-brutal-sm">
            0${idx + 1}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-mono text-[10px] font-black text-royal-blue uppercase tracking-wider">${proj.stationCode}</span>
              <span class="font-mono text-[10px] bg-black text-white px-1.5 py-0.5 font-bold uppercase">${proj.tag}</span>
            </div>
            <h3 class="font-display text-2xl sm:text-3xl text-black uppercase mt-0.5">${proj.name}</h3>
            <p class="font-sans text-xs sm:text-sm text-gray-700 font-medium mt-1">${proj.oneliner}</p>
          </div>
        </div>

        <div class="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-gray-300">
          <div class="text-right">
            <div class="font-mono text-xs font-black text-black uppercase">${proj.role}</div>
            <div class="font-mono text-[11px] text-gray-500 font-bold">${proj.weeks}</div>
          </div>
          <div class="expand-indicator w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-mono font-bold text-sm bg-accent-yellow">
            ${idx === 0 ? '−' : '+'}
          </div>
        </div>
      </div>

      <!-- Expandable Card Details (2 Bullets Left, 3 Big Stats Right) -->
      <div class="card-details px-6 sm:px-8 pb-8 pt-2 border-t-2 border-black bg-paper-grid">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-center">
          
          <!-- Left: Preview & 2 Detailed Bullets -->
          <div class="lg:col-span-7 space-y-4">
            <div class="border-brutal bg-black rounded overflow-hidden max-h-56">
              <img src="${proj.previewImage}" alt="${proj.name} Interface" class="w-full h-full object-cover">
            </div>

            <div class="space-y-2 mt-4">
              ${proj.bullets.map(bullet => `
                <div class="flex items-start gap-2.5">
                  <span class="w-2.5 h-2.5 bg-royal-blue border border-black mt-1 flex-shrink-0"></span>
                  <p class="font-sans text-xs sm:text-sm text-gray-900 font-semibold leading-relaxed">${bullet}</p>
                </div>
              `).join('')}
            </div>

            ${proj.links ? `
              <div class="flex gap-3 pt-3">
                ${proj.links.github ? `
                  <a href="${proj.links.github}" target="_blank" rel="noopener noreferrer" class="px-4 py-1.5 bg-black text-accent-yellow font-mono text-xs font-black uppercase border border-black hover:bg-white hover:text-black transition-colors" data-cursor="CODE">
                    VIEW SOURCE CODE ↗
                  </a>
                ` : ''}
                ${proj.links.demo ? `
                  <a href="${proj.links.demo}" target="_blank" rel="noopener noreferrer" class="px-4 py-1.5 bg-royal-blue text-white font-mono text-xs font-black uppercase border border-black hover:bg-black transition-colors" data-cursor="DEMO">
                    LIVE RUNTIME ↗
                  </a>
                ` : ''}
              </div>
            ` : ''}
          </div>

          <!-- Right: 3 Big Verified Stats -->
          <div class="lg:col-span-5 grid grid-cols-1 gap-3">
            ${proj.stats.map(stat => `
              <div class="bg-white border-brutal p-4 shadow-brutal-sm">
                <div class="font-mono text-[10px] font-black text-gray-500 uppercase tracking-wider">${stat.label}</div>
                <div class="font-display text-3xl sm:text-4xl text-black mt-1">${stat.value}</div>
              </div>
            `).join('')}
          </div>

        </div>
      </div>

    </div>
  `).join('');

  // Accordion Expand/Collapse Event Handlers
  const cards = container.querySelectorAll('.project-card');
  cards.forEach((card) => {
    const toggleCard = (e) => {
      // Don't toggle if clicking links inside details
      if (e.target.closest('a')) return;

      const isExpanded = card.classList.contains('expanded');
      soundEngine.playClickTone();

      // Collapse all cards
      cards.forEach(c => {
        c.classList.remove('expanded');
        c.setAttribute('aria-expanded', 'false');
        const ind = c.querySelector('.expand-indicator');
        if (ind) ind.textContent = '+';
      });

      // Expand clicked card if it was collapsed
      if (!isExpanded) {
        card.classList.add('expanded');
        card.setAttribute('aria-expanded', 'true');
        const ind = card.querySelector('.expand-indicator');
        if (ind) ind.textContent = '−';
      }
    };

    card.addEventListener('click', toggleCard);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(e);
      }
    });
  });
}

// =========================================================================
// 6. BEST WORK — CHENNAI ➔ UMEÅ ROUTE CAROUSEL & DISSECTION OVERLAYS
// =========================================================================
let currentStationIndex = 0;

function initRouteCarousel() {
  const track = document.getElementById('route-carousel-track');
  const prevBtn = document.getElementById('route-prev-btn');
  const nextBtn = document.getElementById('route-next-btn');
  const waypointsContainer = document.getElementById('route-waypoints');
  const progressLine = document.getElementById('route-progress-line');
  const tickerEl = document.getElementById('station-led-ticker');

  if (!track || !CONTENT.bestWork) return;

  const totalStations = CONTENT.bestWork.length;

  // Render Waypoint Markers on Route Line
  if (waypointsContainer) {
    waypointsContainer.innerHTML = CONTENT.bestWork.map((stn, idx) => `
      <button class="waypoint-node flex flex-col items-center group focus:outline-none" data-index="${idx}" aria-label="Go to station ${stn.stationName}">
        <div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black flex items-center justify-center font-mono text-[10px] font-black transition-all ${idx === 0 ? 'bg-accent-yellow text-black scale-125 shadow-brutal-sm' : 'bg-black text-white hover:bg-slate-700'}">
          ${stn.stationNumber}
        </div>
        <span class="hidden md:inline font-mono text-[9px] font-bold text-cream-paper mt-1 group-hover:text-accent-yellow transition-colors truncate max-w-[100px]">
          ${stn.stationName}
        </span>
      </button>
    `).join('');
  }

  // Render Station Carousel Cards
  track.innerHTML = CONTENT.bestWork.map((stn, idx) => `
    <div class="route-station-slide w-full flex-shrink-0 px-2 sm:px-4">
      <div class="bg-cream-paper border-brutal shadow-brutal-xl rounded-md overflow-hidden bg-paper-grid">
        
        <!-- Station Top Bar -->
        <div class="bg-black text-white p-4 sm:p-5 flex flex-wrap justify-between items-center gap-3">
          <div class="flex items-center gap-3">
            <span class="px-2 py-0.5 bg-accent-yellow text-black font-mono text-xs font-black uppercase">
              STATION ${stn.stationNumber}
            </span>
            <span class="font-mono text-xs sm:text-sm font-extrabold tracking-wider text-accent-yellow uppercase">
              ${stn.stationName}
            </span>
          </div>
          <span class="font-mono text-xs text-slate-300 font-semibold">${stn.stationSubtitle}</span>
        </div>

        <!-- Station Body Content -->
        <div class="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Left: Title, Tags, Bullets, Dissection Button -->
          <div class="lg:col-span-7 space-y-4">
            <div class="flex flex-wrap gap-2">
              ${stn.tags.map(tag => `
                <span class="px-2.5 py-1 bg-white border-brutal-sm font-mono text-[10px] font-black uppercase">${tag}</span>
              `).join('')}
            </div>

            <h3 class="font-display text-3xl sm:text-5xl text-black uppercase tracking-tight">${stn.title}</h3>
            <p class="font-sans text-sm sm:text-base text-gray-800 font-bold leading-relaxed">${stn.headline}</p>

            <div class="space-y-2 py-2">
              ${stn.bullets.map(b => `
                <div class="flex items-start gap-2.5">
                  <span class="w-2.5 h-2.5 bg-accent-yellow border border-black mt-1 flex-shrink-0"></span>
                  <p class="font-sans text-xs sm:text-sm text-gray-700 font-medium">${b}</p>
                </div>
              `).join('')}
            </div>

            <!-- Open Dissection Button / Yellow Tab -->
            <div class="pt-2">
              <button class="open-dissection-trigger bg-accent-yellow text-black px-6 py-3.5 border-brutal shadow-brutal font-mono text-xs font-black uppercase tracking-wider hover-press flex items-center gap-3" 
                      data-index="${idx}"
                      data-cursor="DISSECT">
                <span>OPEN DISSECTION DEEP DIVE ↗</span>
                <span class="w-2 h-2 bg-black rounded-full"></span>
              </button>
            </div>
          </div>

          <!-- Right: Visual Schematic & Verified Numbers Row -->
          <div class="lg:col-span-5 space-y-4">
            <div class="border-brutal bg-black rounded overflow-hidden shadow-brutal">
              <img src="${stn.previewImage}" alt="${stn.title} Schematic" class="w-full max-h-56 object-cover">
            </div>

            <div class="grid grid-cols-3 gap-2">
              ${stn.stats.map(stat => `
                <div class="bg-white border-brutal-sm p-2.5 text-center shadow-brutal-sm">
                  <div class="font-display text-lg sm:text-xl text-royal-blue">${stat.value}</div>
                  <div class="font-mono text-[9px] font-black uppercase text-black mt-0.5">${stat.label}</div>
                  <div class="font-sans text-[8px] text-gray-500 truncate">${stat.sub}</div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </div>
    </div>
  `).join('');

  // Update Carousel Position and Waypoints
  function updateCarousel(index) {
    currentStationIndex = Math.max(0, Math.min(index, totalStations - 1));
    track.style.transform = `translateX(-${currentStationIndex * 100}%)`;

    // Update Progress Line
    if (progressLine) {
      const percent = (currentStationIndex / (totalStations - 1)) * 100;
      progressLine.style.width = `${Math.max(10, percent)}%`;
    }

    // Update LED Ticker
    const currentStation = CONTENT.bestWork[currentStationIndex];
    if (tickerEl && currentStation) {
      tickerEl.textContent = `● STATION ${currentStation.stationNumber} / 05 // ${currentStation.stationName}`;
    }

    // Update Waypoint Nodes
    const nodes = document.querySelectorAll('.waypoint-node');
    nodes.forEach((node, idx) => {
      const circle = node.querySelector('div');
      if (idx === currentStationIndex) {
        circle.className = 'w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black flex items-center justify-center font-mono text-[10px] font-black bg-accent-yellow text-black scale-125 shadow-brutal-sm transition-all';
      } else if (idx < currentStationIndex) {
        circle.className = 'w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black flex items-center justify-center font-mono text-[10px] font-black bg-royal-blue text-white transition-all';
      } else {
        circle.className = 'w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black flex items-center justify-center font-mono text-[10px] font-black bg-black text-white hover:bg-slate-700 transition-all';
      }
    });

    // Update Prev / Next Buttons
    if (prevBtn) prevBtn.disabled = currentStationIndex === 0;
    if (nextBtn) nextBtn.disabled = currentStationIndex === totalStations - 1;

    soundEngine.playStationChime();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStationIndex > 0) updateCarousel(currentStationIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStationIndex < totalStations - 1) updateCarousel(currentStationIndex + 1);
    });
  }

  // Keyboard Arrow Navigation
  window.addEventListener('keydown', (e) => {
    // Only if not in an input and dissection overlay is closed
    const overlay = document.getElementById('dissection-overlay');
    if (overlay && overlay.classList.contains('active')) return;

    if (e.key === 'ArrowLeft') {
      if (currentStationIndex > 0) updateCarousel(currentStationIndex - 1);
    } else if (e.key === 'ArrowRight') {
      if (currentStationIndex < totalStations - 1) updateCarousel(currentStationIndex + 1);
    }
  });

  // Waypoint Direct Click
  document.querySelectorAll('.waypoint-node').forEach(node => {
    node.addEventListener('click', () => {
      const idx = parseInt(node.getAttribute('data-index'), 10);
      updateCarousel(idx);
    });
  });

  // Touch Swipe Support
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && currentStationIndex < totalStations - 1) {
        updateCarousel(currentStationIndex + 1);
      } else if (diff < 0 && currentStationIndex > 0) {
        updateCarousel(currentStationIndex - 1);
      }
    }
  }, { passive: true });

  // Dissection Overlay Modal Trigger
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-dissection-trigger');
    if (trigger) {
      const idx = parseInt(trigger.getAttribute('data-index'), 10);
      openDissectionOverlay(idx);
    }
  });

  updateCarousel(0);
}

// =========================================================================
// 7. DISSECTION OVERLAY CONTROLLER
// =========================================================================
function openDissectionOverlay(stationIndex) {
  const overlay = document.getElementById('dissection-overlay');
  const station = CONTENT.bestWork[stationIndex];
  if (!overlay || !station) return;

  const diss = station.dissection;

  // Populate Header
  document.getElementById('dissection-station-badge').textContent = `STATION ${station.stationNumber} // ${station.stationName}`;
  document.getElementById('dissection-role-badge').textContent = diss.role;
  document.getElementById('dissection-title').textContent = station.title;
  document.getElementById('dissection-subtitle').textContent = station.headline;

  // Populate Tags
  const tagsContainer = document.getElementById('dissection-tags');
  if (tagsContainer) {
    tagsContainer.innerHTML = diss.tags.map(t => `
      <span class="px-3 py-1 bg-black text-accent-yellow font-mono text-xs font-black uppercase">${t}</span>
    `).join('');
  }

  // Populate Problem & Answer
  document.getElementById('dissection-problem').textContent = diss.problem;
  document.getElementById('dissection-answer').textContent = diss.answer;

  // Evidence Image
  const evidenceImg = document.getElementById('dissection-evidence-img');
  if (evidenceImg) {
    evidenceImg.src = diss.evidence[0] || station.previewImage;
  }

  // Verified Stats
  const statsContainer = document.getElementById('dissection-stats');
  if (statsContainer) {
    statsContainer.innerHTML = station.stats.map(s => `
      <div class="flex justify-between items-baseline border-b border-black/40 pb-2">
        <span class="font-mono text-xs font-bold text-black uppercase">${s.label}</span>
        <span class="font-display text-2xl text-black">${s.value}</span>
      </div>
    `).join('');
  }

  // Code Snippet
  const codeEl = document.getElementById('dissection-code');
  if (codeEl) {
    codeEl.textContent = diss.codeSnippet.trim();
  }

  // Links
  const linksContainer = document.getElementById('dissection-links');
  if (linksContainer) {
    linksContainer.innerHTML = `
      ${diss.links.github ? `
        <a href="${diss.links.github}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-black text-white font-mono text-xs font-black uppercase hover:bg-accent-yellow hover:text-black transition-colors" data-cursor="CODE">
          GITHUB REPOSITORY ↗
        </a>
      ` : ''}
      ${diss.links.demo ? `
        <a href="${diss.links.demo}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-royal-blue text-white font-mono text-xs font-black uppercase hover:bg-black transition-colors" data-cursor="DEMO">
          EXPLORE DEMO ↗
        </a>
      ` : ''}
      ${diss.links.patent ? `
        <span class="px-4 py-2.5 bg-accent-yellow text-black font-mono text-xs font-black uppercase border border-black">
          ★ ${diss.links.patent}
        </span>
      ` : ''}
    `;
  }

  // Open and lock scroll
  overlay.classList.add('active');
  if (window.lenisInstance) window.lenisInstance.stop();
  document.body.style.overflow = 'hidden';
  soundEngine.playTravelTone();
}

function closeDissectionOverlay() {
  const overlay = document.getElementById('dissection-overlay');
  if (!overlay) return;

  overlay.classList.remove('active');
  if (window.lenisInstance) window.lenisInstance.start();
  document.body.style.overflow = '';
  soundEngine.playClickTone();
}

function initDissectionEvents() {
  const closeBtn = document.getElementById('close-dissection-btn');
  const bottomReturnBtn = document.getElementById('bottom-return-btn');
  const overlay = document.getElementById('dissection-overlay');

  if (closeBtn) closeBtn.addEventListener('click', closeDissectionOverlay);
  if (bottomReturnBtn) bottomReturnBtn.addEventListener('click', closeDissectionOverlay);

  // Close on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
      closeDissectionOverlay();
    }
  });

  // Close when clicking outside content box
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeDissectionOverlay();
      }
    });
  }
}

// =========================================================================
// 8. SECTION 05: VISUALS (Cursor-Following Radar Gallery)
// =========================================================================
function initVisualsRadar() {
  const container = document.getElementById('visuals-zones-container');
  const activeImg = document.getElementById('visuals-active-img');
  const activeCode = document.getElementById('visuals-active-code');
  const activeTitle = document.getElementById('visuals-active-title');

  if (!container || !CONTENT.visuals) return;

  container.innerHTML = CONTENT.visuals.map((vis, idx) => `
    <div class="visuals-zone-item bg-cream-paper border-brutal shadow-brutal p-3.5 sm:p-4 rounded cursor-pointer flex items-center justify-between"
         data-id="${vis.id}"
         data-image="${vis.image}"
         data-code="${vis.code}"
         data-title="${vis.skill}"
         data-station="${vis.station}"
         data-cursor="SIGNAL">
      <div class="flex items-center gap-3">
        <span class="zone-code font-mono text-[10px] font-black bg-black text-accent-yellow px-2 py-0.5">
          ${vis.code}
        </span>
        <span class="font-display text-sm sm:text-base text-black uppercase">
          ${vis.skill}
        </span>
      </div>
      <span class="font-mono text-[10px] font-bold text-gray-600 hidden sm:inline">
        ${vis.station} ➔
      </span>
    </div>
  `).join('');

  const items = container.querySelectorAll('.visuals-zone-item');
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const imgPath = item.getAttribute('data-image');
      const code = item.getAttribute('data-code');
      const title = item.getAttribute('data-title');
      const station = item.getAttribute('data-station');

      if (activeImg) activeImg.src = imgPath;
      if (activeCode) activeCode.textContent = `${code} // ${station}`;
      if (activeTitle) activeTitle.textContent = title;

      soundEngine.playClickTone();
    });
  });
}

// =========================================================================
// 9. SOUND TOGGLE BUTTON
// =========================================================================
function initSoundToggle() {
  const btn = document.getElementById('sound-toggle-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    soundEngine.toggleMute();
  });
}

// Wire everything up when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCustomCursor();
  initTopBarRotator();
  initBottomNav();
  initProjectsDeck();
  initRouteCarousel();
  initDissectionEvents();
  initVisualsRadar();
  initSoundToggle();
});

