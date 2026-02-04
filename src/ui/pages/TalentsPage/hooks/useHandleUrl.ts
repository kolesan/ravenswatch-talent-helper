import { useEffect } from "preact/hooks";

import { HeroCode } from "../../../../data/heroes";
import { TalentsPageView } from "../talentsPageViews";

type Params = {
    url: {
        hero?: HeroCode;
        view?: TalentsPageView;
    };
    state: {
        hero: HeroCode;
        view: TalentsPageView;
    }
    updateStateHero: (hero: HeroCode) => void;
    updateStateView: (view: TalentsPageView) => void;
    updateUrl: (update: UrlUpdate) => void;
}

type UrlUpdate = {
    hero: HeroCode;
    view: TalentsPageView;
}

export function useHandleUrl({
    url,
    state,
    updateStateHero,
    updateStateView,
    updateUrl,
}: Params) {
    useEffect(() => {
        let urlHeroUpdate: HeroCode | undefined = undefined;
        let urlViewUpdate: TalentsPageView | undefined = undefined;

        if (!url.hero) {
            urlHeroUpdate = state.hero;
        } else if (url.hero !== state.hero) {
            updateStateHero(url.hero);
        }
        
        if (!url.view) {
            urlViewUpdate = state.view;
        } else if (url.view !== state.view) {
            updateStateView(url.view);
        }

        if (urlHeroUpdate || urlViewUpdate) {
            updateUrl({ 
                hero: urlHeroUpdate || url.hero || state.hero, 
                view: urlViewUpdate || url.view || state.view,
            });
        }
    }, [url.hero, url.view]);
}
