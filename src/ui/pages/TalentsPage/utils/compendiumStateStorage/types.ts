export type StorableCompendiumHeroState = {
    rank: number;
}

export type SerializedCompendiumState = {
    heroes: Record<string, SerializedCompendiumHeroState>;
}

export type SerializedCompendiumHeroState = {
    rank: number;
}
