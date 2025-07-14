'use client';

import { useOrgansList } from '@/services';
import { FC } from 'react';
import { OrgansList } from '../../ui';

const OrgansListPresenter: FC = () => {
  const organsList = useOrgansList();
  return <OrgansList organsList={organsList} />;
};

export { OrgansListPresenter };
