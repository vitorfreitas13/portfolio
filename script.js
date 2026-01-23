document.addEventListener('DOMContentLoaded', () => {
  // =======================
  // BOTTOM NAV SCROLL
  // =======================
  const bottomLinks = document.querySelectorAll('.bottom-nav a');
  const sections = document.querySelectorAll('main section');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach(sec => {
      const id = sec.getAttribute('id');
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        bottomLinks.forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`.bottom-nav a[href="#${id}"]`);
        if (link) link.classList.add('active');
      }
    });
  });

  // EFEITO DE PULSE NOS LINKS
  bottomLinks.forEach(link => {
    link.addEventListener('mouseenter', () => link.style.transform = 'translateY(-5px)');
    link.addEventListener('mouseleave', () => link.style.transform = 'translateY(0)');
  });

  // =======================
  // ANIMAÇÃO SEÇÕES (FADE IN)
  // =======================
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aparece');

        // Cascata: animação dos filhos
        const children = entry.target.children;
        Array.from(children).forEach((child, i) => {
          child.style.transition = `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`;
          child.style.opacity = 1;
          child.style.transform = 'translateY(0)';
        });
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => {
    Array.from(sec.children).forEach(child => {
      child.style.opacity = 0;
      child.style.transform = 'translateY(20px)';
    });
    observer.observe(sec);
  });

  // =======================
  // ANIMAÇÃO PROJETOS (ZOOM)
  // =======================
  const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'scale(1)';
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.projeto').forEach(proj => {
    proj.style.transform = 'scale(0.9)';
    proj.style.opacity = '0';
    proj.style.transition = 'all 0.5s ease';
    projectObserver.observe(proj);
  });

});
