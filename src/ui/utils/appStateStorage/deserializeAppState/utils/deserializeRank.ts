import { defaultAppState } from "../../../../pages/talentsPage/utils/defaultAppState";
import { minmaxRank } from "../../../../pages/talentsPage/utils/minmaxRank";

export function deserializeRank(
    storedRank: unknown,
): number {
    const normalizedRank = Number(storedRank);
    if (isNaN(normalizedRank)) {
        return defaultAppState.rank;
    }
    return minmaxRank(normalizedRank);
}
