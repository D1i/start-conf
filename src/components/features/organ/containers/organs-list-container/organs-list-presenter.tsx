'use client';

import { useOrgansList } from '@/services';
import { FC, useMemo } from 'react';
import { OrgansList } from '../../ui';
import { OrgansListPresenter } from '@/presenters';

const OrgansListContainer: FC = () => {
  const organsList = useOrgansList();

  const organsListPresenter = useMemo(
    () => new OrgansListPresenter(organsList),
    [organsList]
  );

  return <OrgansList organsListPresenter={organsListPresenter} />;
};

export { OrgansListContainer };
