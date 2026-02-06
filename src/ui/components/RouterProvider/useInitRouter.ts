import { usePatchHistoryApi } from "./usePatchHistoryApi";
import { useInitHistoryListeners } from "./useInitHistoryListeners";

type Params = {
    onLocationChange: (location: string) => void;
}

export function useInitRouter({
    onLocationChange
}: Params) {
    usePatchHistoryApi();
    useInitHistoryListeners({ 
        onLocationChange 
    });
}
