import { pages } from "../../../../../pages";
import { heroes } from "../../../../finalData/finalData";
import { useRouter } from "../../../components/RouterProvider/RouterProvider";
import { isTalentsPageView } from "../talentsPageViews";

export function useTalentsPageUrlParams() {
    const location = useRouter();

    const { hero, view } = pages.talents.deconstructPath(location);

    console.log("useTalentsPageUrlParams", { url: location }, { hero, view });

    return {
        hero: hero ? heroes.utils.findByCode(hero) : undefined,
        view: isTalentsPageView(view) ? view : undefined,
    }
}
