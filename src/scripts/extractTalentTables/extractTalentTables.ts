import { readFileSync } from "fs";
import { writeFile } from "fs/promises";
import { JSDOM } from "jsdom";

import { heroes } from "../../data/heroes";
import { heroPageFileName } from "../utils/heroPageFileName";
import { heroTalentsTableFileName } from "../utils/heroTalentsTableFileName";

heroes.asArray.forEach(hero => {
    const fileName = heroPageFileName(hero);
    const fileText = readFileSync(fileName, 'utf-8');
    const fileDom = new JSDOM(fileText);

    const tableElem = fileDom.window.document
        .querySelector(".fandom-table");

    if (tableElem) {
        writeFile(heroTalentsTableFileName(hero), tableElem.outerHTML)
            .then(() => console.log(
                `Success writing '${hero.name}' talents table page to file`
            ))
            .catch(err => console.log(
                `Error writing '${hero.name}' talents table page to file: `, 
                err
            ));
    } else {
        console.log(`Error: Talents table for '${hero.name}' not found`);
    }
});
