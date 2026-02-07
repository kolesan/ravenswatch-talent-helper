import { LocalStorage } from "../../../../core/LocalStorage";
import { SerializedTalentsPageState } from "../../types";

const key = "ravenswatch-run-helper_talents-page_state"

export const baseTalentsPageStateStorage = {
    get(): SerializedTalentsPageState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedTalentsPageState) {
        LocalStorage.set(key, state);
    }
}
