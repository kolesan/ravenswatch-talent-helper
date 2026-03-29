import { heroesBase } from "../../heroesBase";

import { extractHeroTalentsToFile } from "./utils/extractHeroTalentsToFile";

heroesBase.asArray.forEach(extractHeroTalentsToFile);

// extractHeroTalentsToFile(heroes.all.juliet);
