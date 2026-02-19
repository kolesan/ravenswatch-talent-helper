import { ComponentChildren } from "preact";

import { BuilderItem } from "./hooks/useBuilderStateReducer/types";
import { useBuilder } from "./useBuilder";

export type BuilderType<T extends BuilderItem> = ReturnType<typeof useBuilder<T>>;

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
