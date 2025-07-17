import initTranslations from '@/app/i18n';
import styles from './page.module.css';
import Container from '@mui/material/Container';
import { redirect } from 'next/navigation';
import {
  Badge,
  Label,
  ProgressBar,
  StyledTooltip,
  Switcher,
  Text,
  Check,
} from '@/components';

const i18nNamespaces = ['test'];

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  //TODO Страница пока что для отображения UI
  // redirect('/dynamic-atlas');

  return (
    <div className={styles.page}>
      <Text textVariant="h1">H1</Text>
      <Text textVariant="h2">H2</Text>
      <Text textVariant="h3">H3</Text>
      <Text textVariant="medium">Medium text body</Text>
      <Text textVariant="small">Small text body</Text>
      <Text textVariant="sub">Subtext</Text>
      <Badge badgeSize="do"></Badge>
      <Badge badgeSize="default" badgeStyle="warn">
        12
      </Badge>
      <Badge badgeSize="large" badgeStyle="secondary">
        24
      </Badge>
      <Badge badgeSize="large" badgeStyle="accent">
        24
      </Badge>
      <Badge badgeSize="default" badgeStyle="gray">
        38
      </Badge>
      <Label labelStyle="gray">Label</Label>
      <Label labelStyle="red">Label</Label>
      <Label labelStyle="pink">Label</Label>
      <Label labelStyle="green">Label</Label>
      <Label labelStyle="blue">Label</Label>
      <Label labelStyle="orange">Label</Label>
      <ProgressBar
        progressWidth={400}
        progressTitle="Заголовок"
        progressDescription="Описание"
        value={50}
      />
      <ProgressBar
        progressWidth={600}
        progressTitle="Здесь должен быть заголовок"
        progressDescription="Здесь должно быть описание"
        value={30}
      />
      <Switcher />
      <Switcher disabled />
      <StyledTooltip
        placement="top-start"
        tooltipTheme="light"
        title="Верхний светлый тултип"
      >
        <Text>Верхний светлый тултип</Text>
      </StyledTooltip>
      <StyledTooltip
        placement="left-start"
        tooltipTheme="dark"
        title="Левый темный тултип"
      >
        <Text>Левый темный тултип</Text>
      </StyledTooltip>
      <Check />
    </div>
  );
}
