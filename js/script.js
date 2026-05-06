// Animation apparition des sections au scroll
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

// Animation machine à écrire
document.addEventListener('DOMContentLoaded', function() {
  const typewriters = document.querySelectorAll('.typewriter');

  typewriters.forEach(el => {
    if (!el.classList.contains('typed')) {
      el.classList.add('typed');
      const speed = parseInt(el.getAttribute('data-speed')) || 50;
      typeWriter(el, speed);
    }
  });
});

function typeWriter(element, speed = 50) {
  const text = element.textContent;
  element.textContent = '';
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nom = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector('textarea').value;

      if (nom && email && message) {
        alert('Merci ' + nom + '! Votre message a été envoyé avec succès.');
        this.reset();
      } else {
        alert('Veuillez remplir tous les champs.');
      }
    });
  }
});

// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
