export type LegendaryItemsPageState = {
    used: Item[];
    preferred: Item[];
};

export type Item = {
    code: string;
    name: string;
    description: string[];
};

export type SerializedLegendaryItemsPageState = {
    used: string[];
    preferred: string[];
};

export type DerivedLegendaryItemsPageState = {
    available: Item[];
};
