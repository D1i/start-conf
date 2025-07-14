import { FC } from 'react';
import Grid from '@mui/material/Grid';
import { DoctorsListType } from '@/services/doctor/types';
import { DoctorItem } from './doctor-item';

const DoctorsList: FC<{ doctorsList: DoctorsListType }> = ({ doctorsList }) => {
  return (
    <Grid container spacing={2}>
      {doctorsList.map((doctor) => {
        const { id, ...doctorData } = doctor;
        return <DoctorItem key={id} {...doctorData} />;
      })}
    </Grid>
  );
};

export { DoctorsList };
