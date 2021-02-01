import checkInputs from './modules/checkNumInput';
import slider from './modules/slider';
import modal from './modules/modals';
import showMoreInfo from './modules/showMoreInfo';
import accordion from './modules/accordion';
import form from './modules/form';
import categories from './modules/categories';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};
    
    checkInputs();
    slider();
    modal();
    showMoreInfo('.button__more', '.about-company__content__more-info');
    accordion('.promo-mobile__equipment', '.promo-mobile__categories');
    accordion('.contacts__titles__list__header', '.contacts__wrapper');
    form(modalState);
    categories();
});