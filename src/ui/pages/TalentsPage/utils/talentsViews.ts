import { talentsPageViews, TalentsPageView } from "../talentsPageViews";

type TalentsViews = {
    current: TalentsPageView;
}

// A global store for restoring url state 
// when user switches to other page and back
export const talentsViews: TalentsViews = {
    current: talentsPageViews[0].value,
}
