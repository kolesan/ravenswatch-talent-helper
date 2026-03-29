
import { writeFile } from "fs/promises";

import { heroesBase } from "../../data/heroes/heroesBase";
import { HeroBase, HeroBaseCode } from "../../data/heroes/types";
import { isTruthy } from "../../ui/utils/isTruthy";
import { descriptionKeyMaps } from "../../utils/descriptionKeyMaps";
import { Talent, TalentType } from "../extractTalents/types";

import { ParsedPasstechTalent, PasstechTalent } from "./types";

for (let i = 0; i < heroesBase.asArray.length; i++) {
    const hero = heroesBase.asArray[i]!;

    const parsedPasstechTalents = await parsePasstechTalents(hero.code);
    const myTalents = await getMyTalents(hero.code);

    const mergedTalents = mergePasstechAndMyTalents(
        parsedPasstechTalents, 
        myTalents
    );

    await writeTalentsToFile(hero, mergedTalents);
}

function writeTalentsToFile(hero: HeroBase, mergedTalents: Talent[]) {
    const talentsJson = JSON.stringify(mergedTalents, null, "    ");

    const content = `import { Talent } from "../../scripts/extractTalents/types";

export const ${hero.code}: Talent[] = ${talentsJson};`;

    return writeFile(`./src/scrapedData/mergedTalents/${hero.code}.ts`, content)
        .then(() => console.log(
            `Success writing '${hero.name}' talents to file`
        ))
        .catch(err => console.log(
            `Error writing '${hero.name}' talents to file: `, 
            err
        ));
}

async function parsePasstechTalents(
    heroCode: HeroBaseCode
): Promise<ParsedPasstechTalent[]> {
    const passtechTalentsFile = 
        await import(`../../data/passtechResponses/heroes/${heroCode}`);
    const talents = passtechTalentsFile[heroCode]();
    return talents.map(parseTalent);
}

async function getMyTalents(
    heroCode: HeroBaseCode
): Promise<Talent[]> {
    const myTalentsFile = await import(`../../scrapedData/heroTalents/${heroCode}`);
    // console.log(myTalentsFile.default);
    return myTalentsFile.default;
}

function mergePasstechAndMyTalents(
    passtechTalents: ParsedPasstechTalent[], 
    myTalents: Talent[]
) {
    const merged = passtechTalents.map((passtech, i) => {
        // console.log(mine.code, passtechTalents.map(it => it.code));
        const mine = myTalents.find(it => it.code === passtech.code);
        return merge(passtech, i, mine);
    });
    const fixedOrder = myTalents
        .map(it => merged.find(m => m.code === it.code))
        .filter(isTruthy);
    return [
        ...fixedOrder,
        ...merged.slice(-2),
    ];
}


function merge(passtech: ParsedPasstechTalent, index: number, mine?: Talent): Talent {
    return {
        code: passtech.code,
        name: passtech.name,
        iconUrl: passtech.iconUrl,
        type: passtech.type,
        unlockedAtRank: mine?.unlockedAtRank || (index === 27 ? 6 : 1),
        multiplayerOnly: mine?.multiplayerOnly,
        description: passtech.description,
        improvements: passtech.improvements,
        degradations: passtech.degradations,
    }
}

function parseTalent(talent: PasstechTalent): ParsedPasstechTalent {
    const {
        description,
        improvements,
        degradations,
    } = parseDescriptions(talent.descriptions);
    return {
        code: nameToCode(talent.name),
        name: talent.name.trim(),
        iconUrl: talent.icon,
        type: parseType(talent.tier),
        description,
        improvements,
        degradations,
    };
}

function nameToCode(name: string) {
    return name.trim().replaceAll(" ", "_").replaceAll("/", "or").toLowerCase();
}

function parseType(tier: number) {
    const map: Record<number, TalentType> = {
        0: "starting",
        1: "standard",
        2: "ultimate",
        3: "final",
    }
    return map[tier] || "unknown_talent_type";
}

function parseDescriptions(descriptions: string[]) {
    const parsedDescriptions = descriptions.map(parseDescription);
    const improvements = parsedDescriptions.map(parseDescriptionTags(improvementTag()));
    const degradations = parsedDescriptions.map(parseDescriptionTags(degradationTag()));
    return {
        description: descriptions[0]
            ? parseDescription(descriptions[0])
            : [],
        improvements,
        degradations,
    }
}
function parseDescription(description: string) {
    const initialCleanup = description
        .split("• ")
        .filter(Boolean)
        .map(it => it.replaceAll(/ \(currently: .*?\)/g, ""))
        .map(it => it.replaceAll("\n", ""))

    return initialCleanup
        .map(descriptionKeyMaps.passtechToMyTag.apply);
}


function improvementTag() { 
    return descriptionKeyMaps.myTags.tags.improvement
        .replaceAll(/[\{\}]/g, "");
};
function degradationTag() { 
    return descriptionKeyMaps.myTags.tags.degradation
        .replaceAll(/[\{\}]/g, "");
};


function parseDescriptionTags(tag: string) {
    const parseFn = parseDescriptionTag(tag);
    return function(description: string[]) {
        return parseFn(description.join(" "));
    }
}
function parseDescriptionTag(tag: string) {
    return function(description: string) {
        const parsed = description
            .matchAll(new RegExp(`{${tag}}.*?{/s}`, "g")).toArray()
            .map(it => it[0])
            .filter(it => !it.includes("+0%"))
            .map(it => it.replace(new RegExp(`{${tag}}`), "").replace(/\{\/s\}/g, ""));
        return parsed;
    }
}
