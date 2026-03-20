// ===== ARTICLES DATA =====
const articles = [
  {
    id: 1,
    category: 'Økonomi',
    title: 'SISTE: Aksjeakademiet passerer 100 000 brukere',
    excerpt: 'Den populære plattformen for aksjehandel har nådd en historisk milepæl.',
    date: '20. mars 2026',
    author: 'Addern Media',
    body: `Aksjeakademiet, Norges ledende plattform for opplæring innen aksjehandel og investering, har i dag passert 100 000 registrerte brukere.

Grunnleggerne bak plattformen beskriver veksten som "helt vill" og peker på den økende interessen blant unge nordmenn for personlig økonomi og investering.

"Vi startet dette som et hobbyprosjekt, og nå er vi blitt en av de mest brukte læringsplattformene i Norden," sier talspersonen for Aksjeakademiet.

Plattformen tilbyr alt fra grunnleggende kurs i aksjehandel til avanserte strategier for teknisk analyse, og har blitt spesielt populær blant studenter og unge yrkesaktive.`
  },
  {
    id: 2,
    category: 'Sport',
    title: 'Minh Kampsport-utøver vinner nordisk mesterskap',
    excerpt: 'Historisk seier i kampsport-NM etter en dramatisk finale i Stockholm.',
    date: '19. mars 2026',
    author: 'Addern Media',
    body: `I en dramatisk finale i Stockholm Arena har den norske kampsport-utøveren sikret seg gull i nordisk mesterskap.

Finalen gikk over fem runder og ble avgjort på poeng etter en intens kamp mot den svenske favoritten. Den norske utøveren viste overlegen teknikk og utholdenhet gjennom hele turneringen.

"Dette er resultatet av årevis med hardt arbeid og dedikasjon. Jeg er utrolig stolt over å kunne representere Norge på denne måten," sa den ferske nordiske mesteren etter kampen.

Treneren beskriver prestasjonen som "den mest imponerende vi har sett fra en norsk utøver i denne vektklassen på over ti år."`
  },
  {
    id: 3,
    category: 'Næringsliv',
    title: 'Fagermoen Express åpner ny rute til Asia',
    excerpt: 'Transportgiganten ekspanderer østover med direkterute til Singapore.',
    date: '18. mars 2026',
    author: 'Addern Media',
    body: `Fagermoen Express, et av Norges mest ambisiøse transportselskaper, kunngjorde i dag åpningen av en ny direkterute til Singapore.

Ruten vil operere tre ganger i uken fra Gardermoen og markerer selskapets første satsing i det asiatiske markedet.

"Asia er fremtiden for internasjonal handel, og vi ønsker å være med på den reisen," uttaler administrerende direktør i Fagermoen Express.

Selskapet planlegger å utvide til ytterligere destinasjoner i regionen innen utgangen av 2026, inkludert Bangkok og Kuala Lumpur.`
  },
  {
    id: 4,
    category: 'Kultur',
    title: 'Kronstad Jewelry lanserer verdens største diamant',
    excerpt: 'Smykkeimperiet avduker en 847-karats diamant til en verdi av 2,3 milliarder.',
    date: '17. mars 2026',
    author: 'Addern Media',
    body: `Kronstad Jewelry har avduket det de kaller "Nordlyset" — en enorm 847-karats diamant som er vurdert til hele 2,3 milliarder norske kroner.

Diamanten ble funnet i en gruve i Botswana og har tatt over to år å slipe til perfeksjon. Den vil bli stilt ut i selskapets flaggskipbutikk i Oslo sentrum.

"Dette er en gang-i-livet-oppdagelse. 'Nordlyset' representerer det ypperste innen edelsteinskunst," sier grunnleggeren av Kronstad Jewelry.

Sikkerhetstiltakene rundt utstillingen beskrives som "på nivå med et statsbesøk," med døgnkontinuerlig vakthold og avanserte alarmsystemer.`
  },
  {
    id: 5,
    category: 'Økonomi',
    title: 'SH Sparebank innfører null-gebyr for alle under 25',
    excerpt: 'Banken satser stort på unge kunder med revolusjonerende gebyrmodell.',
    date: '16. mars 2026',
    author: 'Addern Media',
    body: `SH Sparebank gjør et historisk grep og fjerner alle gebyrer for kunder under 25 år. Tiltaket inkluderer gratis kort, gratis overføringer og null etableringsgebyr på lån.

"Unge mennesker fortjener en rettferdig start på sitt økonomiske liv. Vi tror dette vil revolusjonere hvordan banker behandler sine yngste kunder," sier banksjef i SH Sparebank.

Analytikere spår at tiltaket vil tiltrekke seg over 50 000 nye kunder i løpet av det første året. Flere konkurrenter har allerede signalisert at de vurderer lignende tiltak.

Banken finansierer satsingen gjennom økt digitalisering og reduserte driftskostnader på sine fysiske filialer.`
  },
  {
    id: 6,
    category: 'Politikk',
    title: 'Tavares Industries signerer NATO-kontrakt verdt 200M',
    excerpt: 'Forsvarsgiganten sikrer sin største kontrakt noensinne med NATO-alliansen.',
    date: '15. mars 2026',
    author: 'Addern Media',
    body: `Tavares Industries har signert en historisk kontrakt med NATO til en verdi av 200 millioner euro. Kontrakten dekker leveranse av avansert kommunikasjonsutstyr til alliansens nordlige flanke.

"Dette er et enormt tillitsvotum fra NATO og bekrefter vår posisjon som en ledende aktør innen forsvarsteknologi," uttaler konsernsjef i Tavares Industries.

Kontrakten vil skape over 300 nye arbeidsplasser i Norge og sikre selskapets produksjonslinjer for de neste fem årene.

Forsvarsministeren gratulerer selskapet og kaller kontrakten "et bevis på at norsk teknologi holder verdensklasse."`
  },
  {
    id: 7,
    category: 'Tech',
    title: 'Addern Media lanserer ny strømmetjeneste',
    excerpt: 'Mediehuset utvider porteføljen med en helt ny digital plattform for nyheter.',
    date: '14. mars 2026',
    author: 'Addern Media',
    body: `Addern Media kunngjorde i dag lanseringen av "Addern+", en ny strømmetjeneste dedikert til nyheter, dokumentarer og investigativ journalistikk.

Tjenesten vil tilby både live-sendinger og on-demand-innhold, med fokus på dyptgående reportasjer og eksklusive intervjuer.

"Vi ser at publikum ønsker mer enn bare overskrifter. Med Addern+ gir vi dem muligheten til å dykke dypere inn i sakene som betyr noe," forklarer redaktøren.

Lanseringen er planlagt til sommeren 2026, med en introduksjonspris på 49 kroner i måneden.`
  },
  {
    id: 8,
    category: 'Sport',
    title: 'Ny rekord i Bergen City Marathon',
    excerpt: 'Over 15 000 deltakere stilte til start i årets utgave av byens største løp.',
    date: '13. mars 2026',
    author: 'Addern Media',
    body: `Bergen City Marathon satte ny deltakerrekord med over 15 000 påmeldte løpere i årets utgave.

Vinneren av herreklassen fullførte på imponerende 2 timer og 18 minutter, mens kvinneklassen ble vunnet på 2 timer og 34 minutter — begge løyperekorder.

"Bergen viser nok en gang at vi er en av Nordens fremste løpebyer. Stemningen langs ruten var helt elektrisk," sier arrangøren.

Løpet gikk gjennom byens mest ikoniske gater, fra Bryggen til Fløyen, og tiltrakk seg deltakere fra over 40 land.`
  }
];

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

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  renderNewsCards();
  renderTeam();
  initHamburger();
  initScrollAnimations();
  initModal();
});

