'use client';

import { UserPresenter } from '@/presenters';
import { useAuthenticate, useCheckAuth, useUser } from '@/services';
import { FC, ReactNode, useMemo } from 'react';
import { AuthorizedRout } from './AuthorizedRout';

export const AuthorizedRouteContainer: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const checkAuth = useCheckAuth();
  const user = useUser();
  const authenticate = useAuthenticate();

  const userPresenter = useMemo(
    () => new UserPresenter(user, checkAuth, authenticate),
    [user, checkAuth, authenticate]
  );

  return (
    <AuthorizedRout userPresenter={userPresenter}>{children}</AuthorizedRout>
  );
};
