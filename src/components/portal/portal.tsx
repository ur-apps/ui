import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

export interface IPortalProps {
  children: React.ReactNode;
}

export function Portal({ children }: IPortalProps) {
  const portal = useRef(document.querySelector('#portal'));

  return portal.current ? createPortal(children, portal.current) : null;
}
