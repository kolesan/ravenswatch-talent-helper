import { optimizeImages } from "./utils/optimizeImages";

const baseDir = "public/art/new";

optimizeImages({
    baseDir: baseDir,
    newBaseDir: `${baseDir}/optimized`,
});
