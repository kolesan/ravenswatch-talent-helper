import { defaultReactiveTalentsPageState } from "../../../defaultReactiveTalentsPageState";
import { minmaxRank } from "../../../minmaxRank";

export function deserializeRank(
    storedRank: unknown,
): number {
    const normalizedRank = Number(storedRank);
    if (isNaN(normalizedRank)) {
        return defaultReactiveTalentsPageState.rank;
    }
    return minmaxRank(normalizedRank);
}
