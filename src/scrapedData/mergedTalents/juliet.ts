import { Talent } from "../../scripts/extractTalents/types";

export const juliet: Talent[] = [
    {
        "code": "kiss_the_groom",
        "name": "Kiss The Groom",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Special_Quest_Dream_Shard.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "{sk}Quest (x20):{/s} Hitting at least one enemy with {sk}SPECIAL{/s} grants {sk}+0.5{/s} {sk}Crit Chance{/s}",
            "{sk}Complete:{/s} Any enemy hit by {sk}SPECIAL{/s} has a {si}40%{/s} chance to grant Juliet {sk}2{/s} {sk}Dream Shard(s){/s}"
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
        "code": "volcanic_shots",
        "name": "Volcanic Shots",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Attack_Burst.png",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "{sk}ATTACK{/s} triggered right after {sk}DASH{/s} shoots {si}3{/s} times in a row, consuming only one {so}AMMO{/s}"
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
        "code": "guns_&_roses",
        "name": "Guns & Roses",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Power_Quest_Explode.png",
        "type": "starting",
        "unlockedAtRank": 2,
        "description": [
            "{sk}Quest (x10):{/s} Hitting an enemy by exploding Romeo's Rose with a {sk}PERFECT SHOT{/s} grants {sk}+1.0 DMG{/s}",
            "{sk}Complete:{/s} Rose explosions triggered with a {sk}PERFECT SHOT{/s} gain {sk}+50%{/s} range and deals {si}+20%{/s} damage"
        ],
        "multiplayerOnly": true,
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
        "code": "wedding_gifts",
        "name": "Wedding Gifts",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Passive_Bonus_Object.png",
        "type": "starting",
        "unlockedAtRank": 5,
        "description": [
            "Whenever they obtain a {sk}Magical Object{/s}, Juliet and Romeo have a {si}20%{/s}/{si}10%{/s}/{si}5%{/s} chance to gift the other the same common, rare or epic {sk}Magical Object{/s}"
        ],
        "multiplayerOnly": true,
        "improvements": [
            [
                "20%",
                "10%",
                "5%"
            ],
            [
                "25%",
                "12%",
                "6%"
            ],
            [
                "30%",
                "15%",
                "7%"
            ],
            [
                "35%",
                "17%",
                "8%"
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
        "code": "longshot",
        "name": "Longshot",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Power_More_Range.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}POWER{/s} gains {sk}+50%{/s} range and deals {si}+20%{/s} damage to enemies hit beyond half the maximum range "
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
        "code": "shadow_round",
        "name": "Shadow Round",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Power_Vulnerable.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}PERFECT SHOT{/s} applies {sk}VULNERABLE{/s} for {si}2{/s} second(s) to hit enemies "
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "hot_shots",
        "name": "Hot Shots",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Attack_Ignite.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}ATTACKS{/s} triggered within {sk}2{/s} second(s) after a {sk}POWER{/s} apply {sk}IGNITE{/s} to hit enemies and deal {si}+20%{/s} damage"
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
        "code": "large_chambers",
        "name": "Large Chambers",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Passive_More_Ammo.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Maximum amount of {so}AMMO{/s} is increased by {sk}2{/s}",
            "{sk}ATTACK{/s} and {sk}POWER{/s} damage are increased by {si}3%{/s} for each missing {so}AMMO{/s}"
        ],
        "improvements": [
            [
                "3%"
            ],
            [
                "3.5%"
            ],
            [
                "4%"
            ],
            [
                "4.5%"
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
        "code": "defensive_reload",
        "name": "Defensive Reload",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Defense_Reload.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Reload {si}3{/s} {so}AMMO{/s} after using {sk}DEFENSE{/s}"
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
        "code": "bullet_ballet",
        "name": "Bullet Ballet",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Defense_Ricochet.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}DEFENSE{/s} shots can ricochet to hit nearby targets, dealing {si}60%{/s} {sk}ATTACK{/s} damage "
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "valiant_hearts",
        "name": "Valiant Hearts",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Trait_Buff.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}TRAIT{/s} grants both Romeo and Juliet {sk}+20%{/s} {sk}MOVE SPEED{/s} and {sk}STRENGTH{/s} for {si}5{/s} second(s)"
        ],
        "improvements": [
            [
                "5"
            ],
            [
                "6.2"
            ],
            [
                "7.5"
            ],
            [
                "8.8"
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
        "code": "overflowing_passion",
        "name": "Overflowing Passion",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Special_Heal.png",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "{sk}SPECIAL{/s} restores {si}6{/s} Health to all Heroes around whenever it hits at least an enemy"
        ],
        "improvements": [
            [
                "6"
            ],
            [
                "7.5"
            ],
            [
                "9"
            ],
            [
                "10.5"
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
        "code": "double_tap",
        "name": "Double Tap",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Power_Double_Shot.png",
        "type": "standard",
        "unlockedAtRank": 2,
        "description": [
            "Hold {sk}POWER{/s} to trigger {sk}2{/s} shots in a row",
            "The second shot deals {si}60%{/s} damage"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "love_sparks",
        "name": "Love Sparks",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Special_Projectile.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "{sk}SPECIAL{/s} fires {si}4{/s} homing projectiles towards nearby enemies, each one dealing {sk}18{/s} damage"
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
        "code": "swirling_rose",
        "name": "Swirling Rose",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Attack_Rose_AOE.png",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "{sk}ATTACKS{/s} hitting Romeo's Roses make them spin, dealing {si}60%{/s} of Juliet's {sk}ATTACK{/s} damage all around "
        ],
        "multiplayerOnly": true,
        "improvements": [
            [
                "60%"
            ],
            [
                "75%"
            ],
            [
                "100%"
            ],
            [
                "115%"
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
        "code": "knockout",
        "name": "Knockout",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Attack_Close_Combat.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "When Juliet is very close to an enemy, {sk}ATTACK{/s} turns into a strike using her pistol's butt dealing {si}400%{/s} damage at close range without consuming {so}AMMO{/s} ({sk}4{/s} seconds cooldown)"
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
        "code": "comforting_presence",
        "name": "Comforting Presence",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Dash_Shield.png",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "Crossing through a Hero using {sk}DASH{/s} grants {si}20{/s} {sk}SHIELD{/s} for {sk}6{/s} seconds to Juliet and all Heroes crossed"
        ],
        "multiplayerOnly": true,
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "explosive_backstep",
        "name": "Explosive Backstep",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Power_Attack_Backstep.png",
        "type": "standard",
        "unlockedAtRank": 5,
        "description": [
            "While holding {sk}POWER{/s}, using {sk}ATTACK{/s} makes Juliet step back and shoot to the ground, dealing {si}100%{/s} {sk}POWER{/s}’s damage in a zone"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "blind_shots",
        "name": "Blind Shots",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Defense_More_Shots.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "{sk}DEFENSE{/s} fires {si}3{/s} more shot(s) than the number of {so}AMMO{/s} remaining"
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
        "code": "heartbeat",
        "name": "Heartbeat",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Trait_AOE.png",
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            " Using {sk}TRAIT{/s} or receiving Romeo’s {sk}TRAIT{/s} triggers a sonic wave dealing {si}100{/s} damage all around Juliet"
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
        ],
        "degradations": [
            [],
            [],
            [],
            []
        ]
    },
    {
        "code": "shrapnel",
        "name": "Shrapnel",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Power_Cone_Damage.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "Using {sk}POWER{/s} also triggers a shrapnel burst dealing {si}40%{/s} damage in a cone"
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
        "code": "lucky_shot",
        "name": "Lucky Shot",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Attack_Power.png",
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "{sk}ATTACKS{/s} have a {si}6%{/s} chance to turn into a {sk}POWER{/s} shot"
        ],
        "improvements": [
            [
                "6%"
            ],
            [
                "8%"
            ],
            [
                "10%"
            ],
            [
                "12%"
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
        "code": "passion_dance",
        "name": "Passion Dance",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Ultimate_1_Heal.png",
        "type": "final",
        "unlockedAtRank": 1,
        "description": [
            "Restore between {si}4{/s} and {si}8{/s} Health per seconds to all Heroes nearby during {sk}ULTIMATE{/s}’s dance (depending on dance movement speed)"
        ],
        "improvements": [
            [
                "4",
                "8"
            ],
            [
                "5",
                "10"
            ],
            [
                "6",
                "12"
            ],
            [
                "7",
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
        "code": "plague_flask",
        "name": "Plague Flask",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Ultimate_2_Marked.png",
        "type": "final",
        "unlockedAtRank": 6,
        "description": [
            "{sk}ULTIMATE{/s}’s explosion applies {sk}MARKED{/s} to hit enemies for {si}4{/s} second(s)"
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
        "code": "flashy_ending",
        "name": "Flashy Ending",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Ultimate_1_End_AOE.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "Dancing gauge can be filled up according to the synchronization of Romeo and Juliet's movements during {sk}ULTIMATE{/s}",
            "Trigger an explosion at the end of the dance dealing from {si}270{/s} to {si}540{/s} area damage (based on dancing gauge level)"
        ],
        "improvements": [
            [
                "270",
                "540"
            ],
            [
                "337",
                "607"
            ],
            [
                "405",
                "675"
            ],
            [
                "472",
                "742"
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
        "code": "unstable_concoction",
        "name": "Unstable Concoction",
        "iconUrl": "http://dt-live-3.passtechgames.com:8080/heroes/juliet/Skill_Ultimate_2_Dash_AOE.png",
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "Using {sk}DASH{/s} makes Juliet drop a flask of poison to the ground, dealing {si}30{/s} damage in a zone"
        ],
        "improvements": [
            [
                "30"
            ],
            [
                "40"
            ],
            [
                "50"
            ],
            [
                "60"
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