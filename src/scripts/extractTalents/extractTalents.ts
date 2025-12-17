import { readFileSync } from "fs";
import { writeFile } from "fs/promises";
import { JSDOM } from "jsdom";

import { heroes } from "../../data/heroes";
import { heroTalentsFileName } from "../utils/heroTalentsFileName";
import { heroTalentTableFileName } from "../utils/heroTalentTableFileName";

import { fixApostrophes } from "./utils/fixApostrophes";
import { parseBeowulfTable } from "./utils/parseBeowulfTable/parseBeowulfTable";
import { parseCommonTable } from "./utils/parseCommonTable";

heroes.asArray.slice(0, 3).forEach(hero => {
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
        if (hero.name === "Beowulf") {
            return parseBeowulfTable(it);
        }
        return parseCommonTable(it);
    }).map(fixApostrophes);

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
