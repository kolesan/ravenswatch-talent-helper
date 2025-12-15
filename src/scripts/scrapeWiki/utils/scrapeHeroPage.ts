import { writeFile } from "fs/promises";

import { Hero } from "../../../data/heroes";
import { heroPageFileName } from "../../utils/heroPageFileName";

import { fetchPage } from "./fetchPage";

export function scrapeHeroPage(hero: Hero) {
    console.log(`Scraping '${hero.name}' from '${hero.wikiUrl}'`);
    return fetchPage(hero.wikiUrl)
        .then(pageText => {
            return writeFile(heroPageFileName(hero), pageText);
        })
        .then(() => console.log(`Success writing '${hero.name}' wiki page to file`))
        .catch(err => console.log("error", err));
}
