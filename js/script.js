const popup = document.querySelectorAll('.popup_Inner'),
      popupTrigger = document.querySelectorAll('[data-form]'),
      popupCloseTrigger = document.querySelectorAll('[data-close]');

const header = document.querySelectorAll('.header'),
      welcome = document.querySelectorAll('#welcome'),
      about = document.querySelectorAll('#about'),
      work = document.querySelectorAll('#work'),
      footer = document.querySelectorAll('#footer');

popupTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(popup)
        popup.forEach(pop => {
            pop.style.opacity = 1;
            pop.style.visibility = 'visible';
            pop.style.display = 'block'
            // pop.classList.add('visible');
        })
        header.forEach(content => {
            content.style.display = 'none';
        })
        welcome.forEach(content => {
            content.style.display = 'none';
        });
        about.forEach(content => {
            content.style.display = 'none';
        });
        work.forEach(content => {
            content.style.display = 'none';
        });
        footer.forEach(content => {
            content.style.display = 'none';
        });
    })
})

popupCloseTrigger.forEach(btn => {
    btn.addEventListener('click', ()=> {
        popup.forEach(pop => {
            pop.style.display = 'none';
        });
        header.forEach(content => {
            content.style.display = 'block';
        })
        welcome.forEach(content => {
            content.style.display = 'block';
        });
        about.forEach(content => {
            content.style.display = 'block';
        });
        work.forEach(content => {
            content.style.display = 'block';
        });
        footer.forEach(content => {
            content.style.display = 'block';
        });
    })
})

// console.log(1)
