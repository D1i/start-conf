'use client';

import { useState } from 'react';

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from '@mui/material';

import { useAuthenticate } from '@/services';
import { redirect } from 'next/navigation';

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const authenticate = useAuthenticate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // try {
    // Простая имитация запроса
    await new Promise((res) => setTimeout(res, 1000));
    console.log('ALLo');
    if (login === 'admin' && password === 'password') {
      authenticate();
      redirect('/dynamic-atlas');
    } else {
      setError('Неверный логин или пароль');
    }
    // } catch (e) {
    //   console.log(e);
    //   setError('Ошибка при авторизации');
    // } finally {
    //   setLoading(false);
    // }

    setLoading(false);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 8, p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Вход в систему
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? 'Вход...' : 'Войти'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
