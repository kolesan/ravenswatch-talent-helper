import { optimizeImages } from "../utils/optimizeImages";

import { baseTalentIconsNewDir } from "./consts";

optimizeImages({
    baseDir: baseTalentIconsNewDir,
    newBaseDir: `${baseTalentIconsNewDir}/optimized`,
});
