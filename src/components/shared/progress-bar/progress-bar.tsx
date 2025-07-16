import { FC } from 'react';
import { LinearProgress } from '@mui/material';
import cx from 'classnames';

import { ProgressBarProps } from './types';

import styles from './progress-bar.module.scss';

export const ProgressBar: FC<ProgressBarProps> = (props) => {
  const {
    progressWidth,
    progressTitle,
    progressDescription,
    variant,
    className,
    ...progressProps
  } = props;

  return (
    <div
      className={cx(styles.container)}
      style={{ width: progressWidth || '100%' }}
    >
      <span className={cx(styles.title)}>{progressTitle}</span>
      <LinearProgress
        className={cx(styles.progress, className)}
        variant={variant || 'determinate'}
        {...progressProps}
      />
      <div className={cx(styles.progressBottom)}>
        <span className={cx(styles.description)}>{progressDescription}</span>
        <span
          className={cx(styles.value)}
        >{`${progressProps.value || 0}%`}</span>
      </div>
    </div>
  );
};
