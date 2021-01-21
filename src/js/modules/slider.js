

const slider = () => {
    function swiper (swiper_name) {
        const wrapper = document.querySelector(swiper_name);

        new Swiper (wrapper, {
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            animating: true,
            speed: 400,
            autoplay: {
                delay: 5000
            }
        });
    }

    swiper('.swiper-container');

};

export default slider;