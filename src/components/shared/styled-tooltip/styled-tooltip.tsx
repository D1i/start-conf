'use client';

import { FC } from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material';

import { StyledTooltipProps } from './types';

export const StyledTooltip: FC<StyledTooltipProps> = styled(
  ({ className, tooltipTheme, ...props }: StyledTooltipProps) => {
    console.log(tooltipTheme);
    return <Tooltip arrow {...props} classes={{ popper: className }} />;
  }
)(({ tooltipTheme }) => {
  return {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor:
        tooltipTheme === 'light' ? 'white' : 'rgba(31, 32, 34, 1)',
      color: tooltipTheme === 'light' ? 'black' : 'white',
      fontSize: 14,
      lineHeight: '150%',
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: tooltipTheme === 'light' ? 'white' : 'rgba(31, 32, 34, 1)',
    },
  };
});
