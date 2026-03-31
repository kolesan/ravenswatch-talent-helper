import { baseTalentIconsNewDir } from "./consts";
import { optimizeImages } from "./utils/optimizeImages";

optimizeImages({
    baseDir: baseTalentIconsNewDir,
    newBaseDir: `${baseTalentIconsNewDir}/optimized`
});
