/* =========================================
   FADI MEDKOUR - PORTFOLIO JS
   ========================================= */

// ---- Navbar Scroll Effect ----
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- Mobile Nav Toggle ----
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
  // Close on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ---- Scroll Reveal ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  revealObserver.observe(el);
});

// ---- Animated Counter ----
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + '+';
    }
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.number[data-count]');
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        animateCounter(counter, target);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) counterObserver.observe(statsEl);

// ---- Typing Effect for Hero ----
const typingEl = document.querySelector('.typing-text');
if (typingEl) {
  const words = ['Full Stack Developer', 'Frontend Engineer', 'Backend Architect', 'UI/UX Enthusiast'];
  let wIdx = 0, cIdx = 0, isDeleting = false;

  function type() {
    const currentWord = words[wIdx];
    if (!isDeleting) {
      typingEl.textContent = currentWord.substring(0, cIdx + 1);
      cIdx++;
      if (cIdx === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      typingEl.textContent = currentWord.substring(0, cIdx - 1);
      cIdx--;
      if (cIdx === 0) {
        isDeleting = false;
        wIdx = (wIdx + 1) % words.length;
      }
    }
    setTimeout(type, isDeleting ? 60 : 90);
  }
  type();
}

// ---- Smooth Active Nav on Scroll ----
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// ---- Contact Form ----
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.innerHTML = '✅ تم الإرسال!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.innerHTML = '📨 إرسال الرسالة';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// ---- Cursor Glow (Desktop) ----
if (window.innerWidth > 768) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed; width: 300px; height: 300px;
    pointer-events: none; z-index: 0;
    background: radial-gradient(circle, rgba(26,107,255,0.06) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
  `;
  document.body.appendChild(glow);
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

console.log('%c👨‍💻 Fadi Medkour Portfolio', 'color: #1a6bff; font-size: 16px; font-weight: bold;');
console.log('%cSenior Full Stack Developer | Built with ❤️', 'color: #8898b8;');
