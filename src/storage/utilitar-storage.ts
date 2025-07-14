import { atomWithStorage } from "jotai/utils";

export const selectedOrgan = atomWithStorage<null | string>(
  "selectedOrganInDynamicAtlas",
  null,
);
