import { Talent, TalentType } from "../extractTalents/types";

const parsedTalents = getMerlinTalents()
    .map(parseTalent)
    .filter(it => it.type !== "ultimate");

const mergedWithMine = getMerlinTalentsMine()
    .map(merge);

console.log(JSON.stringify(mergedWithMine, null, "    "))




function merge(mine: any): Talent {
    const { changePerLevel, ...mineRest } = mine;
    const theirs = parsedTalents.find(it => it.code === mine.code);
    return {
        ...mineRest,
        iconUrl: theirs?.iconUrl || null,
        description: theirs?.description || [],
        improvements: theirs?.improvements || [],
    }
}

function parseTalent(talent: PasstechTalent): Omit<Talent, "unlockedAtRank"> {
    const {
        description,
        improvements,
    } = parseDescriptions(talent.descriptions);
    return {
        code: nameToCode(talent.name),
        name: talent.name,
        iconUrl: talent.icon,
        type: parseType(talent.tier),
        description,
        improvements,
    };
}

function nameToCode(name: string) {
    return name.replaceAll(" ", "_").toLowerCase();
}

function parseType(tier: number) {
    const map: Record<number, TalentType> = {
        0: "starting",
        1: "standard",
        2: "ultimate",
        3: "final",
    }
    return map[tier];
}

function parseDescriptions(descriptions: string[]) {
    const parsedDescriptions = descriptions.map(parseDescription);
    const improvements = parsedDescriptions.map(parseImprovements);
    return {
        description: parseDescription(descriptions[0]),
        improvements,
    }
}
function parseDescription(description: string) {
    return description
        .split("• ")
        .filter(Boolean)
        .map(it => it.replaceAll("<span class=\"key_words\">", "{sk}"))
        .map(it => it.replaceAll("<span class=\"improvement\">", "{si}"))
        .map(it => it.replaceAll("<span class=\"other\">", "{so}"))
        .map(it => it.replaceAll("</span>", "{/s}"))
        .map(it => it.replaceAll(/ \(currently: .*?\)/g, ""))
        .map(it => it.replaceAll("\n", ""));
}
function parseImprovements(description: string[]) {
    return parseImprovement(description.join(" "));
}
function parseImprovement(description: string) {
    const parsed = description
        .matchAll(/\{si\}.*?{\/s\}/g).toArray()
        .map(it => it[0])
        .filter(it => !it.includes("+0%"))
        .map(it => it.replace(/\{si\}/g, "").replace(/\{\/s\}/g, ""));
    return parsed;
}


