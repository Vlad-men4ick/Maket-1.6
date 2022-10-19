import Swiper, {Pagination} from 'swiper';
import 'swiper/swiper.scss';

export const slider = () => {
    const sliderOptions = (width ,pagination) => {
        return {
        width: width,
        slidesPerView: 'auto',
        spaceBetween: 16,
        slidesOffsetBefore:16,
        slidesOffsetAfter:16,
        centerInsufficientSlides:true,
        modules: [Pagination],
        pagination: {
            el: pagination,
        },
        breakpoints: {
            560: {
            slidesPerGroup: 2,
            }
        }
        };
    };
    let brandsSlider
    let technicsSlider;
    let pricesSlider;
    let init = false;

    const loadSlider = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth < 768) {
        if (!init) {
            init = true;
            brandsSlider = new Swiper('.brands__slider', sliderOptions(220, '.brands__pagination'));
            technicsSlider = new Swiper('.technics__slider', sliderOptions(240, '.technics__pagination'));
            pricesSlider = new Swiper('.prices__slider', sliderOptions(260, '.prices__pagination'))
        }
        } else if (init) {
        brandsSlider.destroy();
        technicsSlider.destroy();
        pricesSlider.destroy();
        init = false;
        }
    };

    loadSlider();
    window.addEventListener('resize', loadSlider);
    }
