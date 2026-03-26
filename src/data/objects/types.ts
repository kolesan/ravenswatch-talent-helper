export type MagicalObject = {
    type: MagicalObjectType;
    code: string;
    name: string;
    description: string[];
};

export type MagicalObjectType = "legendary" | "cursed";
