import { Talent } from "../../scripts/extractTalents/types";

export const beowulf: Talent[] = [
    {
        "code": "explosive_fire",
        "name": "Explosive Fire",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Crimson_Fire.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "{sk}IGNITED{/s} enemies explode when they die, dealing {si}20{/s} damage and applying {sk}IGNITE{/s} to all nearby enemies"
        ],
        "improvements": [
            [
                "20"
            ],
            [
                "25"
            ],
            [
                "30"
            ],
            [
                "35"
            ]
        ]
    },
    {
        "code": "shield_charge",
        "name": "Shield Charge",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Defense_Dash.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "{sk}DEFENSE{/s} makes Beowulf dash forward and deal {si}+100%{/s} damage along the path"
        ],
        "improvements": [
            [
                "+100%"
            ],
            [
                "+125%"
            ],
            [
                "+150%"
            ],
            [
                "+175%"
            ]
        ]
    },
    {
        "code": "rampart",
        "name": "Rampart",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Defense_Quest.png",
        "type": "starting",
        "unlockedAtRank": 2,
        "description": [
            "{sk}Quest (x20):{/s} Blocking at least one attack during {sk}DEFENSE{/s} grants {sk}+1 ARMOR{/s}",
            "{sk}Complete{/s}: {sk}Wyrm DEFENSE{/s} heals {si}50%{/s} more in a larger radius"
        ],
        "improvements": [
            [
                "50%"
            ],
            [
                "60%"
            ],
            [
                "70%"
            ],
            [
                "80%"
            ]
        ]
    },
    {
        "code": "draconic_binds",
        "name": "Draconic Binds",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Trait_Quest.png",
        "type": "starting",
        "unlockedAtRank": 5,
        "description": [
            "{sk}Quest (x20):{/s} Hitting {sk}2{/s} enemies with a single {sk}Wyrm ability{/s} grants {sk}+0.5 DMG{/s}",
            "{sk}Complete{/s}: {sk}TRAIT{/s} cooldown {sk}-25%{/s}, {sk}Wyrm abilities{/s} deal {si}+10%{/s} damage"
        ],
        "improvements": [
            [
                "+10%"
            ],
            [
                "+15%"
            ],
            [
                "+20%"
            ],
            [
                "+25%"
            ]
        ]
    },
    {
        "code": "eruption",
        "name": "Eruption",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Power_End_AOE.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}POWER{/s}'s shockwaves explode at the end and deal {si}60%{/s} additional damage all around"
        ],
        "improvements": [
            [
                "60%"
            ],
            [
                "75%"
            ],
            [
                "90%"
            ],
            [
                "105%"
            ]
        ]
    },
    {
        "code": "breath_of_fire",
        "name": "Breath of Fire",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Attack_Fire_Cone.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Wyrm breathes a cone of fire during {sk}ATTACK{/s} finisher, dealing {si}200%{/s} damage and applying {sk}IGNITE{/s} to enemies hit"
        ],
        "improvements": [
            [
                "200%"
            ],
            [
                "250%"
            ],
            [
                "300%"
            ],
            [
                "350%"
            ]
        ]
    },
    {
        "code": "fiery_seismo",
        "name": "Fiery Seismo",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Special_Multi_Shock.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}Wyrm SPECIAL{/s}'s finisher strikes {sk}3{/s} times with a growing radius for {si}45%{/s} damage each"
        ],
        "improvements": [
            [
                "45%"
            ],
            [
                "50%"
            ],
            [
                "55%"
            ],
            [
                "60%"
            ]
        ]
    },
    {
        "code": "blademaster",
        "name": "Blademaster",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Attack_Speed.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "After each {sk}TRAIT{/s} activation, next {sk}3 ATTACKS{/s} gain {sk}+100%{/s} Crit Chance",
            "Permanently gain {si}+10%{/s} {sk}ATTACK{/s} speed"
        ],
        "improvements": [
            [
                "+10%"
            ],
            [
                "+12%"
            ],
            [
                "+14%"
            ],
            [
                "+16%"
            ]
        ]
    },
    {
        "code": "heavy_strikes",
        "name": "Heavy Strikes",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Attack_Wide.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}ATTACK{/s} is slower but cleaves across a wide area and deals {si}+50%{/s} damage"
        ],
        "improvements": [
            [
                "+50%"
            ],
            [
                "+60%"
            ],
            [
                "+70%"
            ],
            [
                "+80%"
            ]
        ]
    },
    {
        "code": "bladestorm",
        "name": "Bladestorm",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Special_Loop.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}SPECIAL{/s} spins {si}2{/s} more time(s) for {sk}100%{/s} damage each"
        ],
        "improvements": [
            [
                "2"
            ],
            [
                "3"
            ],
            [
                "4"
            ],
            [
                "5"
            ]
        ]
    },
    {
        "code": "double_shock",
        "name": "Double Shock",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Power_Double.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}POWER{/s} sends out two successive shockwaves, each one dealing <span class=\"degradation\">-30%{/s} damage"
        ],
        "improvements": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "furnace",
        "name": "Furnace",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Passive_Better_Ignite.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}IGNITE{/s} effects last {sk}2{/s} more seconds and deal {si}+32%{/s} damage"
        ],
        "improvements": [
            [
                "+32%"
            ],
            [
                "+40%"
            ],
            [
                "+48%"
            ],
            [
                "+56%"
            ]
        ]
    },
    {
        "code": "blazing_runes",
        "name": "Blazing Runes",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Attack_Special_Crit.png",
        "type": "standard",
        "unlockedAtRank": 2,
        "description": [
            "{sk}ATTACK{/s} and {sk}SPECIAL{/s} gain {si}+40%{/s} Crit Chance against {sk}IGNITED{/s} enemies"
        ],
        "improvements": [
            [
                "+40%"
            ],
            [
                "+50%"
            ],
            [
                "+60%"
            ],
            [
                "+70%"
            ]
        ]
    },
    {
        "code": "scorched_earth",
        "name": "Scorched Earth",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Power_Trail.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "{sk}Wyrm POWER{/s} leaves a trail of fire that deals {si}40{/s} damage over time to enemies standing on it"
        ],
        "improvements": [
            [
                "40"
            ],
            [
                "50"
            ],
            [
                "60"
            ],
            [
                "70"
            ]
        ]
    },
    {
        "code": "fire_wings",
        "name": "Fire Wings",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Trait_AOE.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "Activating {sk}TRAIT{/s} deals {si}30{/s} damage all around and applies {sk}IGNITE{/s} to all enemies hit"
        ],
        "improvements": [
            [
                "30"
            ],
            [
                "35"
            ],
            [
                "40"
            ],
            [
                "45"
            ]
        ]
    },
    {
        "code": "retaliation",
        "name": "Retaliation",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Attack_Flurry.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "After using {sk}DEFENSE{/s}, the next {sk}ATTACK{/s} within {sk}2{/s} seconds triggers a two-strike retaliation, with each one dealing {si}360%{/s} damage"
        ],
        "improvements": [
            [
                "360%"
            ],
            [
                "450%"
            ],
            [
                "540%"
            ],
            [
                "630%"
            ]
        ]
    },
    {
        "code": "sparkling_shield",
        "name": "Sparkling Shield",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Defense_Block_Deals_Damage.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "Each attack blocked during {sk}DEFENSE{/s} inflicts {si}120%{/s} of blocked damage to what is in front of Beowulf."
        ],
        "improvements": [
            [
                "120%"
            ],
            [
                "150%"
            ],
            [
                "180%"
            ],
            [
                "210%"
            ]
        ]
    },
    {
        "code": "fiery_slash",
        "name": "Fiery Slash",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Dash_Attack.png",
        "type": "standard",
        "unlockedAtRank": 5,
        "description": [
            "{sk}ATTACK{/s} triggered right after {sk}DASH{/s} deals {si}400%{/s} damage and applies {sk}IGNITE{/s} to enemies"
        ],
        "improvements": [
            [
                "400%"
            ],
            [
                "500%"
            ],
            [
                "600%"
            ],
            [
                "700%"
            ]
        ]
    },
    {
        "code": "secondary_tremor",
        "name": "Secondary Tremor",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Special_Sends_Power.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "{sk}SPECIAL{/s} sends out a Shockwave, dealing {si}120%{/s} of {sk}POWER{/s} damage"
        ],
        "improvements": [
            [
                "120%"
            ],
            [
                "150%"
            ],
            [
                "180%"
            ],
            [
                "210%"
            ]
        ]
    },
    {
        "code": "battle_cry",
        "name": "Battle Cry",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Trait_Battlecry.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "Activating {sk}TRAIT{/s} clears {sk}POWER{/s} cooldown for all Heroes in the area and gives them a {si}12{/s} {sk}SHIELD{/s} for {sk}6{/s} seconds"
        ],
        "improvements": [
            [
                "12"
            ],
            [
                "15"
            ],
            [
                "18"
            ],
            [
                "21"
            ]
        ]
    },
    {
        "code": "furious_blows",
        "name": "Furious Blows",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Attack_After_Special.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "After a {sk}SPECIAL{/s}, the next {sk}ATTACK{/s} triggers a series of {sk}3{/s} strikes dealing {si}100%{/s} damage each",
            "If the {sk}SPECIAL{/s} was reinforced by the {sk}Wyrm{/s}, the attacks apply an {sk}IGNITE{/s} status to enemies and inflict {sk}+50%{/s} damage"
        ],
        "improvements": [
            [
                "100%"
            ],
            [
                "125%"
            ],
            [
                "150%"
            ],
            [
                "175%"
            ]
        ]
    },
    {
        "code": "runes_of_war",
        "name": "Runes of War",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Defense_Damage_Aura.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "After hitting an enemy with {sk}DEFENSE{/s}, runes appear around Beowulf dealing {si}16{/s} area damage per second for {sk}5{/s} seconds"
        ],
        "improvements": [
            [
                "16"
            ],
            [
                "20"
            ],
            [
                "24"
            ],
            [
                "28"
            ]
        ]
    },
    {
        "code": "immolation",
        "name": "Immolation",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Ultimate_1_Immolation.png",
        "type": "final",
        "unlockedAtRank": 1,
        "description": [
            "During {sk}ULTIMATE{/s}, Beowulf deals {si}40{/s} damage per second to nearby enemies, and all abilities function as if they were {sk}Wyrm Empowered{/s}"
        ],
        "improvements": [
            [
                "40"
            ],
            [
                "50"
            ],
            [
                "60"
            ],
            [
                "70"
            ]
        ]
    },
    {
        "code": "volcanic_rage",
        "name": "Volcanic Rage",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Ultimate_2_Volcanic.png",
        "type": "final",
        "unlockedAtRank": 6,
        "description": [
            "Each {sk}ULTIMATE{/s} fireball throws {si}4{/s} fiery rocks into the surrounding area, dealing {sk}50%{/s} damage each"
        ],
        "improvements": [
            [
                "4"
            ],
            [
                "5"
            ],
            [
                "6"
            ],
            [
                "7"
            ]
        ]
    },
    {
        "code": "sudden_growth",
        "name": "Sudden Growth",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Ultimate_1_Big_Wyrm.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "During {sk}ULTIMATE{/s}, the Wyrm grows and breathes fire in a wider zone, dealing {si}+20%{/s} damage "
        ],
        "improvements": [
            [
                "+20%"
            ],
            [
                "+25%"
            ],
            [
                "+30%"
            ],
            [
                "+35%"
            ]
        ]
    },
    {
        "code": "fireball",
        "name": "Fireball",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/beowulf/Skill_Ultimate_2_Fireball_Dash.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "In Combat, {sk}DASH{/s} makes the Wyrm throw a Fireball towards a close enemy, dealing {si}40{/s} area damage "
        ],
        "improvements": [
            [
                "40"
            ],
            [
                "50"
            ],
            [
                "60"
            ],
            [
                "70"
            ]
        ]
    }
];