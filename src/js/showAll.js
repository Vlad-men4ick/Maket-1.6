export const showAll = () => {
    const moreBtns = document.querySelectorAll('.show-all');
    moreBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
        const showAttr = btn.getAttribute('data-show');
        const showElement = document.querySelector(`.${showAttr}`);

        if (showElement.classList.contains(`${showAttr}--active`)) {
            showElement.classList.remove(`${showAttr}--active`);

            if (showElement.classList.contains('page-top__subtitle-item')) {
            btn.querySelector('.show-all__text').textContent = 'Читать далее';
            } else {
            btn.querySelector('.show-all__text').textContent = 'Показать все';
            }
            btn.querySelector('.show-all__arrow').style.rotate = '0deg';
        } else {
            showElement.classList.add(`${showAttr}--active`);
            btn.querySelector('.show-all__text').textContent = 'Скрыть';
            btn.querySelector('.show-all__arrow').style.rotate = '180deg';
        }
        });
    });
    }
