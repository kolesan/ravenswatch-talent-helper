const scarletTalents = getScarletTalents().filter(it => it.type === "standard");
const piperTalents = getPiperTalents().filter(it => it.type === "standard");

const usedTalents = document.querySelector(".used-talents");
const preferredTalents = document.querySelector(".preferred-talents");
const availableTalents = document.querySelector(".available-talents");

piperTalents.forEach(it => {
    const name = document.createElement("p");
    name.textContent = it.name;
    const description = document.createElement("p");
    description.textContent = it.description.join(". ");


    const elem = document.createElement("li");

    elem.appendChild(name);
    elem.appendChild(description);

    availableTalents.appendChild(elem);
});
const currentListHeader = availableTalents.parentNode.querySelector("h1");
currentListHeader.textContent = currentListHeader.textContent.split(" ")[0] + " " + availableTalents.childElementCount;


usedTalents.onclick = (event) => {
    const target = event.target;

    const toMove = target.localName === "li"
        ? target
        : target.parentNode.localName === "li"
            ? target.parentNode
            : null;

    const moveTo = event.altKey
        ? preferredTalents
        : availableTalents;

    if (toMove) {
        const currentListHeader = usedTalents.parentNode.querySelector("h1");
        moveTo.appendChild(toMove);
        const header = moveTo.parentNode.querySelector("h1");
        header.textContent = header.textContent.split(" ")[0] + " " + moveTo.childElementCount;
        currentListHeader.textContent = currentListHeader.textContent.split(" ")[0] + " " + usedTalents.childElementCount;
    }

    console.log("clicked", target.localName, target, event);
};
preferredTalents.onclick = (event) => {
    const target = event.target;

    const toMove = target.localName === "li"
        ? target
        : target.parentNode.localName === "li"
            ? target.parentNode
            : null;

    const moveTo = event.altKey
        ? availableTalents
        : usedTalents;

    if (toMove) {
        const currentListHeader = preferredTalents.parentNode.querySelector("h1");
        moveTo.appendChild(toMove);
        const header = moveTo.parentNode.querySelector("h1");
        header.textContent = header.textContent.split(" ")[0] + " " + moveTo.childElementCount;
        currentListHeader.textContent = currentListHeader.textContent.split(" ")[0] + " " + preferredTalents.childElementCount;
    }

    console.log("clicked", target.localName, target, event);
};
availableTalents.onclick = (event) => {
    const target = event.target;

    const toMove = target.localName === "li"
        ? target
        : target.parentNode.localName === "li"
            ? target.parentNode
            : null;

    const moveTo = event.altKey
        ? preferredTalents
        : usedTalents;

    if (toMove) {
        const currentListHeader = availableTalents.parentNode.querySelector("h1");
        moveTo.appendChild(toMove);
        const header = moveTo.parentNode.querySelector("h1");
        header.textContent = header.textContent.split(" ")[0] + " " + moveTo.childElementCount;
        currentListHeader.textContent = currentListHeader.textContent.split(" ")[0] + " " + availableTalents.childElementCount;
    }

    console.log("clicked", target.localName, target, event);
};




