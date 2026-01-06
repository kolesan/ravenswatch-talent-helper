import { MagicalObject } from "../../../types";

export type LegendaryObjectsPageState = {
    used: MagicalObject[];
    preferred: MagicalObject[];
};

export type SerializedLegendaryObjectsPageState = {
    used: string[];
    preferred: string[];
};

export type DerivedLegendaryObjectsPageState = {
    available: MagicalObject[];
};
