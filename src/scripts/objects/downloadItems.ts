import { mkdir, writeFile } from "fs/promises";


const url = "https://buildmaker.ravenswatch.com/api/game-items?lang=en";

const dir = "src/data/passtechResponses/items";

await downloadItems(dir);


async function downloadItems(dir: string) {
    const resp = await fetch(url);
    const data = await resp.json();

    await mkdir(dir, { recursive: true })
        .then(() => writeItemsToFile(dir, data));
}

function writeItemsToFile(dir: string, items: any[]) {
    const itemsJson = JSON.stringify(items, null, "    ");

    const content = `import { PasstechItem } from "../types";

export const items: PasstechItem[] = ${itemsJson} as const;
`;

    const fileName = `items.ts`;
    const filePath = `${dir}/${fileName}`;

    return writeFile(filePath, content)
        .then(() => console.log(
            `Success writing Passtech items to file`
        ))
        .catch(err => console.log(
            `Error writing Passtech items to file: `, 
            err
        ));
}