function getScarletTalents() {
    return [
        {
            "name": "Distant Explosions",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/f/ff/Distant_Explosions_icon.jpg/revision/latest?cb=20251024142639",
            "type": "starting",
            "unlockedAtRank": 1,
            "description": [
                "SPECIAL now targets a farther location and deals +40% damage",
                "The longer it’s held, the further it aims"
            ],
            "changePerLevel": [
                "+10% damage"
            ]
        },
        {
            "name": "Devourer",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/f/f8/Devourer_icon.jpg/revision/latest?cb=20251024142741",
            "type": "starting",
            "unlockedAtRank": 1,
            "description": [
                "Quest (x20:) Each kill with Werewolf POWER earns +0.5 DMG",
                "Complete: POWER has a 40% chance to have no cooldown if it kills an enemy (for both forms)"
            ],
            "changePerLevel": [
                "+20% chance for no cooldown"
            ]
        },
        {
            "name": "Shadow Strikes",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/2/2a/Shadow_Strikes_icon.jpg/revision/latest?cb=20251024142804",
            "type": "starting",
            "unlockedAtRank": 2,
            "description": [
                "Quest (x30): ATTACK or POWER triggered during Human DEFENSE earns Crit Chance +0.5% per enemy hit.",
                "Complete: +20% Crit Damage"
            ],
            "changePerLevel": [
                "+5% Crit Damage"
            ]
        },
        {
            "name": "Shapeshifter",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/f/fc/Shapeshifter_icon.jpg/revision/latest?cb=20251024142824",
            "type": "starting",
            "unlockedAtRank": 5,
            "description": [
                "TRAIT becomes activatable (with a 30 second cooldown) and HEALS 20% of Maximum Health when used",
                "Maximum Health is reduced by 20%"
            ],
            "changePerLevel": [
                "-4 second(s) cooldown"
            ]
        },
        {
            "name": "Slash Flurry",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/2/23/Slash_Flurry_icon.jpg/revision/latest?cb=20251031212039",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "After using POWER, the next ATTACK within 3 seconds delivers a flurry of 5 slashes with +20% increased damage"
            ],
            "changePerLevel": [
                "+10% increased damaged"
            ]
        },
        {
            "name": "Cleave",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/d/d8/Cleave_icon.jpg/revision/latest?cb=20251031212059",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "ATTACK has a 25% chance to cleave all around and deal +120% damage"
            ],
            "changePerLevel": [
                "+30% damage"
            ]
        },
        {
            "name": "Short Wick",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/5/5f/Short_Wick_icon.jpg/revision/latest?cb=20251031212617",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "Human: SPECIAL no longer affects Scarlet and bomb explodes as soon as it hits the ground",
                "SPECIAL recharges 20% faster in both forms"
            ],
            "changePerLevel": [
                "+5% faster"
            ]
        },
        {
            "name": "Pyromania",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/d/d3/Pyromania_icon.jpg/revision/latest?cb=20251031212638",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "SPECIAL applies IGNITE to hit enemies and gains +40% Crit Chance"
            ],
            "changePerLevel": [
                "+10% Crit Chance"
            ]
        },
        {
            "name": "Aggressive Defense",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/a/a0/Aggressive_Defence_icon.jpg/revision/latest?cb=20251031212145",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "Deal 60 damage all around when triggering DEFENSE"
            ],
            "changePerLevel": [
                "+15 damage + Hero Level + DMG"
            ]
        },
        {
            "name": "Murderous Intent",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/e/e8/Murderous_Intent_icon.jpg/revision/latest?cb=20251031212204",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "DEFENSE instantly grants 2 COMBO POINTS and lasts 20% longer"
            ],
            "changePerLevel": [
                "+5% longer"
            ]
        },
        {
            "name": "Energy",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/f/f5/Energy_icon.jpg/revision/latest?cb=20251031212656",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "Maximum COMBO POINTS is increased by 2",
                "POWER has +4% Crit Chance per COMBO POINT stored"
            ],
            "changePerLevel": [
                "+1% Crit Chance"
            ]
        },
        {
            "name": "Evisceration",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/8/83/Evisceration_icon.jpg/revision/latest?cb=20251031212715",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "Each Combo Point spent by POWER applies 8% damage dealt in the form of BLEED"
            ],
            "changePerLevel": [
                "+2% damage dealt"
            ]
        },
        {
            "name": "Armor Break",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/d/d9/Armor_Break_icon.jpg/revision/latest?cb=20251031212735",
            "type": "standard",
            "unlockedAtRank": 2,
            "description": [
                "SPECIAL applies VULNERABLE to enemies hit for 3 seconds"
            ],
            "changePerLevel": [
                "+1 second(s)"
            ]
        },
        {
            "name": "True Instincts",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/6/60/True_Instincts_icon.jpg/revision/latest?cb=20251120193639",
            "type": "standard",
            "unlockedAtRank": 3,
            "description": [
                "In Human Form, gain +10% Move Speed",
                "In Werewolf Form, gain +20% Maximum Health"
            ],
            "changePerLevel": [
                "+2% Move Speed",
                "+5% Maximum Health"
            ]
        },
        {
            "name": "Wide Attacks",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/e/e5/Wide_Attacks_icon.jpg/revision/latest?cb=20251120193656",
            "type": "standard",
            "unlockedAtRank": 3,
            "description": [
                "ATTACK gains +40% range and deals +20% damage"
            ],
            "changePerLevel": [
                "+5% damage"
            ]
        },
        {
            "name": "Double Strike",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/b/bc/Double_Strike_icon.jpg/revision/latest?cb=20251120193713",
            "type": "standard",
            "unlockedAtRank": 4,
            "description": [
                "ATTACK triggered right after DASH triggers a double strike, dealing 400% damage and generating one COMBO POINT"
            ],
            "changePerLevel": [
                "+100% damage"
            ]
        },
        {
            "name": "Pulverize",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/a/a6/Pulverise_icon.jpg/revision/latest?cb=20251120194052",
            "type": "standard",
            "unlockedAtRank": 4,
            "description": [
                "Special hits enemies 30% farther",
                "Special consumes one COMBO POINT and deals +40% damage"
            ],
            "changePerLevel": [
                "+10% damage"
            ]
        },
        {
            "name": "Explosive Rush",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/d/db/Explosive_Rush_icon.jpg/revision/latest?cb=20251120194124",
            "type": "standard",
            "unlockedAtRank": 5,
            "description": [
                "When at 3 COMBO POINTS or more, POWER triggers SPECIAL's effect upon use, dealing 40% of its normal damage amount"
            ],
            "changePerLevel": [
                "+10% of its normal damage"
            ]
        },
        {
            "name": "Adrenaline",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/4/4c/Adrealine_icon.jpg/revision/latest?cb=20251120194140",
            "type": "standard",
            "unlockedAtRank": 7,
            "description": [
                "Each time you spend COMBO POINTS, each point spent:",
                "Human: restores 2.0 Health",
                "Werewolf: increases ATTACK SPEED by 4% for 6 seconds"
            ],
            "changePerLevel": [
                "+0.8 Health + Hero Level",
                "+1% ATTACK SPEED"
            ]
        },
        {
            "name": "Fan of Spikes",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/a/ae/Fan_of_Spikes_icon.jpg/revision/latest?cb=20251120194157",
            "type": "standard",
            "unlockedAtRank": 7,
            "description": [
                "DASH can consume a COMBO POINT to send 4 spikes, with each one dealing 100% ATTACK damage to enemies it passes through"
            ],
            "changePerLevel": [
                "+1 spike(s)"
            ]
        },
        {
            "name": "Savagery",
            "iconUrl": null,
            "type": "standard",
            "unlockedAtRank": 8,
            "description": [
                "Each time Scarlet earns or spends COMBO POINTS, she gains a stack of Savagery (up to 20), each granting +1 DMG",
                "Savagery stacks disappear after 5 seconds if no new stacks are gained"
            ],
            "changePerLevel": [
                "+5 Maximum stacks of Savagery",
                "+0.2 DMG"
            ]
        },
        {
            "name": "On the Hunt",
            "iconUrl": null,
            "type": "standard",
            "unlockedAtRank": 8,
            "description": [
                "DEFENSE applies MARKED to the nearest enemy for 4 seconds",
                "MARKED targets take +25% damage and spread this status to another nearby enemy when they die"
            ],
            "changePerLevel": [
                "+2 seconds"
            ]
        },
        {
            "name": "Fiery Maw",
            "iconUrl": null,
            "type": "final",
            "unlockedAtRank": 1,
            "description": [
                "ULTIMATE gains +30% range, deals +20% damage and applies IGNITE to enemies hit"
            ],
            "changePerLevel": [
                "+5% damage"
            ]
        },
        {
            "name": "Reload",
            "iconUrl": null,
            "type": "final",
            "unlockedAtRank": 9,
            "description": [
                "Every 16 times POWER, SPECIAL or DEFENSE is used, clear ULTIMATE cooldown"
            ],
            "changePerLevel": [
                "-2 times"
            ]
        },
        {
            "name": "Bone Cracker",
            "iconUrl": null,
            "type": "final",
            "unlockedAtRank": 1,
            "description": [
                "Human: Ash cloud deals 20 damage per second to enemies inside",
                "Werewolf: Devouring an enemy causes it to explode, dealing 40 to 120 area damage (depending on its size)"
            ],
            "changePerLevel": [
                "25 damage per second + Hero Level + DMG",
                "12 to 37 damage area damage + Hero Level + DMG"
            ]
        },
        {
            "name": "Pack Leader",
            "iconUrl": null,
            "type": "final",
            "unlockedAtRank": 9,
            "description": [
                "Human: Ash cloud restores 3 hit points per second to all Heroes within",
                "Werewolf: Eating an enemy applies a 12 to 15 SHIELD to all heroes around (depending on its size)"
            ],
            "changePerLevel": [
                "1 hit points per second + Hero Level",
                "1 to 3 SHIELD + Hero Level"
            ]
        }
    ];
}

