import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useTheme } from 'contexts';
import { classNames } from 'utils';
import styles from './link.module.scss';

export interface ILinkProps {
  className?: string;
  size?: 's' | 'm' | 'l';
  appearance?: 'fill' | 'outline' | 'text';
  colorScheme?: 'white' | 'black' | 'blue';
  autoColor?: boolean;
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  id?: string;
  children: React.ReactNode;
  onClick?: ((evt: React.MouseEvent<HTMLAnchorElement>) => void) | undefined;
  refLink?: React.RefObject<HTMLAnchorElement>;
}

export function Link({
  className,
  size = 'm',
  appearance = 'text',
  colorScheme = 'blue',
  autoColor = true,
  href = '/',
  target = '_self',
  id,
  onClick,
  refLink,
  children,
}: ILinkProps) {
  const { theme } = useTheme();

  return target === '_blank' ? (
    <a
      className={classNames(
        styles.link,
        styles[`link--${size}`],
        styles[`link--${appearance}`],
        styles[`link--${colorScheme}`],
        autoColor ? styles[`link--${theme}-mode`] : undefined,
        className
      )}
      href={href}
      target={target}
      id={id}
      onClick={onClick}
      ref={refLink}>
      {children}
    </a>
  ) : (
    <RouterLink
      className={classNames(
        styles.link,
        styles[`link--${size}`],
        styles[`link--${appearance}`],
        styles[`link--${colorScheme}`],
        autoColor ? styles[`link--${theme}-mode`] : undefined,
        className
      )}
      to={href}
      target={target}
      id={id}
      onClick={onClick}
      ref={refLink}>
      {children}
    </RouterLink>
  );
}
