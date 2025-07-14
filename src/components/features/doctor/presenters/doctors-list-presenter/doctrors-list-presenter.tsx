'use client';

import { FC } from 'react';

import { useDoctorList } from '@/services';

import { DoctorsList } from '../../ui';

const DoctorsListPresenter: FC = () => {
  const doctorsList = useDoctorList();

  return <DoctorsList doctorsList={doctorsList} />;
};

export { DoctorsListPresenter };
