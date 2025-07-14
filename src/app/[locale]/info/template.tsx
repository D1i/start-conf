import { Header } from '@/components';
import { ReactNode } from 'react';

export default function Info(props: { children: ReactNode }) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
