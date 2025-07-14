'use client';

import { UserPresenter } from '@/presenters';
import { Button } from '@mui/material';
import { redirect } from 'next/navigation';
import { FC, ReactNode } from 'react';

export const AuthorizedRout: FC<{
  userPresenter: UserPresenter;
  children: ReactNode;
}> = ({ userPresenter, children }) => {
  if (userPresenter.checkUserAuth()) {
    return <>{children}</>;
  }

  const onClick = () => {
    redirect('/login');
  };

  return (
    <div>
      <div>Вы не авторизованы</div>
      <Button onClick={() => redirect('/login')}>Авторизоваться</Button>
    </div>
  );
};
