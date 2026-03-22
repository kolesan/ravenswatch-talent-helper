import { writeFile } from "fs/promises";

import { MagicalObject, MagicalObjectType } from "../../types";
import { descriptionKeyMaps } from "../../utils/descriptionKeyMaps";

import { ParsedPasstechItem, PasstechItem } from "./types";


const passtechItems = await parsePasstechItems();

const legendaryObjects = passtechItems.legendary.map(passtechItemToMagicalObject);
const cursedObjects = passtechItems.cursed.map(passtechItemToMagicalObject);

await writeItemsToFile("legendary", legendaryObjects);
await writeItemsToFile("cursed", cursedObjects);


function writeItemsToFile(type: MagicalObjectType, mergedItems: MagicalObject[]) {
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


function passtechItemToMagicalObject(passtech: ParsedPasstechItem): MagicalObject {
    return {
        code: passtech.code,
        name: passtech.name,
        description: passtech.description,
    };
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

function parseType(qualityName: PasstechItem["quality_name"]) {
    const map: Partial<Record<PasstechItem["quality_name"], MagicalObjectType>> = {
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
