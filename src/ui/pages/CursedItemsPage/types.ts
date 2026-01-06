export type CursedItemsPageState = {
    used: Item[];
    preferred: Item[];
};

export type Item = {
    code: string;
    name: string;
    description: string[];
};

export type SerializedCursedItemsPageState = {
    used: string[];
    preferred: string[];
};

export type DerivedCursedItemsPageState = {
    available: Item[];
};
