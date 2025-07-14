import { useAtomValue } from 'jotai';

import { doctorsStorage } from '@/storage/doctors-storage';
import { DoctorsListType } from '../types';

import defaultAvatar from '@/assets/svg/doctor-default-avatar.svg';

export const useDoctorList = (): DoctorsListType => {
  return useAtomValue(doctorsStorage).map((doctor) => ({
    firstName: doctor.firstName,
    lastName: doctor.lastName,
    selfInfo: doctor.selfInfo,
    stage: doctor.stage,
    avatar: defaultAvatar,
    id: doctor.id,
  }));
};
