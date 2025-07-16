import { FC } from 'react';
import cx from 'classnames';

import { LabelProps } from './types';

import styles from './label.module.scss';

export const Label: FC<LabelProps> = (props) => {
  const { labelStyle, children, className, ...spanProps } = props;

  return (
    <div className={cx(styles.label, styles[labelStyle || 'gray'])}>
      <span className={cx(styles.dot)}></span>
      <span className={cx(styles.text, className)} {...spanProps}>
        {children}
      </span>
    </div>
  );
};
