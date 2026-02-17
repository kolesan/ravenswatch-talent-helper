import {
    BuilderItem,
    BuilderState,
    BuilderStateReducerActionType,
} from "./hooks/useBuilderStateReducer/types";
import { useBuilderStateReducer } from "./hooks/useBuilderStateReducer/useBuilderStateReducer";

type Params<T extends BuilderItem> = {
    getInitialState: () => BuilderState<T>;
    onAction: (
        state: BuilderState<T>, 
        actionType: BuilderStateReducerActionType<T>
    ) => void;
}

export function useBuilder<T extends BuilderItem>({
    getInitialState,
    onAction,
}: Params<T>) {
    const [state, dispatch] = useBuilderStateReducer({
        getInitialState,
        onAction,
    });

    return {
        state,
        loadState(newState: BuilderState<T>) {
            dispatch({
                type: "load_state",
                state: newState,
            });
        },
        clearUsed() {
            dispatch({
                type: "clear_used",
            });
        },
        clearPreferred() {
            dispatch({
                type: "clear_preferred",
            });
        },
        removeFromUsed(item: T) {
            dispatch({
                type: item.preferred
                    ? "used_to_preferred"
                    : "used_to_available",
                item,
            });
        },
        preferredToUsed(item: T) {
            dispatch({
                type: "preferred_to_used",
                item,
            });
        },
        preferredToAvailable(item: T) {
            dispatch({
                type: "preferred_to_available",
                item,
            });
        },
        availableToUsed(item: T) {
            dispatch({
                type: "available_to_used",
                item,
            });
        },
        availableToPreferred(item: T) {
            dispatch({
                type: "available_to_preferred",
                item,
            });
        },
    };
}
