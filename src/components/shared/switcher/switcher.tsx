'use client';

import { FC } from 'react';
import { styled, Switch, SwitchProps } from '@mui/material';

export const Switcher: FC<SwitchProps> = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 52,
  height: 32,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    marginLeft: 4,
    marginTop: 4,
    display: 'flex',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: 'rgba(0, 163, 255, 1)',
        opacity: 1,
        border: '2px solid transparent',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 24,
    height: 24,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: 'rgba(15, 15, 16, 1)',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
    border: '2px solid rgba(208, 208, 229, 0.64)',
    opacity: 1,
  },
}));
