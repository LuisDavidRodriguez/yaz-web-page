import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './CardOpinion.module.scss';

const CardOpinion = (props) => {
  const {
    id,
    title,
    subtitle,
    paragraph1,
    footer,
  } = props;
  return (
    <section id={id} className={styles.cardContainer}>
      <artilce className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.subtitle}>{subtitle}</h4>
        <p className={styles.p1}>{paragraph1}</p>
      </artilce>
      <article className={styles.footer}>
        {footer}
      </article>
    </section>
  );
};

CardOpinion.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  paragraph1: PropTypes.string,
  footer: PropTypes.element,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CardOpinion.defaultProps = {
  id: '',
  title: '',
  subtitle: '',
  paragraph1: '',
  footer: null,
};

export default CardOpinion;
