import { writeFile } from "fs/promises";

import { TalentMerged } from "../../../../data/heroes/talents/types";
import { HeroBase } from "../../../../data/heroes/types";

export function writeTalentsToFile(hero: HeroBase, talents: TalentMerged[]) {
    const talentsJson = JSON.stringify(talents, null, "    ");

    const content = `import { TalentMerged } from "../types";

export const ${hero.code}: TalentMerged[] = ${talentsJson};
`;

    return writeFile(`./src/data/heroes/talents/merged/${hero.code}.ts`, content)
        .then(() => console.log(
            `Success writing '${hero.name}' talents to file`
        ))
        .catch(err => console.log(
            `Error writing '${hero.name}' talents to file: `, 
            err
        ));
}
