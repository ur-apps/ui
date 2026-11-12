import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export interface IPortalProps {
  children: React.ReactNode;
}

export function Portal({ children }: IPortalProps) {
  const [container] = useState(() => document.querySelector('#portal'));

  return container ? createPortal(children, container) : null;
}
