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
    updateState: (update: Update) => void;
    updateUrl: (update: Update) => void;
}

type Update = {
    heroCode: HeroCode;
    view: TalentsPageView;
}

export function useHandleUrl({
    url,
    state,
    updateState,
    updateUrl,
}: Params) {
    useEffect(() => {
        let urlHeroUpdate: HeroCode | undefined = undefined;
        let urlViewUpdate: TalentsPageView | undefined = undefined;

        let stateHeroUpdate: HeroCode | undefined = undefined;
        let stateViewUpdate: TalentsPageView | undefined = undefined;

        if (!url.heroCode) {
            urlHeroUpdate = state.heroCode;
        } else if (url.heroCode !== state.heroCode) {
            stateHeroUpdate = url.heroCode;
        }
        
        if (!url.view) {
            urlViewUpdate = state.view;
        } else if (url.view !== state.view) {
            stateViewUpdate = url.view;
        }

        if (urlHeroUpdate || urlViewUpdate) {
            updateUrl({ 
                heroCode: urlHeroUpdate || url.heroCode || state.heroCode, 
                view: urlViewUpdate || url.view || state.view,
            });
        }

        if (stateHeroUpdate || stateViewUpdate) {
            updateState({ 
                heroCode: stateHeroUpdate || state.heroCode, 
                view: stateViewUpdate || state.view,
            });
        }
    }, [url.heroCode, url.view]);
}
