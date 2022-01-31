import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useTheme } from 'contexts';
import { classNames } from 'utils';
import styles from './link.module.scss';

export interface ILinkProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  appearance?: 'fill' | 'outline' | 'text';
  colorScheme?: 'white' | 'black' | 'blue';
  autoColor?: boolean;
  href?: string;
  target: '_self' | '_blank' | '_parent' | '_top';
  id?: string;
  children: React.ReactNode;
  onClick?: ((evt: React.MouseEvent<HTMLAnchorElement>) => void) | undefined;
  refLink?: React.RefObject<HTMLAnchorElement>;
}

Link.defaultProps = {
  size: 'medium',
  appearance: 'text',
  colorScheme: 'blue',
  href: '/',
  target: '_self',
} as ILinkProps;

export function Link({
  className,
  size,
  appearance,
  colorScheme,
  autoColor,
  href = '/',
  target,
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