function getPiperTalents() {
    return [
    {
        "name": "Sound Barrier",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/5/52/Sound_Barrier_icon.jpg/revision/latest?cb=20251024143854",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "Quest (x20): Gain +1 ARMOR whenever DEFENSE hits at least 2 enemies",
            "Complete: Doing so again grants 12 SHIELD to all nearby Heroes for 6 seconds"
        ],
        "changePerLevel": [
            "+3 SHIELD + Hero Level"
        ]
    },
    {
        "name": "Horde",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/8/82/Horde_icon.jpg/revision/latest?cb=20251024143920",
        "type": "starting",
        "unlockedAtRank": 1,
        "description": [
            "Rats spawn in groups of 3 (instead of 2)",
            "Increase maximum controllable rats by 6"
        ],
        "changePerLevel": [
            "+2 maximum rats"
        ]
    },
    {
        "name": "Freezing Trap",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/c/c4/Freezing_Trap_icon.jpg/revision/latest?cb=20251024143940",
        "type": "starting",
        "unlockedAtRank": 2,
        "description": [
            "Enemies within SPECIAL's area of effect are CHILLED and take +10% damage"
        ],
        "changePerLevel": [
            "+5% damage"
        ]
    },
    {
        "name": "Virtuoso",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/b/b6/Virtuoso_icon.jpg/revision/latest?cb=20251024144001",
        "type": "starting",
        "unlockedAtRank": 5,
        "description": [
            "Move Speed when using ATTACK or POWER is increased by 30%",
            "Gain +10% ATTACK Speed"
        ],
        "changePerLevel": [
            "+5% ATTACK Speed"
        ]
    },
    {
        "name": "Grand Finale",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/b/bf/Grand_Finale_icon.jpg/revision/latest?cb=20251103112932",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "When SPECIAL's effect expires, the area of effect explodes and deals 60 damage"
        ],
        "changePerLevel": [
            "+15 damage + Hero Level + DMG"
        ]
    },
    {
        "name": "Giant Rats",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/e/e5/Giant_Rats_icon.jpg/revision/latest?cb=20251103112952",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Rats’ attacks WEAKEN enemies and deal +20% damage"
        ],
        "changePerLevel": [
            "+5% damage"
        ]
    },
    {
        "name": "Sniper",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/e/ee/Sniper_icon.jpg/revision/latest?cb=20251103112210",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Notes from ATTACK and POWER have a longer range and deal +20% damage if they hit after halfway"
        ],
        "changePerLevel": [
            "%5 damage"
        ]
    },
    {
        "name": "Explosive Rats",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/2/2b/Explosive_Rats_icon.jpg/revision/latest?cb=20251103113010",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "Rats explode when they die and deal 6 damage all around"
        ],
        "changePerLevel": [
            "+1.5 damage + Hero Level + DMG"
        ]
    },
    {
        "name": "Explosive Blast",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/1/11/Explosive_Blast_icon.jpg/revision/latest?cb=20251103112231",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "DEFENSE deals 40 damage"
        ],
        "changePerLevel": [
            "+10 damage + Hero Level + DMG"
        ]
    },
    {
        "name": "Sforzando",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/5/56/Sforzando_icon.jpg/revision/latest?cb=20251103113029",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "SPECIAL triggers an implosive DEFENSE (pulling enemies inwards) with its range increased by 20%"
        ],
        "changePerLevel": [
            "+5% range"
        ]
    },
    {
        "name": "Extra Measure",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/0/09/Extra_Measure_icon.jpg/revision/latest?cb=20251103112248",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "After hitting an enemy with DEFENSE, next POWER within 3 seconds lasts longer (+2 waves of notes)"
        ],
        "changePerLevel": [
            "+1 wave(s) of notes"
        ]
    },
    {
        "name": "Quintuplets",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/d/dc/Quintiplet_icon.jpg/revision/latest?cb=20251103112308",
        "type": "standard",
        "unlockedAtRank": 1,
        "description": [
            "POWER plays 5 notes each wave (instead of 3) but each note deals -20% damage"
        ],
        "changePerLevel": [
            "+5% damage"
        ]
    },
    {
        "name": "Perfect Harmony",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/2/27/Perfect_Harmony_icon.jpg/revision/latest?cb=20251103113047",
        "type": "standard",
        "unlockedAtRank": 2,
        "description": [
            "DEFENSE restores 4 health to all Heroes around for each enemy hit (up to 4)"
        ],
        "changePerLevel": [
            "+2 Health restored + Hero Level"
        ]
    },
    {
        "name": "Low Notes",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/6/63/Low_Notes_icon.jpg/revision/latest?cb=20251124094354",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "ATTACK sends bigger notes dealing +60% damage in an area of effect but at a 40% reduced frequency"
        ],
        "changePerLevel": [
            "+15% damage"
        ]
    },
    {
        "name": "Acoustic Pulses",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/f/f8/Acoustic_Pulses_icon.jpg/revision/latest?cb=20251124094307",
        "type": "standard",
        "unlockedAtRank": 3,
        "description": [
            "SPECIAL deals 8 damage every second"
        ],
        "changePerLevel": [
            "+2 damage + Hero Level + DMG"
        ]
    },
    {
        "name": "Spinning Solo",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/c/c8/Spinning_Solo_icon.jpg/revision/latest?cb=20251124094330",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "POWER triggered after DASH makes Hero move quicker and has +40% Crit Chance"
        ],
        "changePerLevel": [
            "+10% Crit Chance"
        ]
    },
    {
        "name": "Stimulant Vibes",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/8/8b/Stimulant_Vibes_icon.jpg/revision/latest?cb=20251124095207",
        "type": "standard",
        "unlockedAtRank": 4,
        "description": [
            "Rats attacking within SPECIAL's zone cannot die, and deal +20% damage"
        ],
        "changePerLevel": [
            "+5% damage"
        ]
    },
    {
        "name": "Music of Spheres",
        "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/2/25/Music_of_the_Spheres_icon.jpg/revision/latest?cb=20251124095225",
        "type": "standard",
        "unlockedAtRank": 5,
        "description": [
            "DASH leaves behind a bubbled clef that explodes when hit, sending 4 POWER music notes to enemies around"
        ],
        "changePerLevel": [
            "+1 POWER music note"
        ]
    },
    {
        "name": "Invasive Blast",
        "iconUrl": null,
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "Hitting at least one enemy with DEFENSE spawns up to 4 rats, which immediately attack nearby enemies"
        ],
        "changePerLevel": [
            "+1 more time"
        ]
    },
    {
        "name": "Chorus",
        "iconUrl": null,
        "type": "standard",
        "unlockedAtRank": 7,
        "description": [
            "Every 1 second(s), the SPECIAL area of effect fires 5 ATTACK notes, targeting the closest enemies"
        ],
        "changePerLevel": [
            "Rare: -0.2 second(s)",
            "Epic: -0.15 second(s)",
            "Legendary: -0.10 second(s)"
        ]
    },
    {
        "name": "Ghost Notes",
        "iconUrl": null,
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "For every 10 notes played, a ghost note is sent towards the nearest enemy, dealing 20 area damage"
        ],
        "changePerLevel": [
            "Rare: -2 notes threshold",
            "Epic and Legendary: -1 note(s) threshold"
        ]
    },
    {
        "name": "Leeching Charm",
        "iconUrl": null,
        "type": "standard",
        "unlockedAtRank": 8,
        "description": [
            "For every 20 attacks that rats made on enemies restore 4 Health to all nearby heroes"
        ],
        "changePerLevel": [
            "+ 1 Health + Hero Level"
        ]
    },
    {
        "name": "Jig",
        "iconUrl": null,
        "type": "final",
        "unlockedAtRank": 1,
        "description": [
            "DASH sends 4 ULTIMATE notes to nearby enemies"
        ],
        "changePerLevel": [
            "+1 ULTIMATE note(s)"
        ]
    },
    {
        "name": "Rain of Notes",
        "iconUrl": null,
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "During ULTIMATE, 12 notes per second fall from the sky in the surroundings, each dealing 10 area damage"
        ],
        "changePerLevel": [
            "+3 notes per second"
        ]
    },
    {
        "name": "Vermin Massacre",
        "iconUrl": null,
        "type": "final",
        "unlockedAtRank": 1,
        "description": [
            "When ULTIMATE is channeled to completion, the swarm of rats explodes, dealing 200 area damage"
        ],
        "changePerLevel": [
            "+50 area damage + Hero Level + DMG"
        ]
    },
    {
        "name": "Rat King",
        "iconUrl": null,
        "type": "final",
        "unlockedAtRank": 9,
        "description": [
            "Each rat summoned has a 15% chance to be a Rat King, capable of attacking twice as much and dealing +100% damage"
        ],
        "changePerLevel": [
            "+5% chance"
        ]
    }
];
}
