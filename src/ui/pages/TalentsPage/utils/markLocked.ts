import { Talent } from "../../../../scripts/extractTalents/types";

export function markLocked(talent: Talent) {
    return { ...talent, locked: true };
}
