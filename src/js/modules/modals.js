const modal = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              shadow = document.querySelector('.shadow');

        /* Функция: Открытие модального окна */
        function openModal(e) {
            e.addEventListener('click', (e) => {
                if (e.targer) {
                    e.preventDefault();
                }

                modal.classList.add('animated', 'fadeIn');
                shadow.classList.add('animated', 'fadeIn');
                modal.style.display= 'block';
                shadow.style.display = 'block';
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        }

        /* Функция: Закрытие модального окна */
        function closeModal(e) {
            e.addEventListener('click', function(e) {
                e.preventDefault();
                modal.style.display = 'none';
                shadow.style.display = 'none';
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            });
        }

        /* Открытие окна */
        trigger.forEach(item => {
            openModal(item);
        });

        /* Закрытие при помощи кнопки */
        try {
            closeModal(close);
        } catch(e) {}

        /* Закрытие нажатием на тёмную область */
        closeModal(shadow);
    }
    
    bindModal('.button__search', '.types');
    bindModal('.menu__phone', '.menu__phone__popup', '.menu__phone__popup__close');

};

export default modal;