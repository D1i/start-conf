import { FC } from 'react';
import Grid from '@mui/material/Grid';
import { DoctorsListType } from '@/services/doctor/types';
import { DoctorItem } from './doctor-item';
import { DoctorsListPresenter } from '@/presenters';

const DoctorsList: FC<{ doctorsListPresenter: DoctorsListPresenter }> = ({
  doctorsListPresenter,
}) => {
  const doctorsList = doctorsListPresenter.get();

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
