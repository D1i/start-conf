'use client';

import { Checkbox, CheckboxProps } from '@mui/material';
import { FC, useState } from 'react';

//TODO Компонент в разработке
export const ThreeStateCheckbox: FC<CheckboxProps> = (props) => {
  const [checked, setChecked] = useState<true | false | 'indeterminate'>(
    'indeterminate'
  );

  const handleChange = () => {
    setChecked((prev) => {
      if (prev === 'indeterminate') return true;
      if (prev === true) return false;
      return 'indeterminate';
    });
  };

  return (
    <Checkbox
      checked={checked === true}
      indeterminate={checked === 'indeterminate'}
      onChange={handleChange}
      {...props}
    />
  );
};
