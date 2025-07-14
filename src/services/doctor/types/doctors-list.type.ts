import { DoctorSimpleDataType } from './doctor-simple-data.type';

type ID = string;

export type DoctorsListType = Array<DoctorSimpleDataType & { id: ID }>;
