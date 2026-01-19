import { useEffect } from "preact/hooks";

import { pages } from "../../../../../pages";
import { hst } from "../../../core/hst";

interface Params {
    heroCodeFromUrl?: string,
    heroCodeFromState: string,
}

export function useEmptyHeroRedirect({
    heroCodeFromUrl,
    heroCodeFromState,
}: Params) {
    useEffect(() => {
        if (!heroCodeFromUrl) {
            hst.replace(`${pages.talents.path}/${heroCodeFromState}`);
        }
    }, [heroCodeFromUrl]);
}
