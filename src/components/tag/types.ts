export type TTagButton = (
  | {
      label: string;
      icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    }
  | {
      label?: string;
      icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    }
) & {
  id: string | number;
  className?: string;
  position?: 'start' | 'end';
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
};
