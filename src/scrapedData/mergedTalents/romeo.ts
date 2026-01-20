import { Talent } from "../../scripts/extractTalents/types";

export const romeo: Talent[] = [
    {
        "code": "kiss_the_bride",
        "name": "Kiss The Bride",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Special_Quest_Dream_Shard.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "{sk}Quest (x20):{/s} Hitting at least one enemy with {sk}SPECIAL{/s} grants {sk}+0.5{/s} {sk}Crit Chance{/s}",
            "{sk}Complete:{/s} Any enemy hit by {sk}SPECIAL{/s} has a {si}40%{/s} chance to grant Romeo {sk}2{/s} {sk}Dream Shard(s){/s}"
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
        ]
    },
    {
        "code": "panache",
        "name": "Panache",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Attack_Panache.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "Hitting an enemy with any additional {sk}ATTACK{/s} move, such as {sk}DASH{/s} attack or {sk}DEFENSE{/s}'s {sk}Ripost{/s}, grants one {sk}Panache token{/s} (up to {sk}3{/s}) ",
            "Each {sk}Panache token{/s} grants {sk}+5 DMG{/s} and {si}+4%{/s} {sk}ATTACK SPEED{/s}, all {sk}Panache tokens{/s} are lost when Romeo is hit"
        ],
        "improvements": [
            [
                "+4%"
            ],
            [
                "+5%"
            ],
            [
                "+6%"
            ],
            [
                "+7%"
            ]
        ]
    },
    {
        "code": "secret_weapon",
        "name": "Secret Weapon",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Defense_Quest.png",
        "type": "starting",
        "unlockedAtRank": 2,
        "description": [
            "{sk}Quest(x20):{/s} Blocking at least once during {sk}DEFENSE{/s} grants {sk}+0.5 DMG{/s}",
            "{sk}Complete:{/s} {sk}Ripost ATTACK{/s} after {sk}DEFENSE{/s} deals {si}+32%{/s} damage per successful block (up to {sk}3{/s} times)"
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
        "code": "ice_rose",
        "name": "Ice Rose",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Power_Chilled.png",
        "type": "starting",
        "unlockedAtRank": 5,
        "description": [
            "{sk}POWER{/s} now throws ice Roses, applying {sk}CHILLED{/s} to hit enemies",
            "{sk}POWER{/s} deals {si}+40%{/s} damage"
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
        "code": "healing_rose",
        "name": "Healing Rose",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Power_Heal.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Every {sk}2{/s} times the {sk}POWER{/s} Rose hits an enemy, it restores {si}2{/s} Health to all Heroes around "
        ],
        "improvements": [
            [
                "2"
            ],
            [
                "2.5"
            ],
            [
                "3"
            ],
            [
                "3.5"
            ]
        ]
    },
    {
        "code": "kick",
        "name": "Kick",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Attack_Kick.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Adds a kick to {sk}ATTACK{/s} combo, dealing {si}400%{/s} damage and pushing light enemies back"
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
        "code": "surge_of_bravery",
        "name": "Surge of Bravery",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Special_Buff_Attack.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "After {sk}SPECIAL{/s}'s kiss, next {si}6{/s} {sk}ATTACKS{/s} gain {sk}+30%{/s} range and deal {sk}+30%{/s} damage"
        ],
        "improvements": [
            [
                "6"
            ],
            [
                "8"
            ],
            [
                "10"
            ],
            [
                "12"
            ]
        ]
    },
    {
        "code": "relentless_assaults",
        "name": "Relentless Assaults",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Attack_Power_Ripost.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}ATTACK{/s} used right after {sk}POWER{/s} triggers {sk}DEFENSE{/s}'s {sk}Ripost{/s} launching a flurry of attacks, dealing up to {si}64{/s} damage"
        ],
        "improvements": [
            [
                "64"
            ],
            [
                "80"
            ],
            [
                "96"
            ],
            [
                "112"
            ]
        ]
    },
    {
        "code": "thorny_rose",
        "name": "Thorny Rose",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Power_Trail.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "When {sk}POWER{/s} Rose blooms, {sk}5{/s} paths of thorns spread around, dealing {si}13{/s} damage per second to enemies crossing through"
        ],
        "improvements": [
            [
                "13"
            ],
            [
                "16"
            ],
            [
                "20"
            ],
            [
                "23"
            ]
        ]
    },
    {
        "code": "floral_dodge",
        "name": "Floral Dodge",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Defense_Power.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}DEFENSE{/s} now creates a {sk}POWER{/s} Rose dealing {si}40%{/s} damage"
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
        ]
    },
    {
        "code": "burning_kiss",
        "name": "Burning Kiss",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Special_Ignite.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}SPECIAL{/s}'s area of effect gains {sk}+25%{/s} range, {si}+40%{/s} damage and applies {sk}IGNITE{/s} to hit enemies"
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
        "code": "thorns_aura",
        "name": "Thorns Aura",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Trait_AOE.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "After using {sk}TRAIT{/s} or receiving Juliet's {sk}TRAIT{/s}, an aura of thorns appears around Romeo, dealing {si}20{/s} area damage per second for {sk}6{/s} seconds"
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
        "code": "love_thread",
        "name": "Love Thread",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Trait_Beam.png",
        "type": "standard",
        "unlockedAtRank": 2,
        "description": [
            "Using {sk}TRAIT{/s} casts a beam towards Juliet for {sk}6{/s} second(s), dealing {si}33{/s} damage per second to crossed enemies"
        ],
        "multiplayerOnly": true,
        "improvements": [
            [
                "33"
            ],
            [
                "41"
            ],
            [
                "50"
            ],
            [
                "58"
            ]
        ]
    },
    {
        "code": "flash_of_steel",
        "name": "Flash of Steel",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Dash_Attack_Return.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "Holding {sk}DASH{/s} during a dash attack makes Romeo rush back towards his starting location, dealing {si}120%{/s} damage on its path"
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
        "code": "selfless_defender",
        "name": "Selfless Defender",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Defense_Shield.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "Blocking at least one attack during {sk}DEFENSE{/s} grants {si}12{/s} {sk}SHIELD{/s} for {sk}8{/s} second(s) to all Heroes around"
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
        "code": "deadly_brambles",
        "name": "Deadly Brambles",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Attack_Rose_Seed.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "4th strike of {sk}ATTACK{/s} combo implants brambles on enemies, dealing {si}40{/s} damage over {sk}5{/s} seconds",
            "Brambles explode when Romeo implants again on affected enemy or on enemy death, dealing {si}200%{/s} area damage"
        ],
        "improvements": [
            [
                "40",
                "200%"
            ],
            [
                "50",
                "250%"
            ],
            [
                "60",
                "300%"
            ],
            [
                "70",
                "350%"
            ]
        ]
    },
    {
        "code": "fencing_reflex",
        "name": "Fencing Reflex",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Attack_Block.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "Basic {sk}ATTACKS{/s} can turn into a block when Romeo gets hit (every {sk}5{/s} seconds max)",
            "After it blocks, Romeo gains {si}+40%{/s} {sk}Crit Chance{/s} for {sk}4{/s} second(s)"
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
        "code": "swarm_of_petals",
        "name": "Swarm of Petals",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Power_Cone_Attack.png",
        "type": "standard",
        "unlockedAtRank": 5,
        "description": [
            "Using {sk}POWER{/s} also launches a swarm of petals in a cone, pushing back light enemies and dealing {si}40%{/s} damage"
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
        ]
    },
    {
        "code": "wind_spiral",
        "name": "Wind Spiral",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Defense_AOE.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "{sk}DEFENSE{/s} creates a wind spiral around Romeo dealing up to {si}60{/s} area damage"
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
        ]
    },
    {
        "code": "broad_stroke",
        "name": "Broad Stroke",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Dash_AOE_Attack.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "{sk}ATTACK{/s} used right after {sk}DASH{/s} triggers a broad stroke, dealing {si}400%{/s} damage all around"
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
        "code": "love_shield",
        "name": "Love Shield",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Special_Invulnerable.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "After {sk}SPECIAL{/s}'s kiss, Romeo and Juliet are surrounded by a Love Shield, making them {sk}INVINCIBLE{/s} for {sk}4{/s} seconds (every {si}14{/s} seconds max)"
        ],
        "improvements": [
            [
                "14"
            ],
            [
                "12"
            ],
            [
                "10"
            ],
            [
                "8"
            ]
        ]
    },
    {
        "code": "bursting_bloom",
        "name": "Bursting Bloom",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Power_Burst.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            " When {sk}POWER{/s} Rose blooms, trigger a burst of petals dealing {si}40%{/s} area damage"
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
        ]
    },
    {
        "code": "burning_dance",
        "name": "Burning Dance",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Ultimate_1_Ignite.png",
        "type": "final",
        "unlockedAtRank": 1,
        "description": [
            "{sk}ULTIMATE{/s} applies {sk}IGNITE{/s} to hit enemies and deals {si}+40%{/s} damage"
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
        "code": "funeral_bouquet",
        "name": "Funeral Bouquet",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Ultimate_2_Attack_Rose.png",
        "type": "final",
        "unlockedAtRank": 6,
        "description": [
            "{sk}ATTACKS{/s} throw {sk}ULTIMATE{/s}'s Black Roses, dealing {si}3{/s} damage each"
        ],
        "improvements": [
            [
                "3"
            ],
            [
                "3.8"
            ],
            [
                "4.5"
            ],
            [
                "5.2"
            ]
        ]
    },
    {
        "code": "explosive_performance",
        "name": "Explosive Performance",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Ultimate_1_Projectile.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "During {sk}ULTIMATE{/s}'s dance, launch {si}24{/s} firework rockets all around, exploding on impact and dealing {sk}17{/s} damage each"
        ],
        "improvements": [
            [
                "24"
            ],
            [
                "30"
            ],
            [
                "36"
            ],
            [
                "42"
            ]
        ]
    },
    {
        "code": "tempestuous_roses",
        "name": "Tempestuous Roses",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/romeo/Skill_Ultimate_2_Wide_And_AOE.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "Romeo throws {si}56{/s} Black Roses in a wide cone dealing {sk}13{/s} damage each and is now surrounded by a tempest dealing {si}32{/s} area damage per second"
        ],
        "improvements": [
            [
                "56",
                "32"
            ],
            [
                "64",
                "40"
            ],
            [
                "72",
                "48"
            ],
            [
                "80",
                "56"
            ]
        ]
    }
];