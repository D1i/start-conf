import {OrganTypes} from "@/entities/organ-types";
import {v4 as uuid} from "uuid";

export class Organ {
    name: OrganTypes;
    id: string = uuid(); // TODO Временное решение создать тип под ID, есть либа
    description: string;
    illnesses: Array<Illness> = service.getIllnesses(this.name);

    constructor() {
    }
}