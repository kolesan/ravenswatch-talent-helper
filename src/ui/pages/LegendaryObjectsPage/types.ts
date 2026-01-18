import { MagicalObject, SerializedMagicalObject } from "../../../types";

export type LegendaryObjectsPageState = {
    used: MagicalObject[];
    preferred: MagicalObject[];
};

export type SerializedLegendaryObjectsPageState = {
    used: SerializedMagicalObject[];
    preferred: SerializedMagicalObject[];
};

export type DerivedLegendaryObjectsPageState = {
    available: MagicalObject[];
};
