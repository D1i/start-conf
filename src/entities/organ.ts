import { OrganTypes } from "@/entities/organ-types";
import { getIllnessesByOrgan } from "@/utils";
import { Illness } from "@/entities/illness";

type Name = OrganTypes;
type Id = string;
type Description = string;
type Illnesses = Array<Illness>;

export class Organ {
  name: Name;
  id: Id; // TODO Временное решение создать тип под ID, есть либа
  description: Description;
  illnesses: Illnesses;

  constructor({
    name,
    id,
    description,
    illnesses,
  }: {
    name: Name;
    id: Id;
    description: Description;
    illnesses: Illnesses;
  }) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.illnesses = illnesses ?? getIllnessesByOrgan(name);
  }
}
