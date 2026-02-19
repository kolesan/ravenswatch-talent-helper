import { BuilderItem } from "../../hooks/useBuilderStateReducer/types";

export type StorableBuilderState<T extends BuilderItem> = {
    used: T[];
    preferred: T[];
};

export type SerializedBuilderState = {
    used: SerializedBuilderItem[];
    preferred: SerializedBuilderItem[];
};

export type SerializedBuilderItem = {
    code: string;
    preferred?: boolean;
}
