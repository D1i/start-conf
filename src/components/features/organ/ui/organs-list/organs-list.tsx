import { FC } from 'react';
import Grid from '@mui/material/Grid';

import { OrgansListType } from '@/services/organ/types';
import { OrganItem } from './organ-item';

const OrgansList: FC<{ organsList: OrgansListType }> = ({ organsList }) => {
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
