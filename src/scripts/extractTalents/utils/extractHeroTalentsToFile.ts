import { readFileSync } from "fs";
import { writeFile } from "fs/promises";
import { JSDOM } from "jsdom";

import { Hero } from "../../../data/heroes";
import { heroTalentsFileName } from "../../utils/heroTalentsFileName";
import { heroTalentTableFileName } from "../../utils/heroTalentTableFileName";

import { applyIngameOrder } from "./applyIngameOrder/applyIngameOrder";
import { chooseParseer } from "./chooseParseer";
import { fixApostrophes } from "./fixApostrophes";

export function extractHeroTalentsToFile(hero: Hero) {
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

    const talents = rowsToParse
        .map(chooseParseer(hero))
        .map(fixApostrophes)
        .reduce(applyIngameOrder(hero), []);

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
}
