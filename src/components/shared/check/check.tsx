'use client';

import { Checkbox, styled } from '@mui/material';
import { FC, useState } from 'react';
import { CheckProps, CheckState } from './types';

export const Check: FC<CheckProps> = (props) => {
  const { variant, threeState, ...checkboxProps } = props;

  const [checked, setChecked] = useState<CheckState>(false);

  const handleChange = () => {
    setChecked((prev) => {
      if (threeState) {
        if (prev === 'indeterminate') return true;
        if (prev === true) return false;
        return 'indeterminate';
      } else {
        return !prev;
      }
    });
  };

  return (
    <Checkbox
      checked={checked === true}
      indeterminate={checked === 'indeterminate'}
      onChange={handleChange}
      {...checkboxProps}
    />
  );
};
