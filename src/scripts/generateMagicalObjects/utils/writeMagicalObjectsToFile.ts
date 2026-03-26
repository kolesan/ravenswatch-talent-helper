import { writeFile } from "fs/promises";

import { MagicalObject, MagicalObjectType } from "../../../data/objects/types";

export function writeMagicalObjectsToFile(
    dir: string,
    type: MagicalObjectType, 
    objects: MagicalObject[]
) {
    const itemsJson = JSON.stringify(objects, null, "    ");

    const content = `import { MagicalObject } from "./types";
    
export const ${type}: MagicalObject[] = ${itemsJson};`;

    return writeFile(`${dir}/${type}.ts`, content)
        .then(() => console.log(
            `Success writing '${type}' items to file`
        ))
        .catch(err => console.log(
            `Error writing '${type}' items to file: `, 
            err
        ));
}
