import { TypographyProps } from '@mui/material';

export type VariantType = 'h1' | 'h2' | 'h3' | 'medium' | 'small' | 'sub';

export type VarintStylesMap = Record<
  VariantType,
  { fontWeight: string; fontSize: number; component: string }
>;

export type TextProps = TypographyProps & {
  textVariant?: VariantType;
};
