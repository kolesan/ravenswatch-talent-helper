export type MagicalObject = {
    code: string;
    name: string;
    description: string[];
    preferred?: boolean;
};

export type SerializedMagicalObject = {
    code: string;
    preferred?: boolean;
};

export type MagicalObjectType = "legendary" | "cursed";
