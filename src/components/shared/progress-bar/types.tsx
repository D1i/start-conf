import { LinearProgressProps } from '@mui/material';

export type ProgressBarProps = LinearProgressProps & {
  progressWidth?: number | string;
  progressTitle?: string;
  progressDescription?: string;
};