type PasstechTalent = ReturnType<typeof getMerlinTalents>[number];
function getMerlinTalents() {
    return [
        {
            "id": "037a6126-4a51-4e1c-a459-1f3b3b3fb12e",
            "name": "Wild Magic",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Attack_Bleed_After_Power.png",
            "descriptions": [
                "• After casting a Nature Spell (<span class=\"key_words\">POWER</span>), the next <span class=\"key_words\">3</span> <span class=\"key_words\">ATTACKS</span> also project thorns, dealing <span class=\"improvement\">200%</span> damage as <span class=\"key_words\">BLEED</span>",
                "• After casting a Nature Spell (<span class=\"key_words\">POWER</span>), the next <span class=\"key_words\">3</span> <span class=\"key_words\">ATTACKS</span> also project thorns, dealing <span class=\"improvement\">250%</span> damage as <span class=\"key_words\">BLEED</span>",
                "• After casting a Nature Spell (<span class=\"key_words\">POWER</span>), the next <span class=\"key_words\">3</span> <span class=\"key_words\">ATTACKS</span> also project thorns, dealing <span class=\"improvement\">300%</span> damage as <span class=\"key_words\">BLEED</span>",
                "• After casting a Nature Spell (<span class=\"key_words\">POWER</span>), the next <span class=\"key_words\">3</span> <span class=\"key_words\">ATTACKS</span> also project thorns, dealing <span class=\"improvement\">350%</span> damage as <span class=\"key_words\">BLEED</span>"
            ]
        },
        {
            "id": "7dc591a9-7bc1-49aa-915a-5739fb867480",
            "name": "Life Seed",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Dash_Heal.png",
            "descriptions": [
                "• When in combat, <span class=\"key_words\">DASH</span> creates a life seed that sprouts shortly after to restore <span class=\"improvement\">4</span> health points to the most heavily injured nearby Hero",
                "• When in combat, <span class=\"key_words\">DASH</span> creates a life seed that sprouts shortly after to restore <span class=\"improvement\">5</span> health points to the most heavily injured nearby Hero",
                "• When in combat, <span class=\"key_words\">DASH</span> creates a life seed that sprouts shortly after to restore <span class=\"improvement\">6</span> health points to the most heavily injured nearby Hero",
                "• When in combat, <span class=\"key_words\">DASH</span> creates a life seed that sprouts shortly after to restore <span class=\"improvement\">7</span> health points to the most heavily injured nearby Hero"
            ]
        },
        {
            "id": "1ef84610-4d24-4c40-a51d-4a4a33b68e6d",
            "name": "Sacred Strike",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Defense_Attack_Finisher.png",
            "descriptions": [
                "• After casting a Sacred Spell (<span class=\"key_words\">DEFENSE</span>), Merlin's next <span class=\"key_words\">ATTACK</span> will be a finisher that conjures a rune of <span class=\"other\">POTENCY</span> if it hits an enemy and deals <span class=\"improvement\">320%</span> damage",
                "• After casting a Sacred Spell (<span class=\"key_words\">DEFENSE</span>), Merlin's next <span class=\"key_words\">ATTACK</span> will be a finisher that conjures a rune of <span class=\"other\">POTENCY</span> if it hits an enemy and deals <span class=\"improvement\">400%</span> damage",
                "• After casting a Sacred Spell (<span class=\"key_words\">DEFENSE</span>), Merlin's next <span class=\"key_words\">ATTACK</span> will be a finisher that conjures a rune of <span class=\"other\">POTENCY</span> if it hits an enemy and deals <span class=\"improvement\">480%</span> damage",
                "• After casting a Sacred Spell (<span class=\"key_words\">DEFENSE</span>), Merlin's next <span class=\"key_words\">ATTACK</span> will be a finisher that conjures a rune of <span class=\"other\">POTENCY</span> if it hits an enemy and deals <span class=\"improvement\">560%</span> damage"
            ]
        },
        {
            "id": "da6a1cfc-ce34-4177-8108-e2d34830c74a",
            "name": "Sacred Ground",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Defense_Defense_DMG_Buff_Zone.png",
            "descriptions": [
                "• After casting the <span class=\"key_words\">Blink</span> Spell, a sacred area will appear on the ground for <span class=\"key_words\">5</span> seconds\n• All Heroes inside the area will gain <span class=\"improvement\">+40</span> <span class=\"key_words\">DMG</span>",
                "• After casting the <span class=\"key_words\">Blink</span> Spell, a sacred area will appear on the ground for <span class=\"key_words\">5</span> seconds\n• All Heroes inside the area will gain <span class=\"improvement\">+50</span> <span class=\"key_words\">DMG</span>",
                "• After casting the <span class=\"key_words\">Blink</span> Spell, a sacred area will appear on the ground for <span class=\"key_words\">5</span> seconds\n• All Heroes inside the area will gain <span class=\"improvement\">+60</span> <span class=\"key_words\">DMG</span>",
                "• After casting the <span class=\"key_words\">Blink</span> Spell, a sacred area will appear on the ground for <span class=\"key_words\">5</span> seconds\n• All Heroes inside the area will gain <span class=\"improvement\">+70</span> <span class=\"key_words\">DMG</span>"
            ]
        },
        {
            "id": "40f5ba90-18d9-456b-b8ff-6c9afd0af8a6",
            "name": "Retaliation",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Defense_Power_Shield.png",
            "descriptions": [
                "• The <span class=\"key_words\">Blessing</span> Spell also applies a <span class=\"key_words\">10</span> <span class=\"key_words\">SHIELD</span> for <span class=\"key_words\">6</span> seconds to the Hero affected\n• When this expires or is destroyed, it deals <span class=\"improvement\">60</span> area damage",
                "• The <span class=\"key_words\">Blessing</span> Spell also applies a <span class=\"key_words\">10</span> <span class=\"key_words\">SHIELD</span> for <span class=\"key_words\">6</span> seconds to the Hero affected\n• When this expires or is destroyed, it deals <span class=\"improvement\">75</span> area damage",
                "• The <span class=\"key_words\">Blessing</span> Spell also applies a <span class=\"key_words\">10</span> <span class=\"key_words\">SHIELD</span> for <span class=\"key_words\">6</span> seconds to the Hero affected\n• When this expires or is destroyed, it deals <span class=\"improvement\">90</span> area damage",
                "• The <span class=\"key_words\">Blessing</span> Spell also applies a <span class=\"key_words\">10</span> <span class=\"key_words\">SHIELD</span> for <span class=\"key_words\">6</span> seconds to the Hero affected\n• When this expires or is destroyed, it deals <span class=\"improvement\">105</span> area damage"
            ]
        },
        {
            "id": "9ae5d27e-3236-4a30-84dc-3d9964b4185d",
            "name": "Holy Fire",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Defense_Special_Ignite.png",
            "descriptions": [
                "• The <span class=\"key_words\">Light Nova</span> Spell deals <span class=\"improvement\">28</span> damage (<span class=\"key_words\">+100%</span> per rune of <span class=\"other\">POTENCY</span> spent) to enemies hit and applies <span class=\"key_words\">IGNITE</span>",
                "• The <span class=\"key_words\">Light Nova</span> Spell deals <span class=\"improvement\">35</span> damage (<span class=\"key_words\">+100%</span> per rune of <span class=\"other\">POTENCY</span> spent) to enemies hit and applies <span class=\"key_words\">IGNITE</span>",
                "• The <span class=\"key_words\">Light Nova</span> Spell deals <span class=\"improvement\">42</span> damage (<span class=\"key_words\">+100%</span> per rune of <span class=\"other\">POTENCY</span> spent) to enemies hit and applies <span class=\"key_words\">IGNITE</span>",
                "• The <span class=\"key_words\">Light Nova</span> Spell deals <span class=\"improvement\">49</span> damage (<span class=\"key_words\">+100%</span> per rune of <span class=\"other\">POTENCY</span> spent) to enemies hit and applies <span class=\"key_words\">IGNITE</span>"
            ]
        },
        {
            "id": "7e11a213-d47b-4991-b857-17de576dee25",
            "name": "Elemental Affinity",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Passive_Crit_Chance_On_Status.png",
            "descriptions": [
                "• All of Merlin's Abilities have <span class=\"improvement\">+16%</span> <span class=\"key_words\">Crit Chance</span> on enemies affected by <span class=\"key_words\">IGNITE</span> or <span class=\"key_words\">CHILLED</span> status (both can stack) ",
                "• All of Merlin's Abilities have <span class=\"improvement\">+20%</span> <span class=\"key_words\">Crit Chance</span> on enemies affected by <span class=\"key_words\">IGNITE</span> or <span class=\"key_words\">CHILLED</span> status (both can stack) ",
                "• All of Merlin's Abilities have <span class=\"improvement\">+24%</span> <span class=\"key_words\">Crit Chance</span> on enemies affected by <span class=\"key_words\">IGNITE</span> or <span class=\"key_words\">CHILLED</span> status (both can stack) ",
                "• All of Merlin's Abilities have <span class=\"improvement\">+28%</span> <span class=\"key_words\">Crit Chance</span> on enemies affected by <span class=\"key_words\">IGNITE</span> or <span class=\"key_words\">CHILLED</span> status (both can stack) "
            ]
        },
        {
            "id": "fcb4cce4-b7c9-4060-b115-d929e9f03e84",
            "name": "Astrology",
            "tier": 0,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Passive_Gain_Reroll_High_Talent.png",
            "descriptions": [
                "• Gain <span class=\"key_words\">+3 Star(s) of Fate</span>\n• Future Talents have a <span class=\"improvement\">+15%</span> chance of being Rare or above",
                "• Gain <span class=\"key_words\">+3 Star(s) of Fate</span>\n• Future Talents have a <span class=\"improvement\">+25%</span> chance of being Rare or above",
                "• Gain <span class=\"key_words\">+3 Star(s) of Fate</span>\n• Future Talents have a <span class=\"improvement\">+35%</span> chance of being Rare or above",
                "• Gain <span class=\"key_words\">+3 Star(s) of Fate</span>\n• Future Talents have a <span class=\"improvement\">+45%</span> chance of being Rare or above"
            ]
        },
        {
            "id": "2ae524b3-d836-4b26-bbea-06eb240061cb",
            "name": "Runic Might",
            "tier": 0,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Passive_Quest_Crit_Chance.png",
            "descriptions": [
                "• <span class=\"key_words\">Quest (x20):</span> In combat, casting a Spell that consumes <span class=\"key_words\">3</span> runes of <span class=\"other\">POTENCY</span> earns <span class=\"key_words\">+0.5</span> <span class=\"key_words\">DMG</span>\n• <span class=\"key_words\">Complete:</span> Repeating this action makes the Spell cast gain <span class=\"improvement\">20%</span> <span class=\"key_words\">Crit Chance</span>",
                "• <span class=\"key_words\">Quest (x20):</span> In combat, casting a Spell that consumes <span class=\"key_words\">3</span> runes of <span class=\"other\">POTENCY</span> earns <span class=\"key_words\">+0.5</span> <span class=\"key_words\">DMG</span>\n• <span class=\"key_words\">Complete:</span> Repeating this action makes the Spell cast gain <span class=\"improvement\">25%</span> <span class=\"key_words\">Crit Chance</span>",
                "• <span class=\"key_words\">Quest (x20):</span> In combat, casting a Spell that consumes <span class=\"key_words\">3</span> runes of <span class=\"other\">POTENCY</span> earns <span class=\"key_words\">+0.5</span> <span class=\"key_words\">DMG</span>\n• <span class=\"key_words\">Complete:</span> Repeating this action makes the Spell cast gain <span class=\"improvement\">30%</span> <span class=\"key_words\">Crit Chance</span>",
                "• <span class=\"key_words\">Quest (x20):</span> In combat, casting a Spell that consumes <span class=\"key_words\">3</span> runes of <span class=\"other\">POTENCY</span> earns <span class=\"key_words\">+0.5</span> <span class=\"key_words\">DMG</span>\n• <span class=\"key_words\">Complete:</span> Repeating this action makes the Spell cast gain <span class=\"improvement\">35%</span> <span class=\"key_words\">Crit Chance</span>"
            ]
        },
        {
            "id": "6a77a749-a8bd-4b18-abc2-f63672fc4b90",
            "name": "Eternal Dream",
            "tier": 0,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Passive_Repeatable_Quest_Gain_DS.png",
            "descriptions": [
                "• Each time Merlin casts his nine different Spells, he gains <span class=\"improvement\">30</span> <span class=\"key_words\">Dream Shards</span>\n• Does not work within a Safe Zone or during Chapter Boss fights",
                "• Each time Merlin casts his nine different Spells, he gains <span class=\"improvement\">40</span> <span class=\"key_words\">Dream Shards</span>\n• Does not work within a Safe Zone or during Chapter Boss fights",
                "• Each time Merlin casts his nine different Spells, he gains <span class=\"improvement\">50</span> <span class=\"key_words\">Dream Shards</span>\n• Does not work within a Safe Zone or during Chapter Boss fights",
                "• Each time Merlin casts his nine different Spells, he gains <span class=\"improvement\">60</span> <span class=\"key_words\">Dream Shards</span>\n• Does not work within a Safe Zone or during Chapter Boss fights"
            ]
        },
        {
            "id": "373c6e2c-d783-4078-b7dd-840bc9346cc3",
            "name": "Freezing Stones",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Power_Defense_Chilled.png",
            "descriptions": [
                "• The <span class=\"key_words\">Stone Shield</span> Spell applies <span class=\"key_words\">CHILLED</span> to enemies hit, and its final explosion deals <span class=\"improvement\">+40%</span> damage",
                "• The <span class=\"key_words\">Stone Shield</span> Spell applies <span class=\"key_words\">CHILLED</span> to enemies hit, and its final explosion deals <span class=\"improvement\">+50%</span> damage",
                "• The <span class=\"key_words\">Stone Shield</span> Spell applies <span class=\"key_words\">CHILLED</span> to enemies hit, and its final explosion deals <span class=\"improvement\">+60%</span> damage",
                "• The <span class=\"key_words\">Stone Shield</span> Spell applies <span class=\"key_words\">CHILLED</span> to enemies hit, and its final explosion deals <span class=\"improvement\">+70%</span> damage"
            ]
        },
        {
            "id": "bd9e6d6d-ae1b-4960-a803-7217e45d107f",
            "name": "Natural Harmony",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Power_Heal.png",
            "descriptions": [
                "• Hitting at least one enemy with a Nature Spell (<span class=\"key_words\">POWER</span>) restores <span class=\"improvement\">8</span> health to all nearby Heroes",
                "• Hitting at least one enemy with a Nature Spell (<span class=\"key_words\">POWER</span>) restores <span class=\"improvement\">10</span> health to all nearby Heroes",
                "• Hitting at least one enemy with a Nature Spell (<span class=\"key_words\">POWER</span>) restores <span class=\"improvement\">12</span> health to all nearby Heroes",
                "• Hitting at least one enemy with a Nature Spell (<span class=\"key_words\">POWER</span>) restores <span class=\"improvement\">14</span> health to all nearby Heroes"
            ]
        },
        {
            "id": "53dd892b-05a1-4009-9453-d4c39be8f929",
            "name": "Brambles Whirlwind",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Power_Power_AOE.png",
            "descriptions": [
                "• When casting the <span class=\"key_words\">Giant Brambles</span> Spell, Merlin makes the brambles spin around him, dealing <span class=\"improvement\">+32%</span> damage all around",
                "• When casting the <span class=\"key_words\">Giant Brambles</span> Spell, Merlin makes the brambles spin around him, dealing <span class=\"improvement\">+40%</span> damage all around",
                "• When casting the <span class=\"key_words\">Giant Brambles</span> Spell, Merlin makes the brambles spin around him, dealing <span class=\"improvement\">+48%</span> damage all around",
                "• When casting the <span class=\"key_words\">Giant Brambles</span> Spell, Merlin makes the brambles spin around him, dealing <span class=\"improvement\">+56%</span> damage all around"
            ]
        },
        {
            "id": "3a3c997f-2f4c-43ee-815b-356c48257855",
            "name": "Shooting Stars",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Power_Special_Vulnerable.png",
            "descriptions": [
                "• The <span class=\"key_words\">Starfall</span> Spell applies <span class=\"key_words\">VULNERABLE</span> to enemies hit for <span class=\"improvement\">4</span> seconds",
                "• The <span class=\"key_words\">Starfall</span> Spell applies <span class=\"key_words\">VULNERABLE</span> to enemies hit for <span class=\"improvement\">5</span> seconds",
                "• The <span class=\"key_words\">Starfall</span> Spell applies <span class=\"key_words\">VULNERABLE</span> to enemies hit for <span class=\"improvement\">6</span> seconds",
                "• The <span class=\"key_words\">Starfall</span> Spell applies <span class=\"key_words\">VULNERABLE</span> to enemies hit for <span class=\"improvement\">7</span> seconds"
            ]
        },
        {
            "id": "5583a864-0471-4a4d-b459-9b3092f3a48f",
            "name": "Arcane Shield",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Special_Block.png",
            "descriptions": [
                "• Casting an Arcane Spell (<span class=\"key_words\">SPECIAL</span>) surrounds Merlin with protection that blocks any attack for <span class=\"improvement\">1.2</span> seconds",
                "• Casting an Arcane Spell (<span class=\"key_words\">SPECIAL</span>) surrounds Merlin with protection that blocks any attack for <span class=\"improvement\">1.5</span> seconds",
                "• Casting an Arcane Spell (<span class=\"key_words\">SPECIAL</span>) surrounds Merlin with protection that blocks any attack for <span class=\"improvement\">1.8</span> seconds",
                "• Casting an Arcane Spell (<span class=\"key_words\">SPECIAL</span>) surrounds Merlin with protection that blocks any attack for <span class=\"improvement\">2</span> seconds"
            ]
        },
        {
            "id": "bac16372-9eeb-4ddf-945f-b2bb8b597c0e",
            "name": "Frost Arcane",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Special_Defense_Attack_AOE.png",
            "descriptions": [
                "• Whenever <span class=\"key_words\">Frost Orb</span> is touched by Merlin's <span class=\"key_words\">ATTACK</span>, it emits a blast dealing <span class=\"improvement\">20</span> damage all around",
                "• Whenever <span class=\"key_words\">Frost Orb</span> is touched by Merlin's <span class=\"key_words\">ATTACK</span>, it emits a blast dealing <span class=\"improvement\">25</span> damage all around",
                "• Whenever <span class=\"key_words\">Frost Orb</span> is touched by Merlin's <span class=\"key_words\">ATTACK</span>, it emits a blast dealing <span class=\"improvement\">30</span> damage all around",
                "• Whenever <span class=\"key_words\">Frost Orb</span> is touched by Merlin's <span class=\"key_words\">ATTACK</span>, it emits a blast dealing <span class=\"improvement\">35</span> damage all around"
            ]
        },
        {
            "id": "ab62dea6-80f0-473d-ad4d-30ad54b6f715",
            "name": "Arcanic Rune",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Special_Gain_Potency.png",
            "descriptions": [
                "• Hitting at least one enemy with an Arcane Spell (<span class=\"key_words\">SPECIAL</span>) conjures a rune of <span class=\"other\">POTENCY</span>\n• Arcane Spells (<span class=\"key_words\">SPECIAL</span>) deal <span class=\"improvement\">+20%</span> damage",
                "• Hitting at least one enemy with an Arcane Spell (<span class=\"key_words\">SPECIAL</span>) conjures a rune of <span class=\"other\">POTENCY</span>\n• Arcane Spells (<span class=\"key_words\">SPECIAL</span>) deal <span class=\"improvement\">+25%</span> damage",
                "• Hitting at least one enemy with an Arcane Spell (<span class=\"key_words\">SPECIAL</span>) conjures a rune of <span class=\"other\">POTENCY</span>\n• Arcane Spells (<span class=\"key_words\">SPECIAL</span>) deal <span class=\"improvement\">+30%</span> damage",
                "• Hitting at least one enemy with an Arcane Spell (<span class=\"key_words\">SPECIAL</span>) conjures a rune of <span class=\"other\">POTENCY</span>\n• Arcane Spells (<span class=\"key_words\">SPECIAL</span>) deal <span class=\"improvement\">+35%</span> damage"
            ]
        },
        {
            "id": "5e24e33d-fd19-45a3-8486-5440bd057203",
            "name": "Lightning Storm",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Special_Power_Lightning.png",
            "descriptions": [
                "• Every <span class=\"key_words\">4</span> times the <span class=\"key_words\">Fork of Lightning</span> Spell hits an enemy, a lightning strike will hit a nearby enemy, dealing <span class=\"improvement\">12</span> damage",
                "• Every <span class=\"key_words\">4</span> times the <span class=\"key_words\">Fork of Lightning</span> Spell hits an enemy, a lightning strike will hit a nearby enemy, dealing <span class=\"improvement\">15</span> damage",
                "• Every <span class=\"key_words\">4</span> times the <span class=\"key_words\">Fork of Lightning</span> Spell hits an enemy, a lightning strike will hit a nearby enemy, dealing <span class=\"improvement\">18</span> damage",
                "• Every <span class=\"key_words\">4</span> times the <span class=\"key_words\">Fork of Lightning</span> Spell hits an enemy, a lightning strike will hit a nearby enemy, dealing <span class=\"improvement\">21</span> damage"
            ]
        },
        {
            "id": "b958292f-8ec7-4e6f-bedf-504b6b331f46",
            "name": "Fire Barrage",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Special_Special_Missiles.png",
            "descriptions": [
                "• The <span class=\"key_words\">Fireball</span> Spell also sends <span class=\"key_words\">2</span> fire missiles (<span class=\"key_words\">+2</span> per Rune of <span class=\"other\">POTENCY</span> spent) to nearby enemies, dealing <span class=\"improvement\">16</span> damage each",
                "• The <span class=\"key_words\">Fireball</span> Spell also sends <span class=\"key_words\">2</span> fire missiles (<span class=\"key_words\">+2</span> per Rune of <span class=\"other\">POTENCY</span> spent) to nearby enemies, dealing <span class=\"improvement\">20</span> damage each",
                "• The <span class=\"key_words\">Fireball</span> Spell also sends <span class=\"key_words\">2</span> fire missiles (<span class=\"key_words\">+2</span> per Rune of <span class=\"other\">POTENCY</span> spent) to nearby enemies, dealing <span class=\"improvement\">24</span> damage each",
                "• The <span class=\"key_words\">Fireball</span> Spell also sends <span class=\"key_words\">2</span> fire missiles (<span class=\"key_words\">+2</span> per Rune of <span class=\"other\">POTENCY</span> spent) to nearby enemies, dealing <span class=\"improvement\">28</span> damage each"
            ]
        },
        {
            "id": "ef6bf301-2f14-4fac-8fe3-11fcc0a71dab",
            "name": "Celestial Wrath",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Trait_Lightning.png",
            "descriptions": [
                "• <span class=\"key_words\">TRAIT</span> triggers a lightning strike on up to nearby <span class=\"improvement\">4</span> enemies\n• Lightning strikes deal <span class=\"key_words\">80</span> damage each and are stronger if fewer enemies are hit",
                "• <span class=\"key_words\">TRAIT</span> triggers a lightning strike on up to nearby <span class=\"improvement\">5</span> enemies\n• Lightning strikes deal <span class=\"key_words\">80</span> damage each and are stronger if fewer enemies are hit",
                "• <span class=\"key_words\">TRAIT</span> triggers a lightning strike on up to nearby <span class=\"improvement\">6</span> enemies\n• Lightning strikes deal <span class=\"key_words\">80</span> damage each and are stronger if fewer enemies are hit",
                "• <span class=\"key_words\">TRAIT</span> triggers a lightning strike on up to nearby <span class=\"improvement\">7</span> enemies\n• Lightning strikes deal <span class=\"key_words\">80</span> damage each and are stronger if fewer enemies are hit"
            ]
        },
        {
            "id": "44dc3ba6-8a61-4a67-95f6-ed7d4b25fa8c",
            "name": "Trinity",
            "tier": 0,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Trait_Quest_Gain_Charge.png",
            "descriptions": [
                "• <span class=\"key_words\">Quest (x3):</span> Collect Excalibur, the Holy Grail or Father Time's Hourglass to gain <span class=\"key_words\">+1</span> <span class=\"key_words\">Star(s) of Fate</span>\n• <span class=\"key_words\">Complete:</span> Gain <span class=\"key_words\">+1 TRAIT charge</span> and all critical damage will increase by <span class=\"improvement\">40%</span>",
                "• <span class=\"key_words\">Quest (x3):</span> Collect Excalibur, the Holy Grail or Father Time's Hourglass to gain <span class=\"key_words\">+1</span> <span class=\"key_words\">Star(s) of Fate</span>\n• <span class=\"key_words\">Complete:</span> Gain <span class=\"key_words\">+1 TRAIT charge</span> and all critical damage will increase by <span class=\"improvement\">50%</span>",
                "• <span class=\"key_words\">Quest (x3):</span> Collect Excalibur, the Holy Grail or Father Time's Hourglass to gain <span class=\"key_words\">+1</span> <span class=\"key_words\">Star(s) of Fate</span>\n• <span class=\"key_words\">Complete:</span> Gain <span class=\"key_words\">+1 TRAIT charge</span> and all critical damage will increase by <span class=\"improvement\">60%</span>",
                "• <span class=\"key_words\">Quest (x3):</span> Collect Excalibur, the Holy Grail or Father Time's Hourglass to gain <span class=\"key_words\">+1</span> <span class=\"key_words\">Star(s) of Fate</span>\n• <span class=\"key_words\">Complete:</span> Gain <span class=\"key_words\">+1 TRAIT charge</span> and all critical damage will increase by <span class=\"improvement\">70%</span>"
            ]
        },
        {
            "id": "288289c8-659c-4503-8220-b5fc06c09a3f",
            "name": "Grace of Heaven",
            "tier": 1,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Trait_Reduce_Cooldown_After_Defense.png",
            "descriptions": [
                "• Casting a Sacred Spell (<span class=\"key_words\">DEFENSE</span>) reduces <span class=\"key_words\">TRAIT</span> cooldown by <span class=\"improvement\">4</span> seconds ",
                "• Casting a Sacred Spell (<span class=\"key_words\">DEFENSE</span>) reduces <span class=\"key_words\">TRAIT</span> cooldown by <span class=\"improvement\">5</span> seconds ",
                "• Casting a Sacred Spell (<span class=\"key_words\">DEFENSE</span>) reduces <span class=\"key_words\">TRAIT</span> cooldown by <span class=\"improvement\">6</span> seconds ",
                "• Casting a Sacred Spell (<span class=\"key_words\">DEFENSE</span>) reduces <span class=\"key_words\">TRAIT</span> cooldown by <span class=\"improvement\">7</span> seconds "
            ]
        },
        {
            "id": "d348c049-0661-4217-86c7-3433919c150f",
            "name": "Energy Stone",
            "tier": 3,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Ultimate_1_AOE.png",
            "descriptions": [
                "• For every <span class=\"key_words\">10%</span> health lost, Standing Stone emits a blast of energy toward a nearby enemy, dealing <span class=\"improvement\">30</span> damage",
                "• For every <span class=\"key_words\">10%</span> health lost, Standing Stone emits a blast of energy toward a nearby enemy, dealing <span class=\"improvement\">37</span> damage",
                "• For every <span class=\"key_words\">10%</span> health lost, Standing Stone emits a blast of energy toward a nearby enemy, dealing <span class=\"improvement\">45</span> damage",
                "• For every <span class=\"key_words\">10%</span> health lost, Standing Stone emits a blast of energy toward a nearby enemy, dealing <span class=\"improvement\">52</span> damage"
            ]
        },
        {
            "id": "05ba3344-80e9-46cb-8f76-72b3f4921706",
            "name": "Megalithic Site",
            "tier": 3,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Ultimate_1_Multi_Stone.png",
            "descriptions": [
                "• Merlin extracts <span class=\"key_words\">3</span> standing stones from the ground around him, with each one dealing <span class=\"improvement\">80 %</span> damage when destroyed",
                "• Merlin extracts <span class=\"key_words\">3</span> standing stones from the ground around him, with each one dealing <span class=\"improvement\">100 %</span> damage when destroyed",
                "• Merlin extracts <span class=\"key_words\">3</span> standing stones from the ground around him, with each one dealing <span class=\"improvement\">120 %</span> damage when destroyed",
                "• Merlin extracts <span class=\"key_words\">3</span> standing stones from the ground around him, with each one dealing <span class=\"improvement\">140 %</span> damage when destroyed"
            ]
        },
        {
            "id": "9fe1b3ca-5dc1-4b1a-b60c-2deb994c7553",
            "name": "Dark Swiftness",
            "tier": 3,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Ultimate_2_Dash.png",
            "descriptions": [
                "• <span class=\"key_words\">DASH</span> can be held for up to <span class=\"key_words\">0.5</span> second(s) to deal <span class=\"improvement\">60</span> damage to enemies passed through",
                "• <span class=\"key_words\">DASH</span> can be held for up to <span class=\"key_words\">0.5</span> second(s) to deal <span class=\"improvement\">75</span> damage to enemies passed through",
                "• <span class=\"key_words\">DASH</span> can be held for up to <span class=\"key_words\">0.5</span> second(s) to deal <span class=\"improvement\">90</span> damage to enemies passed through",
                "• <span class=\"key_words\">DASH</span> can be held for up to <span class=\"key_words\">0.5</span> second(s) to deal <span class=\"improvement\">105</span> damage to enemies passed through"
            ]
        },
        {
            "id": "9fcd6781-3b42-4240-bc07-135d68f4a5a3",
            "name": "Corrupted Arts",
            "tier": 3,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Skill_Ultimate_2_Dmg_Cursed_MO.png",
            "descriptions": [
                "• Forbidden Spells (<span class=\"key_words\">ULTIMATE</span>) deal <span class=\"improvement\">+12%</span> damage per <span class=\"key_words\">Cursed Magical Object</span> owned (currently: <span class=\"improvement\">+0%</span>)",
                "• Forbidden Spells (<span class=\"key_words\">ULTIMATE</span>) deal <span class=\"improvement\">+15%</span> damage per <span class=\"key_words\">Cursed Magical Object</span> owned (currently: <span class=\"improvement\">+0%</span>)",
                "• Forbidden Spells (<span class=\"key_words\">ULTIMATE</span>) deal <span class=\"improvement\">+18%</span> damage per <span class=\"key_words\">Cursed Magical Object</span> owned (currently: <span class=\"improvement\">+0%</span>)",
                "• Forbidden Spells (<span class=\"key_words\">ULTIMATE</span>) deal <span class=\"improvement\">+21%</span> damage per <span class=\"key_words\">Cursed Magical Object</span> owned (currently: <span class=\"improvement\">+0%</span>)"
            ]
        },
        {
            "id": "f7f256f1-a580-4d54-8ea3-6e1cc8f0e4eb",
            "name": "Standing Stone",
            "tier": 2,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Ability_Merlin_Ultimate_1.png",
            "descriptions": [
                "• Pulls a standing stone out of the ground, drawing the attention of enemies\n• The stone passively loses health and explodes when this reaches zero"
            ]
        },
        {
            "id": "8c4359c5-eaa1-43da-8da8-79cd444c12d0",
            "name": "Forbidden Spells",
            "tier": 2,
            "icon": "http://dt-live-3.passtechgames.com:8080/heroes/merlin/Ability_Merlin_Ultimate_2.png",
            "descriptions": [
                "• Grants access to three forbidden spells, to be cast as the next Ability used:\n• <span class=\"key_words\">POWER:</span> Cataclysm\n• <span class=\"key_words\">SPECIAL:</span> Unholy Strikes\n• <span class=\"key_words\">DEFENSE:</span> Blood Ritual"
            ]
        }
    ];
}

