import initTranslations from '@/app/i18n';
import styles from './page.module.css';

const i18nNamespaces = ['test'];

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  const { t } = await initTranslations(locale, i18nNamespaces);

  return <div className={styles.page}>{t('hello')}</div>;
}
