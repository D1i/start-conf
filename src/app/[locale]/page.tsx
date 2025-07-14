import initTranslations from '@/app/i18n';
import styles from './page.module.css';
import Container from '@mui/material/Container';
import { redirect } from 'next/navigation';

const i18nNamespaces = ['test'];

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  redirect('/dynamic-atlas');

  return <div className={styles.page}>dasdas</div>;
}
