import { ComponentChildren } from "preact";

import { BuilderItem, BuilderState } from "./hooks/useBuilderStateReducer/types";

export type BuilderType<T extends BuilderItem> = {
    state: BuilderState<T>;
    derivedState: {
        available: T[];
    };
    actions: {
        clearUsed(): void;
        clearPreferred(): void;
        removeFromUsed(item: T): void;
        preferredToUsed(item: T): void;
        preferredToAvailable(item: T): void;
        availableToUsed(item: T): void;
        availableToPreferred(item: T): void;
    };
}

export type BuilderListItemRenderer<T> = (
    item: T, 
    index: number, 
    actions: BuilderListItemActions
) => ComponentChildren;

export type BuilderListItemActions = {
    onClick?: () => void;
    onAltClick?: () => void;
    onHold?: () => void;
}
