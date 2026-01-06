import { MagicalObject } from "../../../types";

export type CursedObjectsPageState = {
    used: MagicalObject[];
    preferred: MagicalObject[];
};

export type SerializedCursedObjectsPageState = {
    used: string[];
    preferred: string[];
};

export type DerivedCursedObjectsPageState = {
    available: MagicalObject[];
};
