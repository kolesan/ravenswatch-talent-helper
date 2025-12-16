import { readFileSync } from "fs";
import { writeFile } from "fs/promises";
import { JSDOM } from "jsdom";

import { heroes } from "../../data/heroes";
import { heroTalentsFileName } from "../utils/heroTalentsFileName";
import { heroTalentTableFileName } from "../utils/heroTalentTableFileName";

import { Talent } from "./types";
import { getChangePerLevel } from "./utils/getChangePerLevel";
import { getDescription } from "./utils/getDescription";
import { getNameAndIconUrl } from "./utils/getNameAndIconUrl";
import { getType } from "./utils/getType";
import { getUnlockedAtRank } from "./utils/getUnlockedAtRank";

heroes.asArray.slice(0, 2).forEach(hero => {
    const fileName = heroTalentTableFileName(hero);
    const fileText = readFileSync(fileName, 'utf-8');
    const fileDom = new JSDOM(fileText);

    const tableElem = fileDom.window.document
        .querySelector(".fandom-table");

    if (!tableElem) {
        console.log(`Error, no talents table could be read for '${hero.name}'`);
        return;
    }

    const rows = [...tableElem.querySelectorAll("tr")].slice(1);

    const rowsToParse = rows;

    const talents = rowsToParse.map(it => {
        const cells = [...it.querySelectorAll("td")];
        
        const { name, iconUrl } = getNameAndIconUrl(cells[0]);
        const type = getType(cells[1]);
        const unlockedAtRank = getUnlockedAtRank(cells[2]);
        const description = getDescription(cells[3]);
        const changePerLevel = getChangePerLevel(cells[4]);

        const talent: Talent = {
            name,
            iconUrl,
            type,
            unlockedAtRank,
            description,
            changePerLevel,
        }

        return talent;
    });

    console.log(rowsToParse.map(it => it.innerHTML));
    console.log(talents);

    writeFile(heroTalentsFileName(hero), JSON.stringify(talents, null, "    "))
        .then(() => console.log(
            `Success writing '${hero.name}' talents to file`
        ))
        .catch(err => console.log(
            `Error writing '${hero.name}' talents to file: `, 
            err
        ));
});
