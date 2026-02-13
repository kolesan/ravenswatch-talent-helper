import { LocalStorage } from "../../../../core/LocalStorage";
import { SerializedHeroes } from "../../types";

const key = "ravenswatch-run-helper_talents-page_builder-state"

export const baseHeroStateStorage = {
    get(): SerializedHeroes | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedHeroes) {
        LocalStorage.set(key, state);
    }
}
