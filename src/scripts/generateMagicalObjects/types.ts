import { MagicalObjectType } from "../../types";

export type PasstechItem = {
    id: string;
    name: string;
    description: string;
    effect: string | null;
    quality: number;
    quality_name: "Common" | "Rare" | "Epic" | "Legendary" | "Cursed";
    icon: string;
}

export type ParsedPasstechItem = {
    name: string;
    code: string;
    type: MagicalObjectType | undefined;
    description: string[];
};
