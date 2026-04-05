import { TalentMerged } from "data/heroes/talents/types";

export type Talent = Omit<TalentMerged, "iconUrl"> & {
    preferred?: boolean;
    locked?: boolean;
}
