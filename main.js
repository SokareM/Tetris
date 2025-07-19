nav = document.getElementById("navbar");
togglemenu = document.getElementById("menu-toggle");

togglemenu.addEventListener("click", function(e) {
     e.stopPropagation();
    nav.classList.toggle("show");
});


  document.addEventListener('click', () => {
    nav.classList.remove('show');

  });

    const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('#gal img');

images.forEach(img => {
  img.addEventListener('click', e => {
    e.stopPropagation();
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    document.body.classList.add('noscroll');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
  document.body.classList.remove('noscroll');
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
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
  document.body.classList.remove('noscroll');
})