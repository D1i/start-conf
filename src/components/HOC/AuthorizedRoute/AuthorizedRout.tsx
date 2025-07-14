import { UserPresenter } from '@/presenters';
import { FC, ReactNode } from 'react';

export const AuthorizedRout: FC<{
  userPresenter: UserPresenter;
  children: ReactNode;
}> = ({ userPresenter, children }) => {
  if (userPresenter.checkUserAuth()) {
    return <>{children}</>;
  }

  return <>Не авторизован</>;
};
