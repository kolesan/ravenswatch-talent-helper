import { mkdir, writeFile } from "fs/promises";

import { heroesBase } from "data/heroes/heroesBase";
import { HeroBase } from "data/heroes/types";


const dir = "src/data/passtechResponses/heroes/talents";

downloadTalents(dir, heroesBase.asArray);


async function downloadTalents(dir: string, heroes: HeroBase[]) {
    for (let i = 0; i < heroes.length; i++) {
        await downloadHeroTalents(dir, heroes[i]!);
    }
}

async function downloadHeroTalents(dir: string, hero: HeroBase) {
    console.log("Fetching hero talents: ", hero.code);

    const resp = await fetch(getHeroUrl(hero.passtechCode));
    await new Promise<void>(res => setTimeout(() => { res(); }, 500));
    const data = await resp.json();

    await mkdir(dir, { recursive: true })
        .then(() => writeTalentsToFile(dir, hero, data.skills));
}

function getHeroUrl(code: string) {
    return `https://buildmaker.ravenswatch.com/api/game-heroes/${code}?lang=en`;
}

function writeTalentsToFile(dir: string, hero: HeroBase, talents: any[]) {
    const talentsJson = JSON.stringify(talents, null, "    ");

    const content = `import { PasstechTalent } from "../../types";

export const ${hero.code}: PasstechTalent[] = ${talentsJson};
`;

    const fileName = `${hero.code}.ts`;
    const filePath = `${dir}/${fileName}`;

    return writeFile(filePath, content)
        .then(() => console.log(
            `Success writing '${hero.name}' talents to file`
        ))
        .catch(err => console.log(
            `Error writing '${hero.name}' talents to file: `, 
            err
        ));
}
