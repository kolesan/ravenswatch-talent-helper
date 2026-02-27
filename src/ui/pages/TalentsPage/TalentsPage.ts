import { html } from "htm/preact";

import { pages } from "../../../../pages";
import { Hero } from "../../../finalData/finalData";
import { Spinner } from "../../components/Spinner/Spinner";
import { hst } from "../../core/hst";
import { usePageTitle } from "../../hooks/usePageTitle";

import { useHandleTalentsPageUrl } from "./hooks/useHandleTalentsPageUrl";
import { useTalentsPageUrlParams } from "./hooks/useTalentsPageUrlParams";
import { TalentsPageContent } from "./TalentsPageContent";
import { TalentsPageView } from "./talentsPageViews";
import { calculatePageTitle } from "./utils/calculatePageTitle";

export function TalentsPage() {
    console.log("============== TalentsPage rendering ================");

    const {
        hero: urlHero,
        view: urlView,
    } = useTalentsPageUrlParams();

    usePageTitle(calculatePageTitle(urlHero, urlView));

    useHandleTalentsPageUrl(urlHero, urlView);

    if (!urlHero || !urlView) {
        return html`<${Spinner} />`;
    }

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
