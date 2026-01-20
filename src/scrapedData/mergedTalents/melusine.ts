import { Talent } from "../../scripts/extractTalents/types";

export const melusine: Talent[] = [
    {
        "code": "spring_water",
        "name": "Spring Water",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Special_Heal.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "Each wave from {sk}SPECIAL{/s} that hits an enemy restores {si}2.0{/s} Health to all Heroes within the area of effect"
        ],
        "improvements": [
            [
                "2.0"
            ],
            [
                "2.5"
            ],
            [
                "3.0"
            ],
            [
                "3.5"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "deep_beat",
        "name": "Deep Beat",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Attack_Beat.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "For every {sk}4 ATTACKS{/s} that hit an enemy, generate a blast all around that deals {si}100%{/s} of {sk}ATTACK{/s}'s damage",
            "Counter resets when exiting {sk}SING STANCE{/s}"
        ],
        "improvements": [
            [
                "100%"
            ],
            [
                "120%"
            ],
            [
                "140%"
            ],
            [
                "160%"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "underwater_predation",
        "name": "Underwater Predation",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Defense_Hold.png",
        "type": "starting",
        "unlockedAtRank": 2,
        "description": [
            "Hold {sk}DEFENSE{/s} to move quickly underwater. All enemies passed become {sk}VULNERABLE{/s} for {si}4{/s} seconds"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "sea_dance",
        "name": "Sea Dance",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Trait_Teleport.png",
        "type": "starting",
        "unlockedAtRank": 5,
        "description": [
            "In {sk}SING STANCE{/s}, the {sk}CONTEXTUAL ACTION{/s} allows for quick teleportation to the {sk}WISP{/s} ({sk}5{/s} seconds cooldown)",
            "Performing this action in combat restores {si}8{/s} health to all nearby Heroes"
        ],
        "improvements": [
            [
                "8"
            ],
            [
                "10"
            ],
            [
                "12"
            ],
            [
                "14"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "power_dive",
        "name": "Power Dive",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Defense_Power.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}DEFENSE{/s} triggers {sk}POWER{/s}'s effect with a {si}+20%{/s} damage increase when Melusine dives underwater"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "aftershock",
        "name": "Aftershock",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Power_Core.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}POWER{/s} leaves a water core at the casting location that triggers {sk}POWER{/s} again after {sk}1.5{/s} seconds for {si}40%{/s} of its damage"
        ],
        "improvements": [
            [
                "40%"
            ],
            [
                "50%"
            ],
            [
                "60%"
            ],
            [
                "70%"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "protective_flow",
        "name": "Protective Flow",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Attack_Shield.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Heroes passed by {sk}ATTACK{/s} gain {si}8{/s} {sk}SHIELD{/s} for {sk}6{/s} seconds"
        ],
        "improvements": [
            [
                "8"
            ],
            [
                "10"
            ],
            [
                "12"
            ],
            [
                "14"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "water_bubble",
        "name": "Water Bubble",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Defense_Block.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "After {sk}DEFENSE{/s} is triggered, Melusine is surrounded by a bubble for {sk}4{/s} seconds, absorbing damage for one hit",
            "The bubble then explodes and deals {si}60{/s} area damage"
        ],
        "improvements": [
            [
                "60"
            ],
            [
                "75"
            ],
            [
                "90"
            ],
            [
                "105"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "freezing_splash",
        "name": "Freezing Splash",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Power_Chill.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}POWER{/s} applies {sk}CHILLED{/s} to all enemies hit and gains {si}+15%{/s} range"
        ],
        "improvements": [
            [
                "+15%"
            ],
            [
                "+20%"
            ],
            [
                "+25%"
            ],
            [
                "+30%"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "backwash",
        "name": "Backwash",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Special_Backwards.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "When {sk}SPECIAL{/s} ends, add {sk}3{/s} additional waves that travel backwards and deal {si}50%{/s} damage each"
        ],
        "improvements": [
            [
                "50%"
            ],
            [
                "65%"
            ],
            [
                "80%"
            ],
            [
                "95%"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "bewitching_song",
        "name": "Bewitching Song",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Trait_Weakens.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "When entering {sk}SING STANCE{/s}, apply {sk}WEAK{/s} to all nearby enemies for {si}3{/s} seconds"
        ],
        "improvements": [
            [
                "3"
            ],
            [
                "4"
            ],
            [
                "5"
            ],
            [
                "6"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "tidal_wave",
        "name": "Tidal Wave",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Special_Large_Waves.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}SPECIAL{/s}'s waves are {si}20%{/s} wider and longer"
        ],
        "improvements": [
            [
                "20%"
            ],
            [
                "25%"
            ],
            [
                "30%"
            ],
            [
                "35%"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "submerging_attack",
        "name": "Submerging Attack",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Attack_Amplifies.png",
        "type": "standard",
        "unlockedAtRank": 2,
        "description": [
            "{sk}ATTACK{/s} damage increases by {si}8%{/s} for each enemy hit (up to {sk}6{/s} hits, {si}+48%{/s})",
            "Resets if Melusine takes damage or exits {sk}SING STANCE{/s}"
        ],
        "improvements": [
            [
                "8%",
                "+48%"
            ],
            [
                "9%",
                "+54%"
            ],
            [
                "10%",
                "+60%"
            ],
            [
                "11%",
                "+66%"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "geyser",
        "name": "Geyser",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Power_Geyser.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "{sk}POWER{/s} deals {si}+50%{/s} damage at its center"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "water_communion",
        "name": "Water Communion",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Defense_Improve_Special.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "{sk}DEFENSE{/s} removes {sk}SPECIAL{/s}'s cooldown and increases next {sk}SPECIAL{/s}'s damage within {sk}3{/s} seconds by {si}+40%{/s}"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "soothing_presence",
        "name": "Soothing Presence",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Passive_Heal_In_Combat.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "When in combat, passively heal {si}4{/s} Hit Points for all Heroes in the area every {sk}5{/s} seconds"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "razor_tail",
        "name": "Razor Tail",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Defense_Deals_Damage.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "{sk}DEFENSE{/s} makes Melusine strike with her tail, dealing {si}400%{/s} of {sk}ATTACK{/s} damage"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "wisp_surge",
        "name": "Wisp Surge",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Attack_Speed.png",
        "type": "standard",
        "unlockedAtRank": 5,
        "description": [
            "After casting {sk}SPECIAL{/s}, gain {si}+40%{/s} {sk}ATTACK SPEED{/s} for {sk}3{/s} seconds"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "final_burst",
        "name": "Final Burst",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Passive_Detonation.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "After {sk}3{/s} successful attacks, {sk}WISP{/s} explodes when it disappears, dealing {si}40{/s} area damage"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "waterlogging",
        "name": "Waterlogging",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Special_Growth.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "{sk}WISP{/s} gains {sk}2{/s} growth charges for each wave of {sk}SPECIAL{/s} that hits it (up to a maximum of {sk}12{/s} charges)",
            "Each charge increases the damage of the {sk}ATTACK{/s} by {si}20%{/s}, with each {sk}ATTACK{/s} consuming one charge"
        ],
        "improvements": [
            [
                "20%"
            ],
            [
                "25%"
            ],
            [
                "30%"
            ],
            [
                "35%"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "shimmering_scales",
        "name": "Shimmering Scales",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Trait_Armor.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "In {sk}SING STANCE{/s}, Melusine gains temporary {si}+4{/s} {sk}ARMOR{/s} every second, up to a maximum of {si}40{/s}"
        ],
        "improvements": [
            [
                "+4",
                "40"
            ],
            [
                "+6",
                "60"
            ],
            [
                "+8",
                "80"
            ],
            [
                "+10",
                "100"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "enduring_wisp",
        "name": "Enduring Wisp",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Passive_Auto_Wisp.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "When Melusine leaves the {sk}SING STANCE{/s}, {sk}WISP{/s} remains active and automatically attacks surrounding enemies up to {si}4{/s} times before then disappearing"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "vortex_bomb",
        "name": "Vortex Bomb",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Ultimate_1_Vortex.png",
        "type": "final",
        "unlockedAtRank": 1,
        "description": [
            "{sk}ULTIMATE{/s}'s water sphere attracts nearby enemies and deals {si}40{/s} damage per second to enemies hit"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "crescendo",
        "name": "Crescendo",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Ultimate_2_Spawn_More.png",
        "type": "final",
        "unlockedAtRank": 6,
        "description": [
            "While {sk}ULTIMATE{/s} is channeled, Melusine gradually summons up to {si}3{/s} additional {sk}WISPS{/s}"
        ],
        "improvements": [
            [
                "3"
            ],
            [
                "4"
            ],
            [
                "5"
            ],
            [
                "6"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "healing_blast",
        "name": "Healing Blast",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Ultimate_1_Heal.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "{sk}ULTIMATE{/s} explosion restores {si}60{/s} health to all Heroes around and grants them {sk}REGENERATION{/s} {sk}+5{/s}"
        ],
        "improvements": [
            [
                "60"
            ],
            [
                "75"
            ],
            [
                "90"
            ],
            [
                "105"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "overtone_singing",
        "name": "Overtone Singing",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/melusine/Skill_Ultimate_2_Sing_Stance_Wisp.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "When entering {sk}SING STANCE{/s}, Melusine casts an additional {sk}ULTIMATE{/s} autonomous {sk}WISP{/s} that deals {si}40%{/s} damage "
        ],
        "improvements": [
            [
                "40%"
            ],
            [
                "50%"
            ],
            [
                "60%"
            ],
            [
                "70%"
            ]
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    }
];