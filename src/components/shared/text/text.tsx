import { FC } from 'react';
import { Typography } from '@mui/material';

import { getPropsByVariant } from './utils';
import { TextProps } from './types';

export const Text: FC<TextProps> = (props) => {
  const { textVariant, children, ...typographyProps } = props;

  const variantProps = getPropsByVariant(textVariant);

  return (
    <Typography {...variantProps} {...typographyProps}>
      {children}
    </Typography>
  );
};
