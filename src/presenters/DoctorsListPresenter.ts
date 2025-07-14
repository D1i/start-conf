import { DoctorsListType } from '@/services/doctor/types';

export class DoctorsListPresenter {
  private doctorsList: DoctorsListType = [];

  constructor(private readonly doctors: DoctorsListType) {
    this.doctorsList = doctors;
  }

  get() {
    return this.doctorsList;
  }
}
