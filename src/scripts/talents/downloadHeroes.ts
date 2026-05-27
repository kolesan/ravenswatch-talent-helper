import { mkdir, writeFile } from "fs/promises";


const url = "https://buildmaker.ravenswatch.com/api/game-heroes?lang=en";

const dir = "src/data/passtechResponses/heroes";

await downloadHeroes(dir);


async function downloadHeroes(dir: string) {
    const resp = await fetch(url);
    const data = await resp.json();

    await mkdir(dir, { recursive: true })
        .then(() => writeHeroesToFile(dir, data));
}

function writeHeroesToFile(dir: string, heroes: any[]) {
    const heroesJson = JSON.stringify(heroes, null, "    ");

    const content = `import { PasstechHero } from "../types";

export const passtechHeroes: PasstechHero[] = ${heroesJson};
`;

    const fileName = `passtechHeroes.ts`;
    const filePath = `${dir}/${fileName}`;

    return writeFile(filePath, content)
        .then(() => console.log(
            `Success writing Passtech heroes to file`
        ))
        .catch(err => console.log(
            `Error writing Passtech heroes to file: `, 
            err
        ));
}
