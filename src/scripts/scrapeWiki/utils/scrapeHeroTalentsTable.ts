import { writeFile } from "fs/promises";

import { fetchPage } from "./fetchPage";

import { Hero } from "../../data/heroes.js";
import { heroTalentTableFileName } from "../../utils/heroTalentTableFileName.js";

export function scrapeHeroTalentsTable(hero: Hero) {
    console.log(`Scraping '${hero.name}' from '${hero.wikiUrl}'`);
    return fetchPage(hero.wikiUrl)
        .then(pageText => {
            return writeFile(heroTalentTableFileName(hero), pageText);
        })
        .then(() => console.log(`Success writing '${hero.name}' talents table to file`))
        .catch(err => console.log("error", err));
}
