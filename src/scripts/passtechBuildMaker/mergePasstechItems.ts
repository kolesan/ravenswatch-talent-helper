import { writeFile } from "fs/promises";

import { cursed } from "../../scrapedData/items/cursed";
import { legendary } from "../../scrapedData/items/legendary";
import { MagicalObject } from "../../types";
import { descriptionKeyMaps } from "../../utils/descriptionKeyMaps";

import { ParsedPasstechItem, PasstechItem } from "./types";
import { fixApostrophes } from "../extractTalents/utils/fixApostrophes";


const {
    legendary: passtechLegendary,
    cursed: passtechCursed,
} = await parsePasstechItems();

const mergedLegendaryItems = mergePasstechAndMyItems(
    passtechLegendary, 
    legendary
);
const mergedCursedItems = mergePasstechAndMyItems(
    passtechCursed, 
    cursed
);

await writeItemsToFile("legendary", mergedLegendaryItems);
await writeItemsToFile("cursed", mergedCursedItems);


function writeItemsToFile(type: string, mergedItems: MagicalObject[]) {
    const itemsJson = JSON.stringify(mergedItems, null, "    ");

    const content = `import { MagicalObject } from "../../types";
    
export const ${type}: MagicalObject[] = ${itemsJson};`;

    return writeFile(`./src/scrapedData/mergedItems/${type}.ts`, content)
        .then(() => console.log(
            `Success writing '${type}' items to file`
        ))
        .catch(err => console.log(
            `Error writing '${type}' items to file: `, 
            err
        ));
}

async function parsePasstechItems(): Promise<{
    legendary: ParsedPasstechItem[];
    cursed: ParsedPasstechItem[];
}> {
    const passtechItemsFile = await import(`./passtechData/items`);
    const items = passtechItemsFile.items();
    const parsed = items.map(parseItem);
    return {
        legendary: parsed.filter(it => it.type === "legendary"),
        cursed: parsed.filter(it => it.type === "cursed"),
    };
}

function mergePasstechAndMyItems(
    passtechItems: ParsedPasstechItem[], 
    myItems: MagicalObject[]
) {
    return myItems.map(mine => {
        // console.log(mine.code, passtechItems.map(it => it.code));
        const passtech = passtechItems.find(it => it.code === mine.code);
        return merge(mine, passtech);
    });
}


function merge(mine: MagicalObject, passtech: ParsedPasstechItem): MagicalObject {
    return {
        ...mine,
        description: passtech.description,
    };
}

function parseItem(item: PasstechItem): ParsedPasstechItem {
    const name = item.name.replaceAll("’", "'");
    return {
        code: nameToCode(name),
        name,
        type: parseType(item.quality_name),
        description: parseDescription(item.description),
    };
}

function nameToCode(name: string) {
    return name.trim().replaceAll(" ", "_").toLowerCase();
}

function parseType(qualityName: string) {
    const map: Record<string, "cursed" | "legendary"> = {
        "Legendary": "legendary",
        "Cursed": "cursed",
    };
    return map[qualityName];
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
