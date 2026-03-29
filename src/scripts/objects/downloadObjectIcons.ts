import { cursed } from "../../data/objects/cursed";
import { legendary } from "../../data/objects/legendary";
import { MagicalObject, MagicalObjectType } from "../../data/objects/types";
import { downloadIcons } from "../utils/downloadIcons";

import { baseObjectsNewDir } from "./consts";

const baseDir = baseObjectsNewDir;

// e.g. Merlin patch where Sun crown and Devil's pocket was added
const legendaryObjects = legendary
    .filter(it => it.code.includes("crown"));
const cursedObjects = cursed
    .filter(it => it.code.includes("devil"));


downloadObjects("legendary", legendaryObjects);
downloadObjects("cursed", cursedObjects);


async function downloadObjects(type: MagicalObjectType, objects: MagicalObject[]) {
    console.log();
    console.log(`Downloading '${type}' object icons`);
    downloadIcons(`${baseDir}/${type}`, objects);
}

console.log();
