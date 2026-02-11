import { useLayoutEffect } from "preact/hooks";

import { initHistoryListeners } from "./utils/initHistoryListeners";
import { patchHistoryApi } from "./utils/patchHistoryApi";

type Params = {
    onLocationChange: (location: string) => void;
}

export function useInitRouter({
    onLocationChange
}: Params) {
    useLayoutEffect(() => {
        patchHistoryApi(); 
        initHistoryListeners(onLocationChange);
    }, []);
}
