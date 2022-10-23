import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import SwiperRow from '../ui/SwiperRow/SwiperRow';
import CardOpinion from '../ui/CardOpinion/CardOpinion';
import styles from './Welcome.module.scss';
import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';
import image6 from './6.png';
import image7 from './7.png';

// eslint-disable-next-line arrow-body-style
const Welcome = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  const cards = images.map((image) => {
    const id = nanoid();
    return (
      <img key={id} src={image} alt="product number 1" />
    );
  });

  // create a card opinion
  const opinion = (
    <CardOpinion
      key={nanoid()}
      title="Maria antonieta"
      subtitle="Alisado organico"
      paragraph1="Recomiendo ampliamente las queratinas organicas Yaz Fortozo"
      footer={(
        <button type="button" className="btn-anim">read more</button>
      )}
    />
  );

  cards.push(opinion);

  return (
    <article className={styles.welcomeContainer}>
      <SwiperRow
        cards={cards}
      />
    </article>
  );
};

export default Welcome;