// ===== RENDER NEWS CARDS =====
function renderNewsCards() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;

  grid.innerHTML = articles.map((a, i) => `
    <article class="news-card fade-in" data-article-id="${a.id}" style="transition-delay: ${i * 0.08}s">
      <div class="news-card-image">
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
    </article>
  `).join('');
}

// ===== RENDER TEAM =====
function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;

  grid.innerHTML = team.map((t, i) => `
    <div class="team-card fade-in" style="transition-delay: ${i * 0.1}s">
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

  // Close on link click
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

  // Observe after a small delay to ensure DOM is rendered
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, 100);
}

// ===== MODAL =====
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  // Open modal on card click
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.news-card');
    if (!card) return;

    const id = parseInt(card.dataset.articleId);
    const article = articles.find(a => a.id === id);
    if (!article) return;

    openModal(article);
  });

  // Also open on hero click
  const heroCard = document.querySelector('.hero-card');
  if (heroCard) {
    heroCard.addEventListener('click', () => {
      openModal(articles[0]);
    });
  }

  // Close modal
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.closest('.modal-close')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(article) {
  const overlay = document.getElementById('modal-overlay');
  const modal = overlay.querySelector('.modal');

  modal.innerHTML = `
    <div class="modal-header-image">
      <button class="modal-close">✕</button>
    </div>
    <div class="modal-body">
      <span class="category-badge">${article.category}</span>
      <h2>${article.title}</h2>
      <div class="modal-meta">${article.date} — ${article.author}</div>
      <div class="article-text">
        ${article.body.split('\n\n').map(p => `<p>${p}</p>`).join('')}
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}
