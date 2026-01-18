import { MagicalObject, SerializedMagicalObject } from "../../../types";

export type CursedObjectsPageState = {
    used: MagicalObject[];
    preferred: MagicalObject[];
};

export type SerializedCursedObjectsPageState = {
    used: SerializedMagicalObject[];
    preferred: SerializedMagicalObject[];
};

export type DerivedCursedObjectsPageState = {
    available: MagicalObject[];
};
