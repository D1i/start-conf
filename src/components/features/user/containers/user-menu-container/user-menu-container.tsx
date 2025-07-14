'use client';

import { UserPresenter } from '@/presenters';
import { useAuthenticate, useCheckAuth, useLogout, useUser } from '@/services';
import { FC, useMemo } from 'react';
import { UserMenu } from '../../ui/user-menu';

export const UserMenuContainer: FC = () => {
  const checkAuth = useCheckAuth();
  const user = useUser();
  const authenticate = useAuthenticate();
  const logout = useLogout();

  const userPresenter = useMemo(
    () => new UserPresenter(user, checkAuth, authenticate, logout),
    [user, checkAuth, authenticate, logout]
  );

  console.log(userPresenter.logout);

  return <UserMenu userPresenter={userPresenter} />;
};
