import { FC } from 'react';
import Grid from '@mui/material/Grid';

import { OrganItem } from './organ-item';
import { OrgansListPresenter } from '@/presenters';

const OrgansList: FC<{ organsListPresenter: OrgansListPresenter }> = ({
  organsListPresenter,
}) => {
  const organsList = organsListPresenter.get();

  return (
    <Grid container spacing={2}>
      {organsList.map((organ) => {
        const { id, ...organData } = organ;
        return <OrganItem key={id} {...organData} />;
      })}
    </Grid>
  );
};

export { OrgansList };
