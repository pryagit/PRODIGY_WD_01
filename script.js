
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.nav-item');
  
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
  

      if (rect.top <= 50 && rect.bottom >= 50) {

        navbar.className = `navbar ${section.id}`;
  

        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href').substring(1) === section.id) {
            item.classList.add('active');
          }
        });
      }
    });
  });
  

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {

      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
  

      item.classList.add('active');
    });
  });
  