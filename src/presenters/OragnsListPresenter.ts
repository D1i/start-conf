import { OrgansListType } from '@/services/organ/types';

export class OrgansListPresenter {
  private organsList: OrgansListType = [];

  constructor(private readonly organs: OrgansListType) {
    this.organsList = organs;
  }

  get() {
    return this.organsList;
  }
}
