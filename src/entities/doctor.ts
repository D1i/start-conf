import { Illness } from "./illness";

type FirstName = string;
type LastName = string;
type Stage = number;
type SelfInfo = string;
type Id = string;

export class Doctor {
  firstName: FirstName;
  lastName: LastName;
  stage: Stage;
  id: Id;
  selfInfo: SelfInfo;
  illnesses: Array<Illness>;

  constructor({
    firstName,
    lastName,
    stage,
    id,
    selfInfo,
    illnesses,
  }: {
    firstName: FirstName;
    lastName: LastName;
    stage: Stage;
    id: Id;
    selfInfo: SelfInfo;
    illnesses: Array<Illness>;
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.stage = stage;
    this.id = id;
    this.selfInfo = selfInfo;
    this.illnesses = illnesses;
  }
}
