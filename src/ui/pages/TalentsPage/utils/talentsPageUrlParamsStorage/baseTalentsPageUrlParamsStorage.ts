import { LocalStorage } from "../../../../core/LocalStorage";
import { SerializedTalentsPageUrlParamsState } from "../../types";

const key = "ravenswatch-run-helper_talents-page_url-params"

export const baseTalentsPageUrlParamsStorage = {
    get(): SerializedTalentsPageUrlParamsState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedTalentsPageUrlParamsState) {
        LocalStorage.set(key, state);
    }
}
