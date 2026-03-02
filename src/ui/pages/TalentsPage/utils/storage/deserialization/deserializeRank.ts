import { rankConsts } from "../../../consts/rankConsts";
import { minmaxRank } from "../../minmaxRank";

export function deserializeRank(
    storedRank: unknown,
): number {
    const normalizedRank = Number(storedRank);
    if (isNaN(normalizedRank)) {
        return rankConsts.default;
    }
    return minmaxRank(normalizedRank);
}
