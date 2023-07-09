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
  position?: 'start' | 'end';
  onClick?: () => void;
};
