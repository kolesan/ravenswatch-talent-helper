import { MagicalObject, SerializedMagicalObject } from "../../../types";

export type StorableLegendaryObjectsBuilderState = {
    used: MagicalObject[];
    preferred: MagicalObject[];
};

export type SerializedLegendaryObjectsBuilderState = {
    used: SerializedMagicalObject[];
    preferred: SerializedMagicalObject[];
};
