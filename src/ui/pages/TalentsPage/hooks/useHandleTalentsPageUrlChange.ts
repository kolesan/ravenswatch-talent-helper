import { useEffect } from "preact/hooks";

import { hst } from "ui/core/hst";
import { pages } from "ui/pages";
import { Hero } from "ui/uiData/heroes/types";

import { TalentsPageView } from "../talentsPageViews";
import { talentsPageUrlParamsStorage } from "../utils/talentsPageUrlParamsStorage/talentsPageUrlParamsStorage";

export function useHandleTalentsPageUrlChange(
    urlHero: Hero | undefined, 
    urlView: TalentsPageView | undefined
) {
    useEffect(() => {
        // Load stored params for later comparison
        const storedUrlParams = talentsPageUrlParamsStorage.get();

        const storedUrlHero = storedUrlParams.hero;
        const storedUrlView = storedUrlParams.view;

        // Store new url params if different from old ones
        if (
            urlHero?.code && urlHero.code !== storedUrlHero.code
            || urlView && urlView !== storedUrlView
        ) {
            talentsPageUrlParamsStorage.set({ 
                hero: urlHero || storedUrlHero, 
                view: urlView || storedUrlView,
            });
        }

        // If hero or view are missing from url params
        // we do a "redirect" (history replace) to a fully correct url
        // with stored params used instead of missing ones
        if (!urlHero || !urlView) {
            const newPath = pages.talents.constructPath({
                hero: (urlHero || storedUrlHero).code, 
                view: urlView || storedUrlView,
            });
            hst.replace(newPath);
        }
    }, [urlHero?.code, urlView]);
}
