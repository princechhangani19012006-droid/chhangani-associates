// ============ DATA ============
const services = [
  { name: "Aluminium Sliding Doors", desc: "Smooth-glide sliding door systems, custom-fit to any opening.", features: ["Weatherproof seals","Anti-corrosion finish","Custom sizing"] },
  { name: "Aluminium Windows", desc: "Slim-profile windows balancing strength, insulation, and light.", features: ["Thermal break option","Mosquito mesh","Multiple finishes"] },
  { name: "Toughened Glass Installation", desc: "Safety-rated glass for façades, partitions, and railings.", features: ["8–19mm thickness","Tinted & frosted options","Impact-rated"] },
  { name: "ACP Cladding", desc: "Aluminium composite panel cladding for a sharp, modern exterior.", features: ["Fire-rated cores available","Wide colour range","Weather-sealed joints"] },
  { name: "Industrial Sheds", desc: "Pre-engineered aluminium shed structures for industrial sites.", features: ["Rapid installation","Corrosion-resistant","Custom spans"] },
  { name: "Polycarbonate Roofing", desc: "Light-transmitting roofing for carports, walkways, and yards.", features: ["UV-protected sheets","Insulated options","Low maintenance"] },
  { name: "Office Partitions", desc: "Aluminium-framed glass partitions for modern workspaces.", features: ["Acoustic options","Modular layout","Fast reconfiguration"] },
  { name: "Glass Railings", desc: "Frameless and semi-framed glass railings for stairs and balconies.", features: ["Toughened glass","Stainless fittings","Custom heights"] },
  { name: "Modular Aluminium Work", desc: "Modular aluminium structures built for flexibility and reuse.", features: ["Bolt-together design","Reconfigurable","Fast turnaround"] },
  { name: "Fabrication", desc: "In-house cutting, welding, and finishing for custom aluminium work.", features: ["Precision cutting","Powder coating","Custom profiles"] },
  { name: "Maintenance & Repair", desc: "Servicing and repair for existing aluminium and glass installations.", features: ["Seal replacement","Track & roller service","Glass replacement"] },
  { name: "uPVC Windows & Doors", desc: "Energy-efficient uPVC window and door systems for better insulation and sound-proofing.", features: ["Thermal & sound insulation","Low maintenance","Multiple profile options"] }
];

const whyUs = [
  "Premium Materials", "Expert Workers", "Affordable Pricing", "Fast Installation",
  "Modern Designs", "After Sales Support", "Quality Assurance", "Timely Delivery"
];

const projects = [
  { title: "Skyline Residence", cat: "residential", ratio: 1.2, slug: "skyline-residence" },
  { title: "Harbor View Villas", cat: "residential", ratio: 0.8, slug: "harbor-view-villas" },
  { title: "Metro Business Park", cat: "commercial", ratio: 1, slug: "metro-business-park" },
  { title: "Crestline Offices", cat: "commercial", ratio: 1.3, slug: "crestline-offices" },
  { title: "Northgate Warehouse", cat: "industrial", ratio: 0.9, slug: "northgate-warehouse" },
  { title: "Sunview Apartments", cat: "residential", ratio: 1.1, slug: "sunview-apartments" },
  { title: "Plaza Retail Front", cat: "commercial", ratio: 0.85, slug: "plaza-retail-front" },
  { title: "Ironline Shed Complex", cat: "industrial", ratio: 1.15, slug: "ironline-shed-complex" },
  { title: "Lakeside Bungalow", cat: "residential", ratio: 1, slug: "lakeside-bungalow" }
];

const testimonials = [
  { quote: "Chhangani Associates fitted our entire sliding door line in half the time we expected — clean finish, no fuss.", author: "Residential Client, Skyline Residence" },
  { quote: "The ACP cladding on our office front still looks new after two years. Solid workmanship.", author: "Commercial Client, Crestline Offices" },
  { quote: "Our shed structure went up fast and has held up through two monsoon seasons without a single issue.", author: "Industrial Client, Northgate Warehouse" }
];

const faqs = [
  { q: "Do you provide free site visits and quotes?", a: "Yes — share your requirements through the contact form or WhatsApp and we'll schedule a free site visit and quote." },
  { q: "What materials do you use for fabrication?", a: "We use corrosion-resistant aluminium profiles and toughened/laminated glass sourced from established suppliers, matched to the project's exposure conditions." },
  { q: "How long does a typical installation take?", a: "Residential window and door installations usually take 2–5 days; larger commercial or industrial jobs are scoped individually during the site visit." },
  { q: "Do you offer maintenance after installation?", a: "Yes, we offer post-installation maintenance and repair covering seals, tracks, rollers, and glass replacement." },
  { q: "Can you match a specific colour or finish?", a: "Yes — we offer a range of powder-coated finishes and ACP colours, and can source specific shades on request." }
];

// ============ ICON SET (inline SVG, no external requests) ============
const icons = [
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" stroke="currentColor" stroke-width="1.5"/><path d="M12 4v16M4 12h8" stroke="currentColor" stroke-width="1.5"/></svg>',
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M4 12h16M12 4v16" stroke="currentColor" stroke-width="1.5"/></svg>',
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 8l9-5 9 5v8l-9 5-9-5z" stroke="currentColor" stroke-width="1.5"/></svg>',
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="14" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M3 10h18" stroke="currentColor" stroke-width="1.5"/></svg>',
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20V10l8-6 8 6v10" stroke="currentColor" stroke-width="1.5"/></svg>',
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20h16M4 20V9l8-5 8 5v11" stroke="currentColor" stroke-width="1.5"/></svg>',
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="16" stroke="currentColor" stroke-width="1.5"/><rect x="13" y="4" width="7" height="16" stroke="currentColor" stroke-width="1.5"/></svg>',
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20V4M4 8h16M4 14h16" stroke="currentColor" stroke-width="1.5"/></svg>',
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="6" height="6" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="4" width="6" height="6" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="14" width="6" height="6" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="14" width="6" height="6" stroke="currentColor" stroke-width="1.5"/></svg>',
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5"/></svg>',
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 4v6l4 2" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/></svg>'
];

function projectSvg(title, cat, seed, ratio) {
  const palettes = {
    residential: ['#1565C0','#0d3f78'],
    commercial: ['#8a8a8a','#2a2a2a'],
    industrial: ['#E8A33D','#3a2a10']
  };
  const [c1,c2] = palettes[cat];
  return `<svg class="thumb" viewBox="0 0 400 ${Math.round(400/ (ratio||1))}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="g${seed}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g${seed})"/>
    <g opacity="0.25" stroke="#fff" stroke-width="2">
      ${Array.from({length:6}).map((_,i)=>`<line x1="${i*70}" y1="0" x2="${i*70+40}" y2="400" />`).join('')}
    </g>
  </svg>`;
}

// ============ RENDER: SERVICES ============
const servicesGrid = document.getElementById('servicesGrid');
services.forEach((s, i) => {
  const card = document.createElement('div');
  card.className = 'service-card reveal';
  card.innerHTML = `
    <div class="service-icon">${icons[i % icons.length]}</div>
    <h3>${s.name}</h3>
    <p>${s.desc}</p>
    <ul class="service-features">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
    <a href="#contact" class="btn btn-outline">Request Quote</a>
  `;
  servicesGrid.appendChild(card);
});

// ============ RENDER: WHY US ============
const whyGrid = document.getElementById('whyGrid');
whyUs.forEach(item => {
  const card = document.createElement('div');
  card.className = 'why-card reveal';
  card.innerHTML = `<div class="check">✔</div><p>${item}</p>`;
  whyGrid.appendChild(card);
});

// ============ RENDER: PROJECTS ============
// Drop your own photos into the images/ folder using these exact filenames
// (e.g. images/skyline-residence.jpg) and they'll replace the placeholder
// graphics automatically. Until a photo exists, a generated placeholder shows.
function svgDataUri(svgString) {
  return 'data:image/svg+xml,' + encodeURIComponent(svgString);
}
const masonryGrid = document.getElementById('masonryGrid');
projects.forEach((p, i) => {
  const item = document.createElement('div');
  item.className = 'masonry-item reveal';
  item.dataset.cat = p.cat;
  item.style.setProperty('--ratio', p.ratio);
  const placeholder = svgDataUri(projectSvg(p.title, p.cat, i, p.ratio));
  item.innerHTML = `
    <img class="thumb" src="images/${p.slug}.jpg" alt="${p.title}" loading="lazy"
      style="aspect-ratio:${p.ratio}; object-fit:cover;"
      onerror="this.onerror=null;this.src='${placeholder}';">
    <div class="overlay"><h4>${p.title}</h4><span>${p.cat.toUpperCase()}</span></div>
  `;
  item.addEventListener('click', () => openLightbox(p, i));
  masonryGrid.appendChild(item);
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.masonry-item').forEach(el => {
      el.classList.toggle('hidden', f !== 'all' && el.dataset.cat !== f);
    });
  });
});

// ============ LIGHTBOX ============
const lightbox = document.getElementById('lightbox');
const lightboxBody = document.getElementById('lightboxBody');
function openLightbox(p, i) {
  lightboxBody.innerHTML = `${projectSvg(p.title, p.cat, 'lb' + i, 0.6)}<div style="padding:20px 0;color:#fff"><h3 style="font-family:'Syne',sans-serif">${p.title}</h3><p style="color:#aaa;font-size:14px">${p.cat.charAt(0).toUpperCase()+p.cat.slice(1)} project — before &amp; after photos and full details available on request.</p></div>`;
  lightbox.classList.add('open');
}
document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });

// ============ RENDER: TESTIMONIALS ============
const slider = document.getElementById('testimonialSlider');
testimonials.forEach((t, i) => {
  const card = document.createElement('div');
  card.className = 'testimonial-card' + (i === 0 ? ' active' : '');
  card.innerHTML = `<div class="stars">★★★★★</div><p class="quote">"${t.quote}"</p><p class="testimonial-author">${t.author}</p>`;
  slider.appendChild(card);
});
let tIndex = 0;
setInterval(() => {
  const cards = slider.querySelectorAll('.testimonial-card');
  cards[tIndex].classList.remove('active');
  tIndex = (tIndex + 1) % cards.length;
  cards[tIndex].classList.add('active');
}, 5000);

// ============ RENDER: FAQ ============
const accordion = document.getElementById('accordion');
faqs.forEach((f, i) => {
  const item = document.createElement('div');
  item.className = 'acc-item reveal';
  item.innerHTML = `
    <button class="acc-q">${f.q}<span class="plus">+</span></button>
    <div class="acc-a"><p>${f.a}</p></div>
  `;
  const q = item.querySelector('.acc-q');
  const a = item.querySelector('.acc-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    accordion.querySelectorAll('.acc-item').forEach(el => { el.classList.remove('open'); el.querySelector('.acc-a').style.maxHeight = null; });
    if (!isOpen) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
  });
  accordion.appendChild(item);
});

// ============ NAV: scroll state + burger ============
const nav = document.getElementById('nav');
const navBurger = document.getElementById('navBurger');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 600);
}, { passive: true });

navBurger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navBurger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// ============ THEME TOGGLE ============
const themeToggle = document.getElementById('themeToggle');
const savedTheme = null; // no localStorage per artifact constraints; session-only via JS variable
let currentTheme = 'dark';
themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme === 'light' ? 'light' : '');
});

// ============ BACK TO TOP ============
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ============ ANIMATED COUNTERS ============
const statNums = document.querySelectorAll('.stat-num');
let countersStarted = false;
function animateCounters() {
  if (countersStarted) return;
  countersStarted = true;
  statNums.forEach(el => {
    const target = el.dataset.target;
    const suffix = el.dataset.suffix || '';
    if (isNaN(target)) { el.textContent = target; return; }
    const targetNum = parseInt(target, 10);
    let cur = 0;
    const step = Math.max(1, Math.round(targetNum / 40));
    const tick = () => {
      cur += step;
      if (cur >= targetNum) { el.textContent = targetNum + suffix; return; }
      el.textContent = cur + suffix;
      requestAnimationFrame(tick);
    };
    tick();
  });
}

// ============ SCROLL REVEAL ============
const revealEls = () => document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      if (entry.target.closest('.hero-stats')) animateCounters();
    }
  });
}, { threshold: 0.15 });
// Observe once DOM (including dynamically injected cards) is ready
setTimeout(() => revealEls().forEach(el => io.observe(el)), 0);

// ============ CONTACT FORM ============
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
contactForm.addEventListener('submit', (e) => {
  // Uses Formspree endpoint set in the form's action attribute — replace YOUR_FORM_ID with your real Formspree ID.
  if (contactForm.action.includes('YOUR_FORM_ID')) {
    e.preventDefault();
    formNote.textContent = 'Form is not yet connected — replace YOUR_FORM_ID in index.html with your Formspree form ID.';
  } else {
    formNote.textContent = 'Sending...';
  }
});

// ============ FOOTER YEAR ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ LOADER CLEANUP ============
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').remove(), 1300);
});
