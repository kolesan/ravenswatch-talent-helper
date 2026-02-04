import { Hero } from "../../../../data/heroes";
import { TalentsPageView, talentsPageViews } from "../talentsPageViews";

export function calculatePageTitle(
    hero: Hero | undefined,
    view: TalentsPageView | undefined,
) {
    const heroName = hero?.name;
    const viewName = getViewName(view);

    return heroName 
        ? viewName
            ? `Talents: ${heroName} | ${viewName}`
            : `Talents: ${heroName}`
        : `Talents`;
}

function getViewName(view: TalentsPageView | undefined) {
    return talentsPageViews.find(it => it.value === view)?.label;
}
