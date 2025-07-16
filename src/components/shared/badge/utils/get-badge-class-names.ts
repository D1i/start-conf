import cx from 'classnames';

import { BadgeStyle, BadgeSize } from '../types';

import styles from '../badge.module.scss';

export const getBadgeClassNames = (
  badgeSize: BadgeSize = 'default',
  badgeStyle: BadgeStyle = 'accent',
  className: string = ''
) => {
  return cx(styles.badge, styles[badgeSize], styles[badgeStyle], className);
};
