import { mkdir, writeFile } from "node:fs/promises";

import { HeroCode, heroes } from "../../data/heroes";
import { Talent } from "../extractTalents/types";

// for (let i = 0; i < heroes.asArray.length; i++) {
for (let i = 3; i < heroes.asArray.length; i++) {
    const hero = heroes.asArray[i];

    const mergedTalents = await getMergedTalents(hero.code);

    console.log();
    console.log("Downloading icons for: ", hero.code);

    await downloadIcons(hero.code, mergedTalents);
}

async function getMergedTalents(
    heroCode: HeroCode
): Promise<Talent[]> {
    const mergedTalentsFile = await import(`../../scrapedData/mergedTalents/${heroCode}`);
    // console.log(mergedTalentsFile[heroCode]);
    return mergedTalentsFile[heroCode];
}

async function downloadIcons(heroCode: HeroCode, talents: Talent[]) {
    for (let i = 0; i < talents.length; i++) {
        const talent = talents[i];

        console.log("Fetching icon: ", talent.code);

        const resp = await fetch(talent.iconUrl);
        await new Promise<void>(res => setTimeout(() => { res(); }, 300));
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
