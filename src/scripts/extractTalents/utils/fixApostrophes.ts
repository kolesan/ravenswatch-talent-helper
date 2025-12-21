import { Talent } from "../types";

export function fixApostrophes(talent: Talent): Talent {
    return {
        ...talent,
        code: talent.code.replaceAll("’", "'"),
        name: talent.name.replaceAll("’", "'"),
        description: talent.description.map(it => it.replaceAll("’", "'")),
    }
}
