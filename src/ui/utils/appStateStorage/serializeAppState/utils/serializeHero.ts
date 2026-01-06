import { AppState, SerializedHeroState } from "../../../../pages/ASDTalentsPage/types";

export function serializeHero(
    state: AppState,
): SerializedHeroState {
    return {
        rank: state.rank,
        talents: {
            used: state.talents.used.map(it => it.code),
            preferred: state.talents.preferred.map(it => it.code),
        }
    };
}
