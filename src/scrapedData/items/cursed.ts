export const cursed = [
    {
        code: "hungry_grass",
        name: "Hungry grass",
        description: [
            "Healing Orbs grant DMG +1",
            "Stacks are lost at Death's Door",
        ],
    },
    {
        code: "fast-walker_boots",
        name: "Fast-walker Boots",
        description: [
            "+20% Move Speed, -25 ARMOR",
        ],
    },
    {
        code: "cauldron_of_dyrnwch",
        name: "Cauldron of Dyrnwch",
        description: [
            "VITALITY +60, all healings are reduced by 25%",
        ],
    },
    {
        code: "mad_hat",
        name: "Mad Hat",
        description: [
            "Taking damage earns 10% of their value as Dream Shards",
        ],
    },
    {
        code: "hope_diamond",
        name: "Hope Diamond",
        description: [
            "Increases all Dream Shard gains by +50% but lose all Dream Shards at Death's Door",
        ],
    },
    {
        code: "witch's_broom",
        name: "Witch's Broom",
        description: [
            "DASH makes the Hero INTANGIBLE but any damage taken is increased by +15%",
        ],
    },
    {
        code: "oni_mask",
        name: "Oni Mask",
        description: [
            "DMG +15 for each Cursed Magical Object",
            "ARMOR -10 for each Legendary Magical Object",
        ],
    },
    {
        code: "black_lotus",
        name: "Black Lotus",
        description: [
            "ATTACK gains +5% Lifesteal but Healing Orbs don't affect you anymore",
        ],
    },
    {
        code: "nightmare_ichor",
        name: "Nightmare ichor",
        description: [
            "SPECIAL deals +100% damage but has a +50% increased cooldown",
        ],
    },
    {
        code: "nightmare_thorn",
        name: "Nightmare Thorn",
        description: [
            "POWER deals +100% damage but has a +50% increased cooldown",
        ],
    },
    {
        code: "baba_yaga's_mortar",
        name: "Baba Yaga's Mortar",
        description: [
            "Prevents lethal damage and restores all health instead (only works once)",
        ],
    },
    {
        code: "bloody_mary's_mirror",
        name: "Bloody Mary's Mirror",
        description: [
            "Gain +0.5 DMG per VITALITY point (currently: +0.0)",
            "VITALITY now increases Maximum Health by only 0.5% per point (from 1%)",
        ],
    },
    {
        code: "balor's_eye",
        name: "Balor's eye",
        description: [
            "POWER and SPECIAL extra charges are removed to get +100% damage per extra charge to those abilities",
        ],
    },
] as const;
