const checkInputs = () => {
    const checkNumInputs = (selector) => {
        const numInputs = document.querySelectorAll(selector);
    
        /* Проверка на ввод в номер телефона ТОЛЬКО числа */
        numInputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^0-9+]/, '');
            });
        });
    };

    checkNumInputs('input[name="user__phone"]');
};

export default checkInputs;