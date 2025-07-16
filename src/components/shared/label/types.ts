import { HTMLProps } from 'react';

export type LabelStyle = 'gray' | 'blue' | 'pink' | 'red' | 'orange' | 'green';

export type LabelProps = HTMLProps<HTMLSpanElement> & {
  labelStyle?: LabelStyle;
};
