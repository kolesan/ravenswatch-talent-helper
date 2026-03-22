import { heroesBase } from "../../data/heroes/heroesBase";

import { extractHeroTalentsToFile } from "./utils/extractHeroTalentsToFile";

heroesBase.asArray.forEach(extractHeroTalentsToFile);

// extractHeroTalentsToFile(heroes.all.juliet);
