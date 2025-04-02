document.addEventListener('DOMContentLoaded', () => {
  // Theme Management
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    return savedTheme;
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Initialize theme
  initTheme();

  // Theme toggle button
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', toggleTheme);

  // Data
  const featuredLinks = [
    { title: 'ISCSI', image: 'images/ISCSI.png', description: 'Ingénierie des Systèmes Communicants et Sécurité Informatique.', link: 'https://b212m.github.io/ISCSI/' },
    { title: '3IACN', image: 'images/3IACN.png', description: 'Ingénierie Informatique, Intelligence Artificielle et Confiance Numérique.', link: 'https://b212m.github.io/3IACN/' },
    { title: 'GDNC v1', image: 'images/GDNC.png', description: 'Génie du développement numérique et Cybersécurité.', link: 'https://b212m.github.io/GDNC/' },
    { title: 'GDNC v2', image: 'images/GDNC.png', description: 'Génie du développement numérique et Cybersécurité.', link: ' https://zaikoss.github.io/gdnc-react/' },
    { title: 'ISDIA', image: 'images/ISDIA.png', description: 'Ingénierie en Science de Données et Intelligence Artificielle.', link: 'https://b212m.github.io/ISDIA/' },
    { title: 'GI', image: 'images/GI.jpeg', description: 'Génie Informatique.', link: 'https://zaikoss.github.io/GI-ENSAF-WEBSITE/#home' }
  ];

  const pdfLinks = [
    { title: 'Ingénierie des Systèmes Communicants et Sécurité Informatique (ISCSI)', url: 'https://docs.ensaf.ac.ma/home/fil/ISCSN.pdf' },
    { title: 'Ingénierie Informatique, Intelligence Artificielle et Confiance Numérique (3IACN)', url: 'https://docs.ensaf.ac.ma/home/fil/3IACN.pdf' },
    { title: 'Ingénierie des Systèmes Embarqués et Intelligence Artificielle (ISEIA)', url: 'https://docs.ensaf.ac.ma/home/fil/ISEIA.pdf' },
    { title: 'Ingénierie Logicielle et Intelligence Artificielle (ILIA)', url: 'https://docs.ensaf.ac.ma/home/fil/ILIAV2.pdf' },
    { title: 'Génie du développement numérique et Cybersécurité (GDNC)', url: 'https://docs.ensaf.ac.ma/home/fil/DNC.pdf' },
    { title: 'Ingénierie en Science de Données et Intelligence Artificielle (ISDIA)', url: 'https://docs.ensaf.ac.ma/home/fil/ISDIAV3.pdf' },
    { title: 'Génie Informatique', url: 'https://docs.ensaf.ac.ma/home/fil/INFO.pdf' },
    { title: 'Génie Mécanique', url: 'https://docs.ensaf.ac.ma/home/fil/GM.pdf' },
    { title: 'Génie Energétique et systèmes intelligents (GESI)', url: 'https://docs.ensaf.ac.ma/home/fil/GESI.pdf' },
    { title: 'Génie Mécatronique', url: 'https://docs.ensaf.ac.ma/home/fil/GMT.pdf' },
    { title: 'Génie Industriel', url: 'https://docs.ensaf.ac.ma/home/fil/gind.pdf' }
  ];

  const partners = [
    {
      name: 'Ouadifi Zakaria',
      role: 'GDNC Legend',
      description: 'Trying to make ur life easy and BETTER',
      email: 'marie.laurent@example.com',
      whatsapp: '+16099446992'
    },
    {
      name: 'Squelli Hachem',
      role: 'ILIA Legend',
      description: 'Trying to make ur life easy and BETTER',
      email: 'thomas.bernard@example.com',
      whatsapp: '+33600000001'
    },
    {
      name: 'Lbien Bilal',
      role: 'GDNC Legend',
      description: 'Trying to make ur life easy and BETTER',
      email: 'lbienbilal1@gmail.com',
      whatsapp: '+212720174280'
    }
  ];

  // Render flowing cards
  const flowingCardsContainer = document.getElementById('flowingCards');
  featuredLinks.forEach(link => {
    const card = document.createElement('a');
    card.href = link.link;
    card.className = 'flowing-card';
    card.style.backgroundImage = `url(${link.image})`;
    card.target = '_blank';
    
    card.innerHTML = `
      <div class="flowing-card-overlay">
        <div class="flowing-card-content">
          <h3>${link.title}</h3>
          <p class="card-description">${link.description}</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    `;

    flowingCardsContainer.appendChild(card);
  });

  // Render partners
  const partnersContainer = document.getElementById('partners');
  partners.forEach(partner => {
    const card = document.createElement('div');
    card.className = 'partner-card';
    
    card.innerHTML = `
      <h3>${partner.name}</h3>
      <p class="role">${partner.role}</p>
      <p class="description">${partner.description}</p>
      <div class="social-links">
        <a href="mailto:${partner.email}" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
        <a href="https://wa.me/${partner.whatsapp}" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </div>
    `;
    
    partnersContainer.appendChild(card);
  });

  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    window.location.href = `mailto:contact@example.com?subject=Contact from ENSAF Website&body=${encodeURIComponent(message)}`;
  });

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    // Search in feature cards
    const featureCards = document.querySelectorAll('.card');
    featureCards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = 'block';
        if (searchTerm !== '') {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        card.style.display = 'none';
      }
    });

    // Search in flowing cards
    const flowingCards = document.querySelectorAll('.flowing-card');
    flowingCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        card.style.display = 'block';
        if (searchTerm !== '' && !document.querySelector('.card:not([style*="display: none"])')) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        card.style.display = 'none';
      }
    });
  });

  // PDF Modal functionality
  const pdfButton = document.getElementById('pdfButton');
  const pdfModal = document.getElementById('pdfModal');
  const pdfList = document.querySelector('.pdf-list');
  const closeButton = document.querySelector('.close-button');

  // Populate PDF list
  pdfLinks.forEach(pdf => {
    const link = document.createElement('a');
    link.href = pdf.url;
    link.target = '_blank';
    link.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="12" y1="18" x2="12" y2="12"></line>
        <line x1="9" y1="15" x2="15" y2="15"></line>
      </svg>
      ${pdf.title}
    `;
    pdfList.appendChild(link);
  });

  // Toggle modal
  pdfButton.addEventListener('click', () => {
    pdfModal.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    pdfModal.classList.remove('active');
  });

  // Close modal when clicking outside
  pdfModal.addEventListener('click', (e) => {
    if (e.target === pdfModal) {
      pdfModal.classList.remove('active');
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pdfModal.classList.contains('active')) {
      pdfModal.classList.remove('active');
    }
  });
});