import { useRouter } from "ui/components/RouterProvider/RouterProvider";
import { pages } from "ui/pages";
import { heroes } from "ui/uiData/heroes/heroes";

import { isTalentsPageView } from "../talentsPageViews";

export function useTalentsPageUrlParams() {
    const location = useRouter();

    const { hero, view } = pages.talents.deconstructPath(location);

    return {
        hero: hero ? heroes.utils.findByCode(hero) : undefined,
        view: isTalentsPageView(view) ? view : undefined,
    }
}
