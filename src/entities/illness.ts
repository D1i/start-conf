import { IllnessType } from "./illnesses-types";
import { v4 as uuid } from "uuid";

type Description = string;

export class Illness {
  id = uuid();
  name: IllnessType;
  description: Description;
  organs: Array<string>;

  constructor(name: IllnessType, description: Description) {
    this.name = name;
    this.description = description;
    this.organs = ["Сердце", "Почки", "Легкое"];
  }
}
