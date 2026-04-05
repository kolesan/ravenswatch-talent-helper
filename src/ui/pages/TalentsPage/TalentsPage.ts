import { html } from "htm/preact";

import { Spinner } from "ui/components/Spinner/Spinner";
import { hst } from "ui/core/hst";
import { usePageTitle } from "ui/hooks/usePageTitle";
import { pages } from "ui/pages";
import { Hero } from "ui/uiData/heroes/types";

import { useHandleTalentsPageUrlChange } from "./hooks/useHandleTalentsPageUrlChange";
import { useTalentsPageUrlParams } from "./hooks/useTalentsPageUrlParams";
import { TalentsPageContent } from "./TalentsPageContent";
import { TalentsPageView } from "./talentsPageViews";
import { calculatePageTitle } from "./utils/calculatePageTitle";

export function TalentsPage() {
    const {
        hero: urlHero,
        view: urlView,
    } = useTalentsPageUrlParams();

    usePageTitle(calculatePageTitle(urlHero, urlView));

    useHandleTalentsPageUrlChange(urlHero, urlView);

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
