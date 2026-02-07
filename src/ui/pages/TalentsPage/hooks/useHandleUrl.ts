import { useEffect } from "preact/hooks";

import { HeroCode } from "../../../../data/heroes";
import { TalentsPageView } from "../talentsPageViews";

type Params = {
    url: {
        heroCode?: HeroCode;
        view?: TalentsPageView;
    };
    state: {
        heroCode: HeroCode;
        view: TalentsPageView;
    }
    updateUrl: (update: Update) => void;
}

type Update = {
    heroCode: HeroCode;
    view: TalentsPageView;
}

export function useHandleUrl({
    url,
    state,
    updateUrl,
}: Params) {
    useEffect(() => {
        if (!url.heroCode || !url.view) {
            updateUrl({ 
                heroCode: url.heroCode || state.heroCode, 
                view: url.view || state.view,
            });
        }
    }, [url.heroCode, url.view]);
}
