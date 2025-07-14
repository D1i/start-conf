import { FC } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { UserMenuContainer } from '@/components';

export const Header: FC = () => {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{ backgroundColor: 'background.paper' }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          НАЗВАНИЕ ПРОЕКТА
        </Typography>
        <UserMenuContainer />
      </Toolbar>
    </AppBar>
  );
};
