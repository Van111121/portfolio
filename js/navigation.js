    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const closeBtn = document.querySelector('.menu .close-btn');

    hamburger.addEventListener('click', () => menu.classList.add('active'));
    closeBtn.addEventListener('click', () => menu.classList.remove('active'));





     const elements = document.querySelectorAll('.text')
     elements.forEach((element) => {
         const innerText = element.innerText;
         element.innerHTML = ''
         const textContainer = document.createElement('div');
         textContainer.classList.add('block')
         innerText.split('').forEach((letter) => {
             const span = document.createElement('span');
             span.innerText = letter.trim() === '' ? '\xa0' : letter;
             span.classList.add('letter');
             textContainer.appendChild(span);
         })
         element.appendChild(textContainer);
         element.appendChild(textContainer.cloneNode(true));
     });
       
