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
        console.log("Loading stored params", {
            hero: storedParams.hero.code, 
            view: storedParams.view
        });
        return storedParams;
    }, [urlHero?.code, urlView]);

    const storedUrlHero = storedUrlParams.hero;
    const storedUrlView = storedUrlParams.view;

    // Store new url params if different from old ones
    useEffect(() => {
        console.log("Url params change detected. Checking if need to save params to storage");
        if (
            urlHero?.code && urlHero.code !== storedUrlHero.code
            || urlView && urlView !== storedUrlView
        ) {
            const paramsToStore = { 
                hero: urlHero || storedUrlHero, 
                view: urlView || storedUrlView,
            };
            console.log("Saving new url params to storage:", {
                hero: paramsToStore.hero.code, 
                view: paramsToStore.view
            });
            talentsPageUrlParamsStorage.set(paramsToStore);
        }
    }, [urlHero?.code, urlView]);

    // If hero or view are missing from url params
    // we do a "redirect" (history replace) to a fully correct url
    // with stored params used instead of missing ones
    useEffect(() => {
        console.log("Url params change detected. Checking if redirect is needed");
        if (!urlHero || !urlView) {
            const newPathParams = {
                hero: (urlHero || storedUrlHero).code, 
                view: urlView || storedUrlView,
            };
            const newPath = pages.talents.constructPath(newPathParams);
            console.log("Redirecting to:", { url: newPath}, newPathParams);
            hst.replace(newPath);
        }
    }, [urlHero?.code, urlView]);
}
