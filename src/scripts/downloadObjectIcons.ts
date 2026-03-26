import { mkdir, writeFile } from "node:fs/promises";

import { cursed } from "../data/objects/cursed";
import { legendary } from "../data/objects/legendary";
import { MagicalObject } from "../data/objects/types";

const objects = [...legendary, ...cursed];

console.log();
console.log("Downloading object icons");

for (let i = 0; i < objects.length; i++) {
    await downloadIcon(objects[i]!);
}

async function downloadIcon(object: MagicalObject) {
    console.log("Fetching icon: ", object.code);

    const resp = await fetch(object.iconUrl);
    await new Promise<void>(res => setTimeout(() => { res(); }, 500));
    const data = await resp.arrayBuffer();
    
    const dirName = `public/icons/objects/new`;
    const fileName = `${object.code}.png`;
    const filePath = `${dirName}/${fileName}`;

    await mkdir(dirName, { recursive: true })
        .then(() => writeFile(filePath, Buffer.from(data)))
        .then(() => console.log(`Success: ${filePath}`))
        .catch(err => console.log(`Error: ${filePath}`, err));
}
