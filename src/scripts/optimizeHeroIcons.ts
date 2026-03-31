import { optimizeImages } from "./utils/optimizeImages";

const baseDir = "public/icons/heroes/new";

optimizeImages({
    baseDir: baseDir,
    newBaseDir: `${baseDir}/optimized`,
});
