import { cursed } from "../../scrapedData/items/cursed";
import { upperCaseFirstLetter } from "../utils/upperCaseFirstLetter";

const names = cursed.map(it => 
    it.code.split("_").map(upperCaseFirstLetter).join(" "),
);

console.log(names);
