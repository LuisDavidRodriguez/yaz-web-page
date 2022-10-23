// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { PropTypes } from 'prop-types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SwiperComplete.scss';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';

const SwiperComplete = (props) => {
  const {
    cards,
  } = props;

  const swipers = cards.map((card) => <SwiperSlide key={card.key}>{card}</SwiperSlide>);
  return (
    <>
      <Swiper
        pagination
        navigation
        grabCursor
        autoplay
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper_complete"
      >
        {swipers}
      </Swiper>
    </>
  );
};

export default SwiperComplete;

SwiperComplete.defaultProps = {
  cards: ['default1', 'default2', 'default3', 'default5', 'default5'],
};

SwiperComplete.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.element),
};
