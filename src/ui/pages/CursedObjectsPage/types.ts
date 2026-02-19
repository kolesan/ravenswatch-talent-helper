import { MagicalObject, SerializedMagicalObject } from "../../../types";

export type StorableCursedObjectsBuilderState = {
    used: MagicalObject[];
    preferred: MagicalObject[];
};

export type SerializedCursedObjectsBuilderState = {
    used: SerializedMagicalObject[];
    preferred: SerializedMagicalObject[];
};
