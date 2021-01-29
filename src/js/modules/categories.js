const categories = () => {
    function triggerCategories (triggerSelector, modalSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector);

        trigger.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.add('animated', 'fadeIn');
                modal.classList.toggle('active-style');
                // modal.style.display= 'block';
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });
    };

    triggerCategories('.header__search__categories', '.categories');
    triggerCategories('.promo-mobile__right__search', '.promo-mobile__search-panel');
};

export default categories;