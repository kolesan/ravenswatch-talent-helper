const scarletTalents = getScarletTalents().filter(it => it.type === "standard");
const piperTalents = getPiperTalents().filter(it => it.type === "standard");
const beowulfTalents = getBeowulfTalents().filter(it => it.type === "standard");

const usedTalents = document.querySelector(".used-talents");
const preferredTalents = document.querySelector(".preferred-talents");
const availableTalents = document.querySelector(".available-talents");

beowulfTalents.forEach(it => {
    const image = document.createElement("img");
    image.src = `src/scrapedData/icons/talents/beowulf/${it.code}.webp`;
    image.height = "80";

    const name = document.createElement("div");
    name.className = "name";
    name.textContent = it.name;

    const description = document.createElement("div");
    description.className = "description"
    if (it.description.length > 1) {
        it.description.forEach(dscItem => {
            const dscListItem = document.createElement("div");
            dscListItem.className = "description-list-item";
            dscListItem.textContent = dscItem;
            description.appendChild(dscListItem);
        })
    } else {
        description.textContent = it.description[0];
    }
    
    const container = document.createElement("div");
    container.appendChild(name);
    container.appendChild(description);

    const elem = document.createElement("li");
    elem.appendChild(image);
    elem.appendChild(container);

    availableTalents.appendChild(elem);
});
const currentListHeader = availableTalents.parentNode.querySelector("h1");
currentListHeader.textContent = currentListHeader.textContent.split(" ")[0] + " " + availableTalents.childElementCount;

function saveToLocalStorage() {
    localStorage.setItem("usedTalents", JSON.stringify(usedTalents.ch, null, "  "))
}

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
                "The longer it's held, the further it aims"
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
            "Rats' attacks WEAKEN enemies and deal +20% damage"
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

