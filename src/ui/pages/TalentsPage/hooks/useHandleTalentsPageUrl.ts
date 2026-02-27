import { useEffect, useMemo } from "preact/hooks";

import { pages } from "../../../../../pages";
import { Hero } from "../../../../finalData/finalData";
import { hst } from "../../../core/hst";
import { TalentsPageView } from "../talentsPageViews";
import { talentsPageUrlParamsStorage } from "../utils/talentsPageUrlParamsStorage/talentsPageUrlParamsStorage";

export function useHandleTalentsPageUrl(
    urlHero: Hero | undefined, 
    urlView: TalentsPageView | undefined
) {
    // Load stored params for later comparison
    const storedUrlParams = useMemo(() => {
        const storedParams = talentsPageUrlParamsStorage.get();
        return storedParams;
    }, [urlHero?.code, urlView]);

    const storedUrlHero = storedUrlParams.hero;
    const storedUrlView = storedUrlParams.view;

    // Store new url params if different from old ones
    useEffect(() => {
        if (
            urlHero?.code && urlHero.code !== storedUrlHero.code
            || urlView && urlView !== storedUrlView
        ) {
            const paramsToStore = { 
                hero: urlHero || storedUrlHero, 
                view: urlView || storedUrlView,
            };
            talentsPageUrlParamsStorage.set(paramsToStore);
        }
    }, [urlHero?.code, urlView]);

    // If hero or view are missing from url params
    // we do a "redirect" (history replace) to a fully correct url
    // with stored params used instead of missing ones
    useEffect(() => {
        if (!urlHero || !urlView) {
            const newPathParams = {
                hero: (urlHero || storedUrlHero).code, 
                view: urlView || storedUrlView,
            };
            const newPath = pages.talents.constructPath(newPathParams);
            hst.replace(newPath);
        }
    }, [urlHero?.code, urlView]);
}
