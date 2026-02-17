import { useMemo } from "preact/hooks";

import { legendary } from "../../../../../scrapedData/mergedItems/legendary";
import { MagicalObject } from "../../../../../types";
import { calculateAvailable } from "../../../../components/Builder/utils/calculateAvailableTalents";
import { useBuilder } from "../../../TalentsPage/components/Builder/useBuilder";

import { loadFromStorage } from "./utils/loadFromStorage";
import { saveToStorage } from "./utils/saveToStorage";

export function useLegendaryObjectsBuilder() {
    const builder = useBuilder<MagicalObject>({
        getInitialState: loadFromStorage,
        onAction: saveToStorage,
    });

    const available = useMemo(() => {
        return calculateAvailable({
            allItems: legendary,
            builderState: builder.state,
        });
    }, [builder.state]);

    return useMemo(() => ({
        state: {
            used: builder.state.used,
            preferred: builder.state.preferred,
            available,
        },
        actions: {
            clearUsed: builder.clearUsed,
            clearPreferred: builder.clearPreferred,
            removeFromUsed: builder.removeFromUsed,
            preferredToUsed: builder.preferredToUsed,
            preferredToAvailable: builder.preferredToAvailable,
            availableToUsed: builder.availableToUsed,
            availableToPreferred: builder.availableToPreferred,
        }
    }), [builder.state, available]);
}
