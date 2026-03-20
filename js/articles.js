// ===== ARTICLE PAGE LOGIC =====
document.addEventListener('DOMContentLoaded', () => {
  // Get article ID from URL
  const params = new URLSearchParams(window.location.search);
  const articleId = parseInt(params.get('id'));

  // Find the article
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    window.location.href = 'index.html';
    return;
  }

  // Set page title
  document.title = `${article.title} — Addern Media`;

  // Render hero
  const heroEl = document.getElementById('article-hero');
  const cardIndex = article.id - 1;
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

  heroEl.style.background = gradients[cardIndex % gradients.length];

  const heroImg = article.headerImage || article.image;
  if (heroImg) {
    const imgEl = document.createElement('img');
    imgEl.src = heroImg;
    imgEl.alt = article.title;
    imgEl.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:fill;z-index:0;';
    heroEl.insertBefore(imgEl, heroEl.firstChild);
  }

  // Fill content
  document.getElementById('article-category').textContent = article.category;
  document.getElementById('article-title').textContent = article.title;
  document.getElementById('article-date').textContent = article.date;
  document.getElementById('article-author').textContent = article.author;

  // Render body
  document.getElementById('article-body').innerHTML = article.body
    .split('\n\n')
    .map(p => `<p>${p}</p>`)
    .join('');

  // Render related articles (3 random, excluding current)
  const related = articles
    .filter(a => a.id !== articleId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const relatedGrid = document.getElementById('related-grid');
  relatedGrid.innerHTML = related.map((a, i) => `
    <a href="artikkel.html?id=${a.id}" class="news-card fade-in" style="transition-delay: ${i * 0.1}s">
      <div class="news-card-image" style="background: ${a.image ? `url('${a.image}') center/100% 100% no-repeat` : gradients[(a.id - 1) % gradients.length]}">
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

  // Hamburger menu
  const hamburgerBtn = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, 100);
});
