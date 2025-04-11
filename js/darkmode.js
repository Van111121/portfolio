// const themeIcon = document.getElementById('theme-icon');
// const body = document.body;

// // Toggle dark mode and switch logos
// themeIcon.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
    
//     // Switch logos based on the mode
//     if (body.classList.contains('dark-mode')) {
//         themeIcon.src = '/images/logo/Darkmode.svg'; // Path to dark mode logo
//     } else {
//         themeIcon.src = '/images/logo/Lightmode.svg'; // Path to light mode logo
//     }
// });


   // Dark Mode Toggle
   const themeIcon = document.getElementById('theme-icon');
   themeIcon.addEventListener('click', () => {
     document.body.classList.toggle('dark-mode');
     themeIcon.src = document.body.classList.contains('dark-mode')
       ? './images/darkmode.svg'
       : './images/lightmode.svg';


   });

