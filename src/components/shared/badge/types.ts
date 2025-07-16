import { HTMLProps } from 'react';

export type BadgeSize = 'do' | 'default' | 'large';

export type BadgeStyle = 'accent' | 'warn' | 'secondary' | 'gray';

export type BadgeProps = HTMLProps<HTMLSpanElement> & {
  badgeSize?: BadgeSize;
  badgeStyle?: BadgeStyle;
};
