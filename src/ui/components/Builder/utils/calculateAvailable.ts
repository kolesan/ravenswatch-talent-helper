import { BuilderItem, BuilderState } from "../hooks/useBuilderStateReducer/types";

type Params<T extends BuilderItem> = {
    builderState: BuilderState<T>,
    allItems: T[],
}

export function calculateAvailable<T extends BuilderItem>({
    builderState,
    allItems,
}: Params<T>): T[] {
    return allItems
        .filter(isNotIn(builderState.used))
        .filter(isNotIn(builderState.preferred));
}

function isNotIn<T extends BuilderItem>(talents: T[]) {
    return function(talent: T) {
        return !talents.find(it => it.code === talent.code);
    }
}
