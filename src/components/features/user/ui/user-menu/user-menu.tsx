'use client';

import { FC } from 'react';

import {
  Avatar,
  Button,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { useState } from 'react';
import { UserPresenter } from '@/presenters';
import { redirect } from 'next/navigation';

export const UserMenu: FC<{ userPresenter: UserPresenter }> = ({
  userPresenter,
}) => {
  const onLogin = () => {
    redirect('/login');
  };

  const user = userPresenter.get();

  console.log(userPresenter.logout);

  if (!userPresenter.checkUserAuth()) {
    return (
      <Button color="primary" variant="outlined" onClick={onLogin}>
        Войти
      </Button>
    );
  } else {
    return (
      <Box display="flex" alignItems="center">
        <Typography variant="body1">Пользователь</Typography>
        <Button
          sx={{ ml: 2 }}
          color="primary"
          variant="outlined"
          onClick={userPresenter.logout}
        >
          Выйти
        </Button>
      </Box>
    );
  }
};
