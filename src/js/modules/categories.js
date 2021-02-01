const categories = () => {
    function triggerCategories (triggerSelector, modalSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector);

        trigger.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.add('animated', 'fadeIn');
                modal.classList.toggle('active-style');
                // modal.style.display= 'block';
            });
        });
    };

    triggerCategories('.header__search__categories', '.categories');
    triggerCategories('.promo-mobile__right__search', '.promo-mobile__search-panel');
    triggerCategories('.promo-mobile__right__phone', '.menu__phone__popup');
    triggerCategories('.button__hamburger', '.promo');
};

export default categories;