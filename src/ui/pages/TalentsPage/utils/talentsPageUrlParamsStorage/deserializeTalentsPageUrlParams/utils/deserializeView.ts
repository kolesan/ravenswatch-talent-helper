import {
    defaultTalentsPageView,
    isTalentsPageView,
    TalentsPageView,
} from "../../../../talentsPageViews";

export function deserializeView(
    view: unknown
): TalentsPageView {
    if (!isTalentsPageView(view)) {
        return defaultTalentsPageView;
    }
    return view;
}