function getMerlinTalentsMine() {
    return [
        {
            "code": "runic_might",
            "name": "Runic Might",
            "iconUrl": "",
            "type": "starting",
            "unlockedAtRank": 1,
            "description": [
                "{Quest (x20):} In combat, casting a Spell that consumes {3} runes of {{POTENCY} earns {+0.5} {DMG}",
                "{Complete:} Repeating this action makes the Spell cast gain {{{20%} {Crit Chance}</p>"
            ],
            "changePerLevel": [
                "+5% crit chance"
            ]
        },
        {
            "code": "astrology",
            "name": "Astrology",
            "iconUrl": "",
            "type": "starting",
            "unlockedAtRank": 1,
            "description": [
                "Gain {+3 Star(s) of Fate}",
                "Future Talents have a {{{+15%} chance of being Rare or above"
            ],
            "changePerLevel": [
                "+10% chance of being Rare or above"
            ]
        },
        {
            "code": "eternal_dream",
            "name": "Eternal Dream",
            "iconUrl": "",
            "type": "starting",
            "unlockedAtRank": 2,
            "description": [
                "Each time Merlin casts his nine different Spells, he gains {{{30} {Dream Shards}",
                "Does not work within a Safe Zone or during Chapter Boss fights"
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "trinity",
            "name": "Trinity",
            "iconUrl": "",
            "type": "starting",
            "unlockedAtRank": 5,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "wild_magic",
            "name": "Wild Magic",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "sacred_strike",
            "name": "Sacred Strike",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "sacred_ground",
            "name": "Sacred Ground",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "grace_of_heaven",
            "name": "Grace of Heaven",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "fire_barrage",
            "name": "Fire Barrage",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "arcane_shield",
            "name": "Arcane Shield",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "brambles_whirlwind",
            "name": "Brambles Whirlwind",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "natural_harmony",
            "name": "Natural Harmony",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 1,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "arcanic_rune",
            "name": "Arcanic Rune",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 2,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "lightning_storm",
            "name": "Lightning Storm",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 3,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "shooting_stars",
            "name": "Shooting Stars",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 3,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "freezing_stones",
            "name": "Freezing Stones",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 4,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "holy_fire",
            "name": "Holy Fire",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 4,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "elemental_affinity",
            "name": "Elemental Affinity",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 5,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "frost_arcane",
            "name": "Frost Arcane",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 7,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "retaliation",
            "name": "Retaliation",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 7,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "life_seed",
            "name": "Life Seed",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 8,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "celestial_wrath",
            "name": "Celestial Wrath",
            "iconUrl": "",
            "type": "standard",
            "unlockedAtRank": 8,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "energy_stone",
            "name": "Energy Stone",
            "iconUrl": "",
            "type": "final",
            "unlockedAtRank": 1,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "dark_swiftness",
            "name": "Dark Swiftness",
            "iconUrl": "",
            "type": "final",
            "unlockedAtRank": 6,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "corrupted_arts",
            "name": "Corrupted Arts",
            "iconUrl": "",
            "type": "final",
            "unlockedAtRank": 9,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        },
        {
            "code": "megalithic_site",
            "name": "Megalithic Site",
            "iconUrl": "",
            "type": "final",
            "unlockedAtRank": 9,
            "description": [
                ""
            ],
            "changePerLevel": [
                ""
            ]
        }
    ];
}