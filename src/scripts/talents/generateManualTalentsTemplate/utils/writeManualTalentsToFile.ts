import { writeFile } from "fs/promises";

import { TalentManual } from "../../../../data/heroes/talents/types";
import { HeroBase } from "../../../../data/heroes/types";

export function writeManualTalentsToFile(hero: HeroBase, talents: TalentManual[]) {
    const talentsJson = JSON.stringify(talents, null, "    ");

    const content = `import { TalentManual } from "../types";

export const ${hero.code}: TalentManual[] = ${talentsJson};
`;

    return writeFile(`./src/data/heroes/talents/manual/${hero.code}.ts`, content)
        .then(() => console.log(
            `Success writing '${hero.name}' talents to file`
        ))
        .catch(err => console.log(
            `Error writing '${hero.name}' talents to file: `, 
            err
        ));
}
