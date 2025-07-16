import { TooltipProps } from '@mui/material';

export type TooltipTheme = 'dark' | 'light';

export type StyledTooltipProps = TooltipProps & {
  tooltipTheme?: TooltipTheme;
};
