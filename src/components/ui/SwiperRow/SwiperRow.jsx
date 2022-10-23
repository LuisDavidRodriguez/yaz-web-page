import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PropTypes } from 'prop-types';
import { Pagination, Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperRow.scss';

const SwiperRow = (props) => {
  const { cards } = props;
  const swipers = cards.map((card) => <SwiperSlide key={card.key}>{card}</SwiperSlide>);
  return (
    <>
      <Swiper
        pagination
        navigation
        grabCursor
        autoplay
        centeredSlides
        mousewheel
        roundLengths
        loop
        spaceBetween={32}
        speed={1000}
        initialSlide={2}
        slidesPerView="auto"
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper_row"
      >
        {swipers}
      </Swiper>
    </>
  );
};

export default SwiperRow;

SwiperRow.defaultProps = {
  cards: [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5',
    'Slide 6',
    'Slide 7',
    'Slide 8',
    'Slide 9',
  ],
};

SwiperRow.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element),
};
