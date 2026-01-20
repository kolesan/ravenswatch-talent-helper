import { Talent } from "../../scripts/extractTalents/types";

export const wukong: Talent[] = [
    {
        "code": "stone_monkey",
        "name": "Stone Monkey",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Defense_Quest.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "{sk}Quest (x40):{/s} Each successful {sk}DEFENSE{/s} grants {sk}+0.5 ARMOR{/s}",
            "{sk}Complete{/s}: Each block triggers an attack dealing {si}100%{/s} of the blocked damage as area damage"
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
        "code": "thirst_for_immortality",
        "name": "Thirst for Immortality",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Passive_Objects_Quest.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "{sk}Quest (x7):{/s} Obtaining a Magical Object with a Rare quality or better grants {sk}+2 DMG{/s}",
            "{sk}Complete:{/s} Grants {si}+100{/s} {sk}VITALITY{/s} but now {sd}only Hero or Magical Object heals{/s} are effective"
        ],
        "improvements": [
            [
                "+100"
            ],
            [
                "+125"
            ],
            [
                "+150"
            ],
            [
                "+175"
            ]
        ]
    },
    {
        "code": "supreme_polarity",
        "name": "Supreme Polarity",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Trait_Better_Stances.png",
        "type": "starting",
        "unlockedAtRank": 2,
        "description": [
            "Switching {sk}STANCE{/s} increases the power of the new {sk}STANCE{/s} for {sk}7{/s} seconds:",
            "{so}YIN:{/s} {si}+4%{/s} {sk}LIFE ON HIT{/s}",
            "{sd}YANG:{/s} deals {si}+20%{/s} damage"
        ],
        "improvements": [
            [
                "+4%",
                "+20%"
            ],
            [
                "+5%",
                "+25%"
            ],
            [
                "+6%",
                "+30%"
            ],
            [
                "+7%",
                "+35%"
            ]
        ]
    },
    {
        "code": "way_of_awakening",
        "name": "Way of Awakening",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Trait_Awakened.png",
        "type": "starting",
        "unlockedAtRank": 5,
        "description": [
            "After {sk}8{/s} successful {sk}DEFENSE{/s} actions, the next {sk}TRAIT{/s} activates {sk}AWAKENED STANCE{/s} for {si}12{/s} seconds",
            "{sk}AWAKENED STANCE{/s} grants both {so}YIN{/s} and {sd}YANG{/s} effects, without taking any additional damage"
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
        "code": "mantra_of_balance",
        "name": "Mantra of Balance",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Special_Debuff.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "When {sk}SPECIAL{/s} is triggered, it applies a negative status effect to enemies within range:",
            "{so}YIN:{/s} {sk}VULNERABLE{/s} for {si}4{/s} second(s)",
            "{sd}YANG:{/s} {sk}WEAKENED{/s} for {si}6{/s} second(s)"
        ],
        "improvements": [
            [
                "4",
                "6"
            ],
            [
                "5",
                "8"
            ],
            [
                "6",
                "10"
            ],
            [
                "7",
                "12"
            ]
        ]
    },
    {
        "code": "celestial_pillar",
        "name": "Celestial Pillar",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Attack_Finisher.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Adds a crushing blow to the {sk}ATTACK{/s} combo, dealing {si}80{/s} damage around the point of impact"
        ],
        "improvements": [
            [
                "80"
            ],
            [
                "100"
            ],
            [
                "120"
            ],
            [
                "140"
            ]
        ]
    },
    {
        "code": "stick_twirl",
        "name": "Stick Twirl",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Dash_Attack.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}ATTACK{/s} triggered after a {sk}DASH{/s} launches a rapid series of {sk}5{/s} strikes, each dealing {si}60%{/s} area damage"
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
        "code": "sprint",
        "name": "Sprint",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Dash_Sprint.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Bestows {si}+10%{/s} Move Speed",
            "{sk}DASH{/s} can be held for up to {sk}3{/s} seconds to sprint at high speed"
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
        "code": "ringing_beads",
        "name": "Ringing Beads",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Special_Attack_AOE.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "While {sk}SPECIAL{/s} is active, {sk}ATTACK{/s} makes beads ring, dealing {si}30%{/s} {sk}ATTACK{/s} damage all around"
        ],
        "improvements": [
            [
                "30%"
            ],
            [
                "35%"
            ],
            [
                "40%"
            ],
            [
                "45%"
            ]
        ]
    },
    {
        "code": "resonance",
        "name": "Resonance",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Special_Triggers_Stance.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "When the {sk}SPECIAL{/s} effect expires, all the activation effects of the current {sk}STANCE{/s} are restarted",
            "{sk}SPECIAL{/s} deals {si}+20%{/s} damage"
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
        "code": "ōm",
        "name": "Ōm",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Special_Beads_Increase.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "While {sk}SPECIAL{/s} is active, beads gradually increase their action radius, up to {si}+24%{/s}, and hit all enemies present in the area"
        ],
        "improvements": [
            [
                "+24%"
            ],
            [
                "+30%"
            ],
            [
                "+36%"
            ],
            [
                "+42%"
            ]
        ]
    },
    {
        "code": "airbender",
        "name": "Airbender",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Power_Extra_Targets.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}POWER{/s} can strike up to {si}1{/s} more time(s)"
        ],
        "improvements": [
            [
                "1"
            ],
            [
                "2"
            ],
            [
                "3"
            ],
            [
                "4"
            ]
        ]
    },
    {
        "code": "thundercloud",
        "name": "Thundercloud",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Power_Lightning.png",
        "type": "standard",
        "unlockedAtRank": 2,
        "description": [
            "Enemies hit by {sk}POWER{/s} are soon afterwards struck by lightning, dealing {si}20%{/s} damage all around the point of impact"
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
        "code": "one-inch_punch",
        "name": "One-Inch Punch",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Defense_Retaliate.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "{sk}ATTACK{/s} triggered after a successful {sk}DEFENSE{/s} launches a powerful punch, dealing {si}600%{/s} damage"
        ],
        "improvements": [
            [
                "600%"
            ],
            [
                "750%"
            ],
            [
                "900%"
            ],
            [
                "1050%"
            ]
        ]
    },
    {
        "code": "mind_fortress",
        "name": "Mind Fortress",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Trait_Longer_Effects.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "{sk}SHIELD{/s} and {sk}STRENGTH{/s} effects triggered upon {sk}TRAIT{/s} activation last {si}60%{/s} longer"
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
                "100%"
            ]
        ]
    },
    {
        "code": "fiery_dragon",
        "name": "Fiery Dragon",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Trait_Fire.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "Adds an explosion of fire to the activation effects of {sd}YANG STANCE{/s}, dealing {si}55{/s} area damage and inflicting enemies with {sk}IGNITE{/s}"
        ],
        "improvements": [
            [
                "55"
            ],
            [
                "68"
            ],
            [
                "82"
            ],
            [
                "96"
            ]
        ]
    },
    {
        "code": "frost_tiger",
        "name": "Frost Tiger",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Trait_Frost.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "Adds an explosion of frost to the activation effects of {so}YIN STANCE{/s}, dealing {si}44{/s} area damage and inflicting enemies with {sk}CHILLED{/s}"
        ],
        "improvements": [
            [
                "44"
            ],
            [
                "55"
            ],
            [
                "66"
            ],
            [
                "77"
            ]
        ]
    },
    {
        "code": "divine_palm",
        "name": "Divine Palm",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Defense_Perfect.png",
        "type": "standard",
        "unlockedAtRank": 5,
        "description": [
            "Blocking with {sk}DEFENSE{/s} less than {sk}0.2{/s} second(s) after its activation triggers a perfect block:",
            "{so}YIN:{/s} restores {si}4{/s} health to all nearby heroes",
            "{sd}YANG:{/s} deals {si}80{/s} area damage"
        ],
        "improvements": [
            [
                "4",
                "80"
            ],
            [
                "5",
                "100"
            ],
            [
                "6",
                "120"
            ],
            [
                "7",
                "140"
            ]
        ]
    },
    {
        "code": "focused_strikes",
        "name": "Focused Strikes",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Power_Hold.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "{sk}POWER{/s} can be held down to deliver the next strike to the same target and deals {si}+12%{/s} damage"
        ],
        "improvements": [
            [
                "+12%"
            ],
            [
                "+16%"
            ],
            [
                "+20%"
            ],
            [
                "+24%"
            ]
        ]
    },
    {
        "code": "sacred_seal",
        "name": "Sacred Seal",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Special_Explosion.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "When {sk}SPECIAL{/s} ends, orbs sink into the ground to draw a sacred pattern that explodes after a short time, dealing {si}100{/s} area damage"
        ],
        "improvements": [
            [
                "100"
            ],
            [
                "125"
            ],
            [
                "150"
            ],
            [
                "175"
            ]
        ]
    },
    {
        "code": "ch'i_outburst",
        "name": "Ch'i Outburst",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Attack_Beam.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "After {sk}POWER{/s} hits at least one enemy, the next {sk}ATTACK{/s} can be held down to store power then released to deliver an energy beam dealing up to {si}220%{/s} {sk}POWER{/s} damage to all enemies it passes through"
        ],
        "improvements": [
            [
                "220%"
            ],
            [
                "275%"
            ],
            [
                "330%"
            ],
            [
                "385%"
            ]
        ]
    },
    {
        "code": "fiery_golden_eyes",
        "name": "Fiery Golden Eyes",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Passive_Reveal.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "At the start of each {sk}DAY{/s} or {sk}NIGHT{/s}, reveal {sk}2{/s} point(s) of interest on the map",
            "Personal {sk}Dream Shards{/s} gains are increased by {si}20%{/s}"
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
        "code": "army_of_monkeys",
        "name": "Army of Monkeys",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Ultimate_1_More_Monkeys.png",
        "type": "final",
        "unlockedAtRank": 1,
        "description": [
            "{sk}ULTIMATE{/s} summons {si}3{/s} additional clones"
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
        "code": "perfect_copy",
        "name": "Perfect Copy",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Ultimate_2_Perfect_Copy.png",
        "type": "final",
        "unlockedAtRank": 6,
        "description": [
            "During the {sk}ULTIMATE{/s} transformation, Sun Wukong can use a random {sk}ULTIMATE{/s} ability of the Hero copied",
            "Transfiguration lasts {si}4{/s} more seconds"
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
        "code": "mantra_of_replication",
        "name": "Mantra of Replication",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Ultimate_1_Special_Monkey.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "Whenever {sk}SPECIAL{/s} is casted, summon {sk}3{/s} Monkey Clone that fight for {si}8{/s} seconds "
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
        ]
    },
    {
        "code": "divine_beverage",
        "name": "Divine Beverage",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/sun_wukong/Skill_Ultimate_2_Omnipotence.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "{sk}ULTIMATE{/s} transformation grants all heroes around {sk}OMNIPOTENCE{/s} for {si}8{/s} seconds",
            "During {sk}OMNIPOTENCE{/s}, Heroes' {sk}POWER{/s}, {sk}SPECIAL{/s} and {sk}DEFENSE{/s} have a {sk}0.5{/s} second cooldown"
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
        ]
    }
];