import React, { useEffect, useRef } from 'react';

import { classNames } from 'utils';
import styles from './сarousel.module.scss';

export interface ICarouselProps {
  className?: string;
  imgWrapperClassName?: string;
  data: { name: string; img: string; link?: string; target?: '_self' | '_blank' | '_parent' | '_top' }[];
  interval?: number;
}

Carousel.defaultProps = {
  className: '',
  imgWrapperClassName: '',
  interval: 5000,
} as ICarouselProps;

export function Carousel({ className, imgWrapperClassName, data, interval }: ICarouselProps) {
  const сarousel = useRef<HTMLDivElement>(null);
  const intervalID = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (сarousel.current && data.length > 1) {
      intervalID.current = setInterval(() => {
        const scrollbarWidth = сarousel.current!.scrollWidth;
        const step = scrollbarWidth / data.length;
        const scrolled = сarousel.current?.scrollLeft || 0;

        if (scrolled < scrollbarWidth - step) {
          сarousel.current?.scrollBy({
            top: 0,
            left: step,
            behavior: 'smooth',
          });
        } else {
          сarousel.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }
      }, interval);
    }

    return () => {
      if (intervalID.current) {
        clearInterval(intervalID.current);
      }
    };
  }, [interval, data.length]);

  return data.length ? (
    <div className={classNames(styles.сarousel, className)} ref={сarousel}>
      {data.map((el) =>
        el.link ? (
          <a
            href={el.link}
            className={classNames(styles.сarousel__item, imgWrapperClassName)}
            target={el.target || '_blank'}
            rel="noreferrer"
            key={el.name}>
            <img src={el.img} className={styles.сarousel__img} alt={el.name} />
          </a>
        ) : (
          <div className={classNames(styles.сarousel__item, imgWrapperClassName)} key={el.name}>
            <img src={el.img} className={styles.сarousel__img} alt={el.name} />
          </div>
        )
      )}
    </div>
  ) : null;
}
