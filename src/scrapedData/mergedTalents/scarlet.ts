import { Talent } from "../../scripts/extractTalents/types";

export const scarlet: Talent[] = [
    {
        "code": "devourer",
        "name": "Devourer",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Power_Wolf_Quest.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "{sk}Quest (x20):{/s} Each kill with {sk}Werewolf POWER{/s} earns {sk}+0.5 DMG{/s}",
            "{sk}Complete{/s}: {sk}POWER{/s} has a {si}40%{/s} chance to have no cooldown if it kills an enemy (for both forms)"
        ],
        "improvements": [
            [
                "40%"
            ],
            [
                "60%"
            ],
            [
                "80%"
            ],
            [
                "100%"
            ]
        ]
    },
    {
        "code": "distant_explosions",
        "name": "Distant Explosions",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Special_Can_Hold.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "{sk}SPECIAL{/s} now targets a farther location and deals {si}+40%{/s} damage"
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
        "code": "shadow_strikes",
        "name": "Shadow Strikes",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Defense_Human_Quest.png",
        "type": "starting",
        "unlockedAtRank": 2,
        "description": [
            "{sk}Quest (x30):{/s} {sk}ATTACK{/s} or {sk}POWER{/s} triggered during {sk}Human DEFENSE{/s} gain {sk}+0.5%{/s} Crit Chance per enemy hit",
            "{sk}Complete{/s}: {si}+20%{/s} Crit Damage"
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
        "code": "shapeshifter",
        "name": "Shapeshifter",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Trait_Active.png",
        "type": "starting",
        "unlockedAtRank": 5,
        "description": [
            "{sk}TRAIT{/s} becomes active (with a {si}30{/s} seconds cooldown) and {sk}heals{/s} {sk}20%{/s} of Maximum Health when used",
            "Maximum Health is reduced by {sd}20%{/s}"
        ],
        "improvements": [
            [
                "30"
            ],
            [
                "26"
            ],
            [
                "22"
            ],
            [
                "18"
            ]
        ]
    },
    {
        "code": "slash_flurry",
        "name": "Slash Flurry",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Attack_Flurry.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "After using {sk}POWER{/s}, the next {sk}ATTACK{/s} within {sk}3{/s} seconds delivers a flurry of {sk}5{/s} slashes with {si}+20%{/s} increased damage"
        ],
        "improvements": [
            [
                "+20%"
            ],
            [
                "+30%"
            ],
            [
                "+40%"
            ],
            [
                "+50%"
            ]
        ]
    },
    {
        "code": "cleave",
        "name": "Cleave",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Attack_Cleave.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}ATTACK{/s} has a {sk}25%{/s} chance to cleave all around and deal {si}+120%{/s} damage"
        ],
        "improvements": [
            [
                "+120%"
            ],
            [
                "+150%"
            ],
            [
                "+180%"
            ],
            [
                "+210%"
            ]
        ]
    },
    {
        "code": "short_wick",
        "name": "Short Wick",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Special_Quick_Bombs.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}Human{/s}: {sk}SPECIAL{/s} no longer affects Scarlet and bomb explodes as soon as it hits the ground",
            "{sk}SPECIAL{/s} recharges {si}20%{/s} faster in both forms"
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
        ]
    },
    {
        "code": "aggressive_defense",
        "name": "Aggressive Defense",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Defense_AOE_On_Trigger.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Deal {si}60{/s} damage all around when triggering {sk}DEFENSE{/s}"
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
        "code": "murderous_intent",
        "name": "Murderous Intent",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Defense_Combo.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}DEFENSE{/s} instantly bestows {sk}2{/s} Combo Points and lasts {si}20%{/s} longer"
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
        ]
    },
    {
        "code": "pyromania",
        "name": "Pyromania",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Special_Ignite.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}SPECIAL{/s} applies {sk}IGNITE{/s} to all enemies hit and gains {si}+40%{/s} Crit Chance"
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
        "code": "energy",
        "name": "Energy",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Power_Extra_Combo_Points.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Maximum Combo Points is increased by {sk}2{/s}",
            "{sk}POWER{/s} has {si}+4%{/s} Crit Chance per Combo Point stored"
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
        "code": "evisceration",
        "name": "Evisceration",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Evisceration.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Each Combo Point spent by {sk}POWER{/s} applies {si}8%{/s} damage dealt in the form of {sk}BLEED{/s}"
        ],
        "improvements": [
            [
                "8%"
            ],
            [
                "10%"
            ],
            [
                "12%"
            ],
            [
                "14%"
            ]
        ]
    },
    {
        "code": "armor_break",
        "name": "Armor Break",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Special_Reduce_Armour.png",
        "type": "standard",
        "unlockedAtRank": 2,
        "description": [
            "{sk}SPECIAL{/s} applies {sk}VULNERABLE{/s} to all enemies hit for {si}3{/s} seconds"
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
        ]
    },
    {
        "code": "true_instincts",
        "name": "True Instincts",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Trait_Better_Forms.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "In {sk}Human{/s} Form, gain {si}+10%{/s} Move Speed",
            "In {sk}Werewolf{/s} Form, gain {si}+20%{/s} Maximum Health"
        ],
        "improvements": [
            [
                "+10%",
                "+20%"
            ],
            [
                "+12%",
                "+25%"
            ],
            [
                "+14%",
                "+30%"
            ],
            [
                "+16%",
                "+35%"
            ]
        ]
    },
    {
        "code": "wide_attacks",
        "name": "Wide Attacks",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Attack_Wide_Attacks.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "{sk}ATTACK{/s} gains {sk}+40%{/s} range and deals {si}+20%{/s} damage"
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
        "code": "double_strike",
        "name": "Double Strike",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Dash_Attack.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "{sk}ATTACK{/s} triggered right after {sk}DASH{/s} triggers a double strike, dealing {si}400%{/s} damage and generating one Combo Point"
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
        "code": "pulverize",
        "name": "Pulverize",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Special_Use_Combo_Points.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "{sk}SPECIAL{/s} hits enemies {sk}30%{/s} farther",
            "{sk}SPECIAL{/s} can consume a {sk}COMBO POINT{/s} to deal {si}+40%{/s} damage"
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
        "code": "explosive_rush",
        "name": "Explosive Rush",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Power_Triggers_Special.png",
        "type": "standard",
        "unlockedAtRank": 5,
        "description": [
            "When at {sk}3{/s} Combo Points or above, {sk}POWER{/s} triggers {sk}SPECIAL{/s} effect upon use, dealing {si}40%{/s} of its normal damage amount"
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
        "code": "adrenaline",
        "name": "Adrenaline",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Passive_Combo_Use_Bonus.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "Each time you spend {sk}COMBO POINTS{/s}, each point spent:",
            "{sk}Human:{/s} restores {si}2.0{/s} health",
            "{sk}Werewolf:{/s} increases {sk}ATTACK SPEED{/s} by {si}4%{/s} for {sk}6{/s} seconds"
        ],
        "improvements": [
            [
                "2.0",
                "4%"
            ],
            [
                "2.5",
                "5%"
            ],
            [
                "3.0",
                "6%"
            ],
            [
                "3.5",
                "7%"
            ]
        ]
    },
    {
        "code": "fan_of_spikes",
        "name": "Fan of Spikes",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Dash_Projectiles.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "When in combat, {sk}DASH{/s} can consume a {sk}COMBO POINT{/s} to send {si}4{/s} spikes, with each one dealing {sk}100%{/s} {sk}ATTACK{/s} damage to enemies hit"
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
        "code": "on_the_hunt",
        "name": "On the Hunt",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Defensive_Mark.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "{sk}DEFENSE{/s} applies {sk}MARKED{/s} to the nearest enemy for {si}4{/s} seconds",
            "{sk}MARKED{/s} targets take {sk}+25%{/s} damage and spread this status to another nearby enemy when they die"
        ],
        "improvements": [
            [
                "4"
            ],
            [
                "6"
            ],
            [
                "8"
            ],
            [
                "10"
            ]
        ]
    },
    {
        "code": "savagery",
        "name": "Savagery",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Passive_Combo_Chain.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "Each time Scarlet earns or spends {sk}COMBO POINTS{/s}, she gains a charge of Savagery (up to {sk}20{/s}), each granting {si}+1{/s} {sk}DMG{/s}",
            "Savagery stacks disappear after {sk}5{/s} seconds if no new stacks are gained"
        ],
        "improvements": [
            [
                "+1"
            ],
            [
                "+1.2"
            ],
            [
                "+1.4"
            ],
            [
                "+1.6"
            ]
        ]
    },
    {
        "code": "fiery_maw",
        "name": "Fiery Maw",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Ultimate_1_Fire.png",
        "type": "final",
        "unlockedAtRank": 1,
        "description": [
            "{sk}ULTIMATE{/s} gains {sk}+30%{/s} range, deals {si}+20%{/s} damage and applies {sk}IGNITE{/s} to enemies hit"
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
        "code": "bone_cracker",
        "name": "Bone Cracker",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Ultimate_2_Explosif.png",
        "type": "final",
        "unlockedAtRank": 6,
        "description": [
            "{sk}Human{/s}: Ash cloud deals {si}20{/s} damage per second to enemies inside",
            "{sk}Werewolf{/s}: Devouring an enemy causes it to explode, dealing {si}50{/s} to {si}150{/s} area damage (depending on its size)"
        ],
        "improvements": [
            [
                "20",
                "50",
                "150"
            ],
            [
                "25",
                "62",
                "187"
            ],
            [
                "30",
                "75",
                "225"
            ],
            [
                "35",
                "87",
                "262"
            ]
        ]
    },
    {
        "code": "reload",
        "name": "Reload",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Ultimate_1_Reload.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "Every {si}16{/s} times {sk}POWER{/s}, {sk}SPECIAL{/s} or {sk}DEFENSE{/s} is used, clear {sk}ULTIMATE{/s} cooldown"
        ],
        "improvements": [
            [
                "16"
            ],
            [
                "14"
            ],
            [
                "12"
            ],
            [
                "10"
            ]
        ]
    },
    {
        "code": "pack_leader",
        "name": "Pack Leader",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/scarlet/Skill_Ultimate_2_Heal.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "{sk}Human{/s}: Ash cloud restores {si}3{/s} hit points per second to all Heroes within",
            "{sk}Werewolf{/s}: Eating an enemy applies a {si}12{/s} to {si}25{/s} {sk}SHIELD{/s} to all heroes around (depending on its size)"
        ],
        "improvements": [
            [
                "3",
                "12",
                "25"
            ],
            [
                "4",
                "13",
                "27"
            ],
            [
                "5",
                "15",
                "30"
            ],
            [
                "6",
                "16",
                "32"
            ]
        ]
    }
];