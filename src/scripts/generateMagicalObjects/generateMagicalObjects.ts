import { parsePasstechItems } from "./utils/parsePasstechItems";
import { passtechItemToMagicalObject } from "./utils/passtechItemToMagicalObject";
import { writeMagicalObjectsToFile } from "./utils/writeMagicalObjectsToFile";

const passtechItems = await parsePasstechItems();

const legendaryObjects = passtechItems.legendary.map(passtechItemToMagicalObject);
const cursedObjects = passtechItems.cursed.map(passtechItemToMagicalObject);

const dir = "./src/data/objects";
await writeMagicalObjectsToFile(dir, "legendary", legendaryObjects);
await writeMagicalObjectsToFile(dir, "cursed", cursedObjects);
