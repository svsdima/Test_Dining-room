const modal = () => {
    function bindModal(triggerSelector, modalSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.targer) {
                    e.preventDefault();
                }
                modal.style.display = 'none';
            });
        });
    }
    bindModal('.button__search', '.types');

};

export default modal;