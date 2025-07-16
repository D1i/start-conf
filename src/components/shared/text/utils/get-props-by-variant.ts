import { VariantType, VarintStylesMap } from '../types';

const varintStylesMap: VarintStylesMap = {
  h1: {
    fontWeight: '500',
    fontSize: 64,
    component: 'h1',
  },
  h2: {
    fontWeight: '500',
    fontSize: 40,
    component: 'h2',
  },
  h3: {
    fontWeight: '500',
    fontSize: 24,
    component: 'h3',
  },
  medium: {
    fontWeight: '400',
    fontSize: 16,
    component: 'span',
  },
  small: {
    fontWeight: '400',
    fontSize: 14,
    component: 'span',
  },
  sub: {
    fontWeight: '400',
    fontSize: 12,
    component: 'span',
  },
};

export const getPropsByVariant = (variant: VariantType = 'medium') =>
  varintStylesMap[variant];
