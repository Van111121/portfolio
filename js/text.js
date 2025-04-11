function scrollToPage2() {
  const page2 = document.getElementById('page-2');
  page2.scrollIntoView({ behavior: 'smooth' });


  const content = document.querySelector('.page-2-text');
  content.style.animation = 'fadeInUp 1s ease-out forwards';
}