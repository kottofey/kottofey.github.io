const swiper = new Swiper('.brands-repair-list--wide-screen', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
    },
    spaceBetween: 16,
    slidesPerView: 3.0625,
    // slidesOffsetAfter: 80,
});

/*
 * k = ( total w + gap ) / scroll !!!!!!!!!!!!!! работает!!!
 * k = ( total w + gap ) / ( card w + gap )
 */