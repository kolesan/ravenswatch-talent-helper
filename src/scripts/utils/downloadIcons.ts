import { mkdir, writeFile } from "fs/promises";

type Downloadable = {
    code: string;
    iconUrl: string;
}

export async function downloadIcons(dir: string, objects: Downloadable[]) {
    for (let i = 0; i < objects.length; i++) {
        await downloadIcon(dir, objects[i]!);
    }
}

async function downloadIcon(dir: string, object: Downloadable) {
    console.log("Fetching icon: ", object.code);

    const resp = await fetch(object.iconUrl);
    await new Promise<void>(res => setTimeout(() => { res(); }, 500));
    const data = await resp.arrayBuffer();
    
    const fileName = `${object.code}.png`;
    const filePath = `${dir}/${fileName}`;

    await mkdir(dir, { recursive: true })
        .then(() => writeFile(filePath, Buffer.from(data)))
        .then(() => console.log(`Success: ${filePath}`))
        .catch(err => console.log(`Error: ${filePath}`, err));
}
