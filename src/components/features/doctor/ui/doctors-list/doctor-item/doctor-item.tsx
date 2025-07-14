import { FC } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import { DoctorSimpleDataType } from '@/services/doctor/types';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';

// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const DoctorItem: FC<DoctorSimpleDataType & { key: string }> = (doctorData) => {
  return (
    <Grid component={'section'} size={6}>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <Avatar sx={{ bgcolor: '', width: 50, height: 50 }}>
            <Image
              width={50}
              height={50}
              src={doctorData.avatar}
              alt={doctorData.firstName}
            />
          </Avatar>
          <h3>
            {doctorData.firstName} {doctorData.lastName}
          </h3>
        </CardContent>
      </Card>
    </Grid>
  );
};

export { DoctorItem };
