export type ParsedPasstechItem = {
    type: ParsedPasstechItemType | undefined;
    code: string;
    name: string;
    description: string[];
    iconUrl: string;
};

export type ParsedPasstechItemType = "legendary" | "cursed";

export type LegendaryParsedPasstechItem = Omit<ParsedPasstechItem, "type"> & {
    type: "legendary";
}

export type CursedParsedPasstechItem = Omit<ParsedPasstechItem, "type"> & {
    type: "cursed";
}