function getBeowulfTalents() {
    return [
        {
            "code": "shield_charge",
            "name": "Shield Charge",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/0/07/Shield_charge_2.webp/revision/latest?cb=20250322172928",
            "type": "starting",
            "unlockedAtRank": 1,
            "description": [
                "DEFENSE makes Beowulf dash forward and deal +100% damage along the path"
            ],
            "changePerLevel": [
                "+25% damage"
            ]
        },
        {
            "code": "explosive_fire",
            "name": "Explosive Fire",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/e/e4/Explosive_fire.webp/revision/latest?cb=20250324163301",
            "type": "starting",
            "unlockedAtRank": 1,
            "description": [
                "IGNITED enemies explode when they die, dealing 20 damage and applying IGNITE to all nearby enemies"
            ],
            "changePerLevel": [
                "+5 damage + Hero Level + DMG"
            ]
        },
        {
            "code": "rampart",
            "name": "Rampart",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/b/b5/Rampart.webp/revision/latest?cb=20250324163331",
            "type": "starting",
            "unlockedAtRank": 2,
            "description": [
                "Quest (x20): Blocking at least one attack during DEFENSE grants +1 ARMOR",
                "Complete: Wyrm DEFENSE heals 50% more and increases the area of effect by +3m"
            ],
            "changePerLevel": [
                "+10% more healing"
            ]
        },
        {
            "code": "draconic_binds",
            "name": "Draconic Binds",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/a/a6/Draconic_binds.webp/revision/latest?cb=20250324164517",
            "type": "starting",
            "unlockedAtRank": 5,
            "description": [
                "Quest (x20): Hitting 2 enemies with a single Wyrm ability grants +0.5 DMG",
                "Complete: TRAIT cooldown -25%. Wyrm abilities deal +10% damage"
            ],
            "changePerLevel": [
                "+5% Wyrm ability damage"
            ]
        },
        {
            "code": "eruption",
            "name": "Eruption",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/6/6f/Eruption.webp/revision/latest?cb=20250324164551",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "POWER's shockwaves explode at the end and deal 60% additional damage all around"
            ],
            "changePerLevel": [
                "+15% additional damage"
            ]
        },
        {
            "code": "breath_of_fire",
            "name": "Breath of Fire",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/a/ad/Breath_of_fire.webp/revision/latest?cb=20250324164634",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "Wyrm breathes in a cone of fire during ATTACK finisher, dealing 200% damage and applying IGNITE to enemies hit"
            ],
            "changePerLevel": [
                "+50% damage"
            ]
        },
        {
            "code": "blademaster",
            "name": "Blademaster",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/9/95/Blademaster.webp/revision/latest?cb=20250324164704",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "After each TRAIT activation, the next 3 ATTACKS gain +100% Crit Chance",
                "Permanently gain +10% ATTACK SPEED"
            ],
            "changePerLevel": [
                "+2% ATTACK SPEED"
            ]
        },
        {
            "code": "heavy_strikes",
            "name": "Heavy Strikes",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/3/3d/Heavy_strikes.webp/revision/latest?cb=20250324164731",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "ATTACK is slower but cleaves in a wide area and deals +50% damage"
            ],
            "changePerLevel": [
                "+10% damage"
            ]
        },
        {
            "code": "fiery_seismo",
            "name": "Fiery Seismo",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/3/30/Fiery_sismo.webp/revision/latest?cb=20250324164806",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "Wyrm SPECIAL's finisher strikes 3 times with a growing radius for 45% damage each"
            ],
            "changePerLevel": [
                "+5% damage"
            ]
        },
        {
            "code": "bladestorm",
            "name": "Bladestorm",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/a/a9/Bladestorm.webp/revision/latest?cb=20250324164843",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "SPECIAL spins 2 more time(s) for 100% damage each"
            ],
            "changePerLevel": [
                "+1 additional spin"
            ]
        },
        {
            "code": "double_shock",
            "name": "Double Shock",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/b/b8/Double_shock.webp/revision/latest?cb=20250324164916",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "POWER sends out two successive shockwaves, each one dealing -30% damage"
            ],
            "changePerLevel": [
                "+5% damage"
            ]
        },
        {
            "code": "furnace",
            "name": "Furnace",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/b/bd/Furnace.webp/revision/latest?cb=20250324164945",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                "Your IGNITE effects last 2 more seconds and deal +32% damage"
            ],
            "changePerLevel": [
                "+8% damage"
            ]
        },
        {
            "code": "blazing_runes",
            "name": "Blazing Runes",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/c/c8/Blazing_runes.webp/revision/latest?cb=20250324165011",
            "type": "standard",
            "unlockedAtRank": 2,
            "description": [
                "ATTACK and SPECIAL gain +40% Crit Chance against IGNITED enemies"
            ],
            "changePerLevel": [
                "+10% Crit Chance"
            ]
        },
        {
            "code": "fire_wings",
            "name": "Fire Wings",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/7/7e/Fire_wings.webp/revision/latest?cb=20250324165044",
            "type": "standard",
            "unlockedAtRank": 3,
            "description": [
                "Activating TRAIT deals 30 damage all around and applies IGNITE to all enemies hit"
            ],
            "changePerLevel": [
                "+5 damage + Hero Level + DMG"
            ]
        },
        {
            "code": "scorched_earth",
            "name": "Scorched Earth",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/4/44/Scorched_earth.webp/revision/latest?cb=20250324165112",
            "type": "standard",
            "unlockedAtRank": 3,
            "description": [
                "Wyrm POWER leaves a trail of fire, dealing 40 damage over time to enemies standing on it"
            ],
            "changePerLevel": [
                "+10 damage + Hero Level + DMG"
            ]
        },
        {
            "code": "retaliation",
            "name": "Retaliation",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/4/43/Retaliation.webp/revision/latest?cb=20250324165145",
            "type": "standard",
            "unlockedAtRank": 4,
            "description": [
                "After using DEFENSE, the next ATTACK within 2 seconds triggers a two-strike retaliation, with each one dealing 360% damage"
            ],
            "changePerLevel": [
                "+90% damage"
            ]
        },
        {
            "code": "sparkling_shield",
            "name": "Sparkling Shield",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/3/30/Sparkling_shield.webp/revision/latest?cb=20250324165215",
            "type": "standard",
            "unlockedAtRank": 4,
            "description": [
                "Each attack blocked during DEFENSE inflicts 120% of blocked damage to what is in front of Beowulf"
            ],
            "changePerLevel": [
                "+30% of blocked damage"
            ]
        },
        {
            "code": "fiery_slash",
            "name": "Fiery Slash",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/9/92/Fiery_slash.webp/revision/latest?cb=20250324171125",
            "type": "standard",
            "unlockedAtRank": 5,
            "description": [
                "ATTACK triggered right after DASH deals 400% damage and applies IGNITE to enemies"
            ],
            "changePerLevel": [
                "+100% damage"
            ]
        },
        {
            "code": "secondary_tremor",
            "name": "Secondary Tremor",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/0/09/Secondary_tremor.webp/revision/latest?cb=20250324171210",
            "type": "standard",
            "unlockedAtRank": 7,
            "description": [
                "SPECIAL sends out a Shockwave dealing 120% of POWER damage"
            ],
            "changePerLevel": [
                "+30% POWER damage"
            ]
        },
        {
            "code": "battle_cry",
            "name": "Battle Cry",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/1/1f/Battle_cry.webp/revision/latest?cb=20250324171323",
            "type": "standard",
            "unlockedAtRank": 7,
            "description": [
                "Activating TRAIT clears POWER cooldown for all Heroes in the area and gives them a 12 SHIELD  for 6 seconds"
            ],
            "changePerLevel": [
                "+3 SHIELD + Hero Level"
            ]
        },
        {
            "code": "furious_blow",
            "name": "Furious Blow",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/c/c1/Furious_blows.webp/revision/latest?cb=20250324171532",
            "type": "standard",
            "unlockedAtRank": 8,
            "description": [
                "After a SPECIAL, the next ATTACK triggers a series of 3 strikes dealing 100% damage each",
                "If Wyrm empowered SPECIAL, the attacks apply an IGNITE status to enemies and inflict +50% damage"
            ],
            "changePerLevel": [
                "+25% damage"
            ]
        },
        {
            "code": "runes_of_war",
            "name": "Runes of War",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/9/90/Runes_of_war.webp/revision/latest?cb=20250324171601",
            "type": "standard",
            "unlockedAtRank": 8,
            "description": [
                "After hitting an enemy with DEFENSE, runes appear around Beowulf dealing 16 area damage per second for 5 seconds"
            ],
            "changePerLevel": [
                "+4 area damage + Hero Level + DMG"
            ]
        },
        {
            "code": "immolation",
            "name": "Immolation",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/d/d7/Immolation.webp/revision/latest?cb=20250324171636",
            "type": "final",
            "unlockedAtRank": 1,
            "description": [
                "During ULTIMATE [Dragon Flight], Beowulf deals 40 damage per second to nearby enemies, and all abilities are empowered by Wyrm"
            ],
            "changePerLevel": [
                "+10 damage per second + Hero Level + DMG"
            ]
        },
        {
            "code": "sudden_growth",
            "name": "Sudden Growth",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/8/8f/Sudden_growth.webp/revision/latest?cb=20250324171706",
            "type": "final",
            "unlockedAtRank": 9,
            "description": [
                "During ULTIMATE [Dragon Flight], the Wyrm grows and breathes fire in a wider zone, dealing +20% damage"
            ],
            "changePerLevel": [
                "+5% damage"
            ]
        },
        {
            "code": "volcanic_rage",
            "name": "Volcanic Rage",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/b/b4/Volcanic_rage.webp/revision/latest?cb=20250324171821",
            "type": "final",
            "unlockedAtRank": 1,
            "description": [
                "Each ULTIMATE ireball throws 4 fiery rock into the surrounding area,  dealing 50% damage each"
            ],
            "changePerLevel": [
                "+1 fiery rock(s)"
            ]
        },
        {
            "code": "fireball",
            "name": "Fireball",
            "iconUrl": "https://static.wikia.nocookie.net/ravenswatch/images/1/1a/Fireball.webp/revision/latest?cb=20250324171929",
            "type": "final",
            "unlockedAtRank": 9,
            "description": [
                "In Combat, DASH makes Wyrm throw a Fireball towards the closest enemy, dealing 40 area damage"
            ],
            "changePerLevel": [
                "+10 area damage + Hero Level + DMG"
            ]
        }
    ]
}
