import { LocalStorage } from "../../../../core/LocalStorage";
import { SerializedTalentsPageUrlParamsState } from "../../types";

const key = "rrh_talents_url";

export const baseTalentsPageUrlParamsStorage = {
    get(): SerializedTalentsPageUrlParamsState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedTalentsPageUrlParamsState) {
        LocalStorage.set(key, state);
    }
}
