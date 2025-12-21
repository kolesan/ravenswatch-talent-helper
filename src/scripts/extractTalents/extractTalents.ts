import { heroes } from "../../data/heroes";

import { extractHeroTalentsToFile } from "./utils/extractHeroTalentsToFile";

heroes.asArray.slice(0, 3).forEach(extractHeroTalentsToFile);

// extractHeroTalentsToFile(heroes.all.scarlet);
