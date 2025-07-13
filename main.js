nav = document.getElementById("navbar");
togglemenu = document.getElementById("menu-toggle");

togglemenu.addEventListener("click", function(e) {
     e.stopPropagation();
    nav.classList.toggle("show");
});


  document.addEventListener('click', () => {
    nav.classList.remove('show');

  });
  const images = document.querySelectorAll('#gal img');
  const overlay = document.querySelector('.overlay');
  const body = document.body;
  images.forEach(img => {
    img.addEventListener('click', () => {
      event.stopPropagation()
      img.classList.toggle('enlarged');
      img.classList.toggle('zind');
      overlay.classList.toggle('show');
      body.classList.toggle('noscroll');
       const scrollY = window.scrollY;
            img.style.top = (scrollY + 30) + 'px';
            
    });
  });
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const header = document.querySelector('header');
    const bh1 =document.getElementById('mainTitle');
    const scrollY =window.scrollY;
    const bannerh = document.getElementById('banner').offsetHeight;
    if(scrollY >bannerh)
    {
     bh1.classList.add('show');
      header.classList.add('headerbg');
      nav.classList.add('headerbg');
    }
    else
    {
      bh1.classList.remove('show');
      header.classList.remove('headerbg');
      nav.classList.remove('headerbg');
    }
  });