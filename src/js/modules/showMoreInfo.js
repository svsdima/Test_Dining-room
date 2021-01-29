const showMoreInfo = (trigger, info) => {
    const btn = document.querySelector(trigger),
          cards = document.querySelectorAll(info);

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.add('animated', 'fadeInUp');
            card.style.display = 'block';
        });
        btn.remove();
    });
};

export default showMoreInfo;