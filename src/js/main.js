import slider from './modules/slider';
import modal from './modules/modals';
import showMoreInfo from './modules/showMoreInfo';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    slider();
    modal();
    showMoreInfo('.button__more', '.about-company__content__more-info');
});