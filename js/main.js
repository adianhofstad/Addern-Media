// ===== TEAM DATA =====
const team = [
  { name: 'Legg til navn', role: 'Hovedanker', bio: 'Leder Addern Medias nyhetssendinger med autoritet og karisma. Alltid først med det siste.', image: null },
  { name: 'Legg til navn', role: 'Sportsreporter', bio: 'Dekker alt fra fotball til kampsport. Har aldri gått glipp av en stor idrettsbegivenhet.', image: null },
  { name: 'Legg til navn', role: 'Kulturjournalist', bio: 'Ekspert på kunst, musikk og underholdning. Finner historiene ingen andre ser.', image: null },
  { name: 'Legg til navn', role: 'Økonomianalytiker', bio: 'Gjør kompleks økonomi forståelig for alle. Kjent for sine treffsikre prognoser.', image: null },
  { name: 'Legg til navn', role: 'Utenrikskorrespondent', bio: 'Rapporterer fra verdens brennpunkter. Har dekket konflikter på tre kontinenter.', image: null },
  { name: 'Legg til navn', role: 'Teknologiredaktør', bio: 'Følger tech-bransjen tettere enn noen. Fra AI til krypto — hun har oversikten.', image: null },
  { name: 'Legg til navn', role: 'Feltreporter', bio: 'Alltid der det skjer. Kjent for å stille de vanskelige spørsmålene.', image: null },
  { name: 'Legg til navn', role: 'Nyhetssjef', bio: 'Styrer redaksjonen med jernhånd og godt humør. Hjernen bak sendeskjemaet.', image: null }
];

// ===== GRADIENT MAP =====
const gradients = [
  'linear-gradient(135deg, #1a1a2e, #16213e)',
  'linear-gradient(135deg, #2d6a4f, #40916c)',
  'linear-gradient(135deg, #e63946, #c1121f)',
  'linear-gradient(135deg, #457b9d, #1d3557)',
  'linear-gradient(135deg, #f4a261, #e76f51)',
  'linear-gradient(135deg, #6c63ff, #3f37c9)',
  'linear-gradient(135deg, #2b2d42, #8d99ae)',
  'linear-gradient(135deg, #003049, #669bbc)',
  'linear-gradient(135deg, #d4a373, #bc6c25)',
  'linear-gradient(135deg, #1a1a2e, #4a1942)',
  'linear-gradient(135deg, #1b3a2d, #2d5a3f)'
];

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  renderHeroGrid();
  renderNewsCards();
  renderTeam();
  initHamburger();
  initScrollAnimations();
  initClock();
});

// ===== LIVE CLOCK =====
function initClock() {
  const el = document.getElementById('nav-clock');
  if (!el) return;
  function update() {
    const now = new Date();
    el.textContent = now.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' });
  }
  update();
  setInterval(update, 10000);
}

// ===== RENDER HERO GRID =====
function renderHeroGrid() {
  const grid = document.getElementById('hero-grid');
  if (!grid) return;

  // Main hero = Luke (breaking), side heroes = other recent stories
  const main = articles[0]; // Luke article (id 10)
  const side1 = articles[1]; // Aksjeakademiet
  const side2 = articles[2]; // Minh kampsport

  function heroImageStyle(a, idx) {
    if (a.image) return `background: url('${a.image}') center/100% 100% no-repeat`;
    return `background: ${gradients[(idx) % gradients.length]}`;
  }

  grid.innerHTML = `
    <a href="artikkel.html?id=${main.id}" class="hero-card hero-card--main">
      <div class="hero-image" style="${heroImageStyle(main, main.id - 1)}"></div>
      <div class="hero-content">
        <div class="badge">SISTE NYTT</div>
        <h1>${main.title}</h1>
        <p class="ingress">${main.excerpt}</p>
        <div class="hero-meta">
          <span>${main.date}</span>
          <span class="dot"></span>
          <span>${main.author}</span>
        </div>
      </div>
    </a>
    <a href="artikkel.html?id=${side1.id}" class="hero-card hero-card--side">
      <div class="hero-image" style="${heroImageStyle(side1, side1.id - 1)}"></div>
      <div class="hero-content">
        <div class="badge">${side1.category}</div>
        <h1>${side1.title}</h1>
        <div class="hero-meta">
          <span>${side1.date}</span>
        </div>
      </div>
    </a>
    <a href="artikkel.html?id=${side2.id}" class="hero-card hero-card--side">
      <div class="hero-image" style="${heroImageStyle(side2, side2.id - 1)}"></div>
      <div class="hero-content">
        <div class="badge">${side2.category}</div>
        <h1>${side2.title}</h1>
        <div class="hero-meta">
          <span>${side2.date}</span>
        </div>
      </div>
    </a>
  `;
}

// ===== RENDER NEWS CARDS =====
function renderNewsCards() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;

  // Skip articles shown in hero
  const heroIds = [articles[0].id, articles[1].id, articles[2].id];
  const remaining = articles.filter(a => !heroIds.includes(a.id));

  grid.innerHTML = remaining.map((a, i) => `
    <a href="artikkel.html?id=${a.id}" class="news-card fade-in" style="transition-delay: ${i * 0.06}s">
      <div class="news-card-image" style="background: ${gradients[(a.id - 1) % gradients.length]}">
        ${a.image ? `<img src="${a.image}" alt="${a.title}">` : ''}
        <span class="category-badge">${a.category}</span>
      </div>
      <div class="news-card-body">
        <h3>${a.title}</h3>
        <p class="excerpt">${a.excerpt}</p>
        <div class="news-card-meta">
          <span>${a.date}</span>
          <span class="read-more">Les mer →</span>
        </div>
      </div>
    </a>
  `).join('');
}

// ===== RENDER TEAM =====
function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;

  grid.innerHTML = team.map((t, i) => `
    <div class="team-card fade-in" style="transition-delay: ${i * 0.08}s">
      <div class="team-avatar">
        ${t.image
          ? `<img src="${t.image}" alt="${t.name}">`
          : `<div class="placeholder-icon">👤</div>`
        }
      </div>
      <h3>${t.name}</h3>
      <p class="role">${t.role}</p>
      <p class="bio">${t.bio}</p>
    </div>
  `).join('');
}

// ===== HAMBURGER MENU =====
function initHamburger() {
  const btn = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    links.classList.toggle('active');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('active');
      links.classList.remove('active');
    });
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, 100);
}
