import { writeFile } from "fs/promises";

import { Hero } from "../../../data/heroes";
import { heroTalentTableFileName } from "../../utils/heroTalentTableFileName";

import { fetchPage } from "./fetchPage";

export function scrapeHeroTalentsTable(hero: Hero) {
    console.log(`Scraping '${hero.name}' from '${hero.wikiUrl}'`);
    return fetchPage(hero.wikiUrl)
        .then(pageText => {
            return writeFile(heroTalentTableFileName(hero), pageText);
        })
        .then(() => console.log(`Success writing '${hero.name}' talents table to file`))
        .catch(err => console.log("error", err));
}
