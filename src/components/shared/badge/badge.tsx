import { FC } from 'react';

import { getBadgeClassNames } from './utils';

import { BadgeProps } from './types';

export const Badge: FC<BadgeProps> = (props) => {
  const { className, badgeSize, badgeStyle, children, ...spanProps } = props;

  return (
    <span
      className={getBadgeClassNames(badgeSize, badgeStyle, className)}
      {...spanProps}
    >
      {badgeSize === 'do' || children}
    </span>
  );
};
