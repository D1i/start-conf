import { CheckboxProps } from '@mui/material';

export type CheckState = true | false | 'indeterminate';

export type CheckVariant = 'filled' | 'outlined';

export type CheckProps = CheckboxProps & {
  variant?: CheckVariant;
  threeState?: boolean;
};
