import { TalentType } from "../types";

export function getType(cell: HTMLTableCellElement | undefined): TalentType {
    const text = cell?.textContent.trim();
    return text && map[text] || "unknown_talent_type";
}

const map: Record<string, TalentType> = {
    "Starting": "starting",
    "Standard": "standard",
    "Ultimate": "ultimate",
    "Final": "final",
}
