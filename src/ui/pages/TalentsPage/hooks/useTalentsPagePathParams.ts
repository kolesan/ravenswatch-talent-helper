import { heroes } from "../../../../finalData/finalData";
import { useRouter } from "../../../components/RouterProvider/RouterProvider";
import { isTalentsPageView } from "../talentsPageViews";

export function useTalentsPagePathParams() {
    const location = useRouter();

    const [_, __, hero, view] = location.split("/");

    return {
        hero: hero ? heroes.utils.findByCode(hero) : undefined,
        view: isTalentsPageView(view) ? view : undefined,
    }
}
