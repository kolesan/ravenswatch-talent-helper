import { mkdir, writeFile } from "fs/promises";
import { pathToFileURL } from "url";

import { heroesBase } from "../../data/heroes/heroesBase";
import { HeroBaseCode } from "../../data/heroes/types";
import { Talent } from "../extractTalents/types";


for (let i = 0; i < heroesBase.asArray.length; i++) {
    const hero = heroesBase.asArray[i]!;

    const mergedTalents = await getMergedTalents(hero.code);

    console.log();
    console.log("Downloading icons for: ", hero.code);

    await downloadIcons(hero.code, mergedTalents);
}


const talentsPath = (heroCode: HeroBaseCode) =>
    `${process.cwd()}/src/data/heroes/talents/merged/${heroCode}`;

async function getMergedTalents(
    heroCode: HeroBaseCode
): Promise<Talent[]> {
    const moduleUrl = pathToFileURL(talentsPath(heroCode)).href;
    const mergedTalentsFile = await import(moduleUrl);
    return mergedTalentsFile[heroCode];
}

async function downloadIcons(heroCode: HeroBaseCode, talents: Talent[]) {
    for (let i = 0; i < talents.length; i++) {
        const talent = talents[i]!;

        if (!talent.iconUrl) {
            console.log("No icon url for: ", talent.code);
            return;
        }

        console.log("Fetching icon: ", talent.code);

        const resp = await fetch(talent.iconUrl);
        await new Promise<void>(res => setTimeout(() => { res(); }, 500));
        const data = await resp.arrayBuffer();
        
        const dirName = `public/icons/talents/new/${heroCode}`;
        const fileName = `${talent.code}.png`;
        const filePath = `${dirName}/${fileName}`;

        await mkdir(dirName, { recursive: true })
            .then(() => writeFile(filePath, Buffer.from(data)))
            .then(() => console.log(`Success: ${filePath}`))
            .catch(err => console.log(`Error: ${filePath}`));
    }
}
