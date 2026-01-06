import { defaultAppState } from "../../../../pages/TalentsPage/utils/defaultAppState";
import { minmaxRank } from "../../../../pages/TalentsPage/utils/minmaxRank";

export function deserializeRank(
    storedRank: unknown,
): number {
    const normalizedRank = Number(storedRank);
    if (isNaN(normalizedRank)) {
        return defaultAppState.rank;
    }
    return minmaxRank(normalizedRank);
}
