const modal = () => {
    function bindModal(triggerSelector, modalSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              shadow = document.querySelector('.shadow');

        /* Функция: Открытие модального окна */
        function openModal(e) {
            e.addEventListener('click', (btn) => {
                if (btn.targer) {
                    btn.preventDefault();
                }

                modal.classList.add('animated', 'fadeIn');
                shadow.classList.add('animated', 'fadeIn');
                modal.style.display= 'block';
                shadow.style.display = 'block';
                document.body.style.overflow = "hidden";
            });
        }

        /* Функция: Закрытие модального окна */
        function closeModal(e) {
            e.addEventListener('click', function(btn) {
                if (btn.targer) {
                    btn.preventDefault();
                }
                modal.style.display = 'none';
                shadow.style.display = 'none';
                document.body.style.overflow = "";
            });
        }

        /* Открытие окна */
        trigger.forEach(item => {
            openModal(item);
        });

        /* Закрытие нажатием на тёмную область */
        closeModal(shadow);
    }
    
    bindModal('.button__search', '.types');
    bindModal('.menu__phone', '.menu__phone__popup');
    bindModal('.promo-mobile__right__phone', '.promo-mobile__popup');
    

};

export default modal;