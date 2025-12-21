import { heroes } from "../../data/heroes";

import { extractHeroTalentsToFile } from "./utils/extractHeroTalentsToFile";

heroes.asArray.forEach(extractHeroTalentsToFile);

// extractHeroTalentsToFile(heroes.all.scarlet);
