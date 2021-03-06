const white = document.querySelectorAll('.white-selection');
const black = document.querySelectorAll('.black-selection');
const darkMode = document.querySelector('#dark-mode');

darkMode.addEventListener('click', e => {
    if (e.target.checked) {
        for (let i = 0; i < white.length; i++) {
            white[i].classList.remove('white-selection');
            white[i].classList.add('black-selection');
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color : #fafbf9";
            }
        }
        for (let i = 0; i < black.length; i++) {
            black[i].classList.remove('black-selection');
            black[i].classList.add('white-selection');
        }
    } 
    else {
        for (let i = 0; i < white.length; i++) {
            white[i].classList.remove('black-selection');
            white[i].classList.add('white-selection');
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color : #242424";
            }
        }
        for (let i = 0; i < black.length; i++) {
            black[i].classList.remove('white-selection');
            black[i].classList.add('black-selection');
        }
    }
});

