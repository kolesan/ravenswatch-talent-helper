import { Talent } from "../extractTalents/types";

export function heroTalentIconFileName(dirName: string, talent: Talent) {
    return `${dirName}/${talent.code}.webp`;
}
