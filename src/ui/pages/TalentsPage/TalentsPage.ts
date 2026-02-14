import { html } from "htm/preact";
import { useEffect, useMemo } from "preact/hooks";

import { pages } from "../../../../pages";
import { Hero } from "../../../finalData/finalData";
import { Spinner } from "../../components/Spinner/Spinner";
import { hst } from "../../core/hst";
import { usePageTitle } from "../../hooks/usePageTitle";

import { useTalentsPageUrlParams } from "./hooks/useTalentsPageUrlParams";
import { TalentsPageContent } from "./TalentsPageContent";
import { TalentsPageView } from "./talentsPageViews";
import { calculatePageTitle } from "./utils/calculatePageTitle";
import { talentsPageUrlParamsStorage } from "./utils/talentsPageUrlParamsStorage/talentsPageUrlParamsStorage";

/**  
 * Cases to handle:
 * 1. We fresh load the talents page for the first time 
 * (TalentsPage get's mounted probably thats it in a nutshell?) 
 * by hitting refresh, navigating from other pages, etc.
 * The only state at this point is the local storage state and the url
 * 1.1 The url can be empty at this point or partially empty (no hero, no view)
 * 1.2 Or the url can be full with hero and view
 * 2. We catch a history event
 * 2.1 Pop history - back, forward browser buttons
 * 2.2 Push history - navigation with new history entry creation
 * 2.2.1 New hero is selected
 * 2.2.2 New view is selected
 * 2.3 Replace history - url fixes so the url has same state as the storage
 * 2.3.1 We catch a (partialy) empty url and want to fix it so it's full 
 * and matches stored state. Do we want a rerender in such cases? 
 * This should probably only be considered on initial mount. However there is a case
 * where user is on the talent's page with proper url and he clicks on the logo
 * or the talents nav item and as a result get's redirected to / or to /talents
 * 
 * 3. Corner cases to think about
 * 3.1 bad hero code in url
 * 3.2 bad view code in url
 * 3.3 missing hero code
 * 3.4 missing view code
 */
export function TalentsPage() {
    console.log("============== TalentsPage rendering ================");

    const urlParams = useTalentsPageUrlParams();

    const urlHero = urlParams.hero;
    const urlView = urlParams.view;

    usePageTitle(calculatePageTitle(urlHero, urlView));

    // On mount and on subsequent renders:
    // If url params change we load stored params for later comparison
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

    // On mount and on subsequent renders:
    // If url changes and contains params that differ from stored ones
    // store the new params
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

    // Display a spinner if we do not have a hero or a view from the url
    // after redirect to full url with hero and view from storage show content
    if (!urlHero || !urlView) {
        return html`<${Spinner} />`;
    }

    // TODO: Consider loading rank and talents state here and not in TalentsPageContent
    // so that all loading is handled in one place
    return html`
        <${TalentsPageContent}
            hero=${urlHero}
            view=${urlView}
            onHeroChange=${(newHero: Hero) => {
                hst.push(pages.talents.constructPath({ 
                    hero: newHero.code, 
                    view: urlView 
                }));
            }}
            onViewChange=${(newView: TalentsPageView) => {
                hst.push(pages.talents.constructPath({ 
                    hero: urlHero.code, 
                    view: newView 
                }));
            }}
        />
    `;
}
