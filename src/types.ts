export type MagicalObject = {
    type: "legendary" | "cursed";
    code: string;
    name: string;
    description: string[];
    preferred?: boolean;
};

export type SerializedMagicalObject = {
    code: string;
    preferred?: boolean;
};
