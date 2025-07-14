import { OrganSimpleDataType } from '@/services/organ/types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { FC } from 'react';

const OrganItem: FC<OrganSimpleDataType & { key: string }> = (organData) => {
  return (
    <Grid component={'section'} size={3}>
      <Card>
        <CardContent>
          <h3>{organData.name}</h3>
          <p>{organData.description}</p>
        </CardContent>
      </Card>
    </Grid>
  );
};

export { OrganItem };
