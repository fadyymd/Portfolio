/* ============================================
   FADI MEDKOUR — Portfolio JS
   Lightweight · No dependencies
   ============================================ */

(function(){
  'use strict';

  /* ---- Cursor Glow ---- */
  const glow = document.getElementById('cglow');
  if(glow && window.innerWidth > 768){
    let rx = 0, ry = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', e=>{ tx = e.clientX; ty = e.clientY; });
    (function tick(){
      rx += (tx - rx) * .1;
      ry += (ty - ry) * .1;
      glow.style.left = rx + 'px';
      glow.style.top  = ry + 'px';
      requestAnimationFrame(tick);
    })();
  } else if(glow){
    glow.remove();
  }

  /* ---- Navbar ---- */
  const nav = document.getElementById('nav');
  let lastY = 0;
  window.addEventListener('scroll', ()=>{
    const y = window.scrollY;
    nav.classList.toggle('up', y > 60);
    lastY = y;
  }, { passive: true });

  /* ---- Mobile Burger ---- */
  const burger = document.getElementById('burger');
  const menu   = document.getElementById('navMenu');
  if(burger && menu){
    burger.addEventListener('click', ()=>{
      const open = menu.classList.toggle('open');
      const sp   = burger.querySelectorAll('span');
      sp[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
      sp[1].style.opacity   = open ? '0' : '';
      sp[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
      menu.classList.remove('open');
      burger.querySelectorAll('span').forEach(s=>{ s.style.transform=''; s.style.opacity=''; });
    }));
  }

  /* ---- Scroll Reveal ---- */
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('on'); obs.unobserve(e.target); }
    });
  },{ threshold:.1, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));

  /* ---- Typing Effect ---- */
  const roleEl = document.getElementById('typeRole');
  if(roleEl){
    const words = ['Full Stack Dev', 'React Engineer', 'Backend Builder', 'UI Craftsman'];
    let wi=0, ci=0, del=false;
    const type = ()=>{
      const w = words[wi];
      roleEl.textContent = del ? w.slice(0,--ci) : w.slice(0,++ci);
      if(!del && ci === w.length){ del=true; setTimeout(type, 1600); return; }
      if(del && ci === 0){ del=false; wi=(wi+1)%words.length; }
      setTimeout(type, del ? 55 : 85);
    };
    type();
  }

  /* ---- Animated Counters ---- */
  const counterObs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      e.target.querySelectorAll('.n[data-c]').forEach(el=>{
        const target = +el.dataset.c;
        let n = 0;
        const step = target / 40;
        const t = setInterval(()=>{
          n = Math.min(n + step, target);
          el.textContent = Math.floor(n) + '+';
          if(n >= target) clearInterval(t);
        }, 30);
      });
      counterObs.unobserve(e.target);
    });
  },{ threshold:.6 });
  const statsEl = document.querySelector('.fc-stats');
  if(statsEl) counterObs.observe(statsEl);

  /* ---- Active Nav on Scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.nav-menu a[href^="#"]');
  window.addEventListener('scroll', ()=>{
    let cur = '';
    sections.forEach(s=>{ if(window.scrollY >= s.offsetTop - 90) cur = s.id; });
    navAs.forEach(a=>{ a.style.color = a.getAttribute('href') === '#'+cur ? 'var(--t1)' : ''; });
  },{ passive:true });

  /* ---- Contact Form ---- */
  const form = document.getElementById('cform');
  const btn  = document.getElementById('fsub');
  if(form && btn){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      btn.innerHTML = '✅ Message Sent!';
      btn.style.background = '#22c55e';
      btn.disabled = true;
      setTimeout(()=>{
        btn.innerHTML = '<svg viewBox="0 0 24 24" style="width:17px;height:17px;stroke:#fff;fill:none;stroke-width:2.2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message';
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

})();
