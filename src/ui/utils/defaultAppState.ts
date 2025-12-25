import { heroes } from "../../finalData/finalData";
import { AppState } from "../types";

export const defaultAppState: AppState = {
    hero: heroes.all.scarlet,
    rank: 9,
    talents: {
        used: [],
        preferred: [],
    }
}
