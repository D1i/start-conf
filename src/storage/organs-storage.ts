import {atom} from "jotai";
import {mocks} from "@mocks";

export const organsStorage = atom(mocks.getOrgans(50));