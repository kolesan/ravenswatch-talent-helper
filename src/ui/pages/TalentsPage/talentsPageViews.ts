export type TalentsPageView = typeof talentsPageViews[number]["value"];

export const talentsPageViews = [{
    value: "builder",
    label: "Builder",
}, {
    value: "compendium",
    label: "Compendium",
}] as const;

export function isTalentsPageView(value: unknown): value is TalentsPageView {
    return !!talentsPageViews.find(it => it.value === value);
}

export const defaultTalentsPageView = talentsPageViews[0].value;
