import { LocalStorage } from "../../../../core/LocalStorage";

import { SerializedBuilderState } from "./types";

export const baseBuilderStateStorage = {
    get(key: string): SerializedBuilderState | null {
        return LocalStorage.get(key);
    },
    set(key: string, state: SerializedBuilderState) {
        LocalStorage.set(key, state);
    }
};
