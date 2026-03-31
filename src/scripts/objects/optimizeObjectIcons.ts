import { optimizeImages } from "../utils/optimizeImages";

import { baseObjectIconsNewDir } from "./consts";

optimizeImages({
    baseDir: baseObjectIconsNewDir,
    newBaseDir: `${baseObjectIconsNewDir}/optimized`,
});
