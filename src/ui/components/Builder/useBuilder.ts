import {
    BuilderItem,
    BuilderState,
    BuilderStateReducerActionType,
} from "./hooks/useBuilderStateReducer/types";
import { useBuilderStateReducer } from "./hooks/useBuilderStateReducer/useBuilderStateReducer";
import { calculateAvailable } from "./utils/calculateAvailable";

type Params<T extends BuilderItem> = {
    getInitialState: () => BuilderState<T>;
    onAction: (
        state: BuilderState<T>, 
        actionType: BuilderStateReducerActionType<T>
    ) => void;
    allItems: T[];
}

export function useBuilder<T extends BuilderItem>({
    getInitialState,
    onAction,
    allItems,
}: Params<T>) {
    const [state, dispatch] = useBuilderStateReducer({
        getInitialState,
        onAction,
    });
    
    const available = calculateAvailable({
        builderState: state,
        allItems: allItems,
    });

    return {
        state,
        derivedState: {
            available,
        },
        actions: {
            loadState(newState: BuilderState<T>) {
                dispatch({
                    type: "load_state",
                    state: newState,
                });
            },
            clearUsed() {
                dispatch({
                    type: "used_clear",
                });
            },
            clearPreferred() {
                dispatch({
                    type: "preferred_clear",
                });
            },
            removeFromUsed(item: T) {
                dispatch({
                    type: item.preferred
                        ? "used_move_item_to_preferred"
                        : "used_remove_item",
                    item,
                });
            },
            preferredToUsed(item: T) {
                dispatch({
                    type: "preferred_move_item_to_used",
                    item,
                });
            },
            preferredToAvailable(item: T) {
                dispatch({
                    type: "preferred_remove_item",
                    item,
                });
            },
            availableToUsed(item: T) {
                dispatch({
                    type: "used_add_item",
                    item,
                });
            },
            availableToPreferred(item: T) {
                dispatch({
                    type: "preferred_add_item",
                    item,
                });
            },
        }
    };
}
