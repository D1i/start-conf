'use client';

import { FC, useMemo } from 'react';

import { DoctorsListPresenter } from '@/presenters';
import { useDoctorList } from '@/services';

import { DoctorsList } from '../../ui';

const DoctorsListContainer: FC = () => {
  const doctorsList = useDoctorList();

  const doctorsListPresenter = useMemo(
    () => new DoctorsListPresenter(doctorsList),
    [doctorsList]
  );

  return <DoctorsList doctorsListPresenter={doctorsListPresenter} />;
};

export { DoctorsListContainer };
