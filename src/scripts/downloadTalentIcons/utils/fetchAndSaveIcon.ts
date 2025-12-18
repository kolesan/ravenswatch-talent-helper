import { mkdir, writeFile } from "fs/promises";

import { Hero } from "../../../data/heroes";
import { Talent } from "../../extractTalents/types";
import { heroTalentIconDirName } from "../../utils/heroTalentIconDirName";
import { heroTalentIconFileName } from "../../utils/heroTalentIconFileName";

export function fetchAndSaveIcon(hero: Hero, talent: Talent) {
    console.log(`Fetching '${hero.name}'s '${talent.name}' talent icon`);

    if (!talent.iconUrl) {
        console.log(`No icon url for '${hero.name}'s '${talent.name}' talent`);
        return Promise.resolve();
    }

    return fetch(talent.iconUrl)
        .then(res => res.arrayBuffer())
        .then(arrayBuffer => {
            const dirName = heroTalentIconDirName(hero);
            const fileName = heroTalentIconFileName(dirName, talent);

            console.log(`Writing ${hero.name}'s '${talent.name}' talent icon file`);

            return mkdir(dirName, { recursive: true })
                .then(() => writeFile(fileName, Buffer.from(arrayBuffer)))
                .then(() => console.log(`Success writing '${hero.name}'s '${talent.name}' talent icon file`))
                .catch(err => console.log(`Error fetching and then writing '${hero.name}'s '${talent.name}' talent icon file`, err));
        });
}
