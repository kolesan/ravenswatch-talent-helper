import { BuilderItem } from "../hooks/useBuilderStateReducer/types";

import { onAction, OnActionParams } from "./onAction";

export type OnItemActionParams<T extends BuilderItem> = Omit<OnActionParams, "action"> & {
    action: (item: T) => void;
    item: T;
}

export function onItemAction<T extends BuilderItem>({ 
    showMsg, 
    predicate, 
    failedPredicateMsg,
    action, 
    msg, 
    item, 
}: OnItemActionParams<T>) {
    return onAction({
        predicate,
        action: () => action(item),
        showMsg, 
        msg: `${item.name} ${msg}`,
        failedPredicateMsg,
    });
}
