export function getUnlockedAtRank(cell: HTMLTableCellElement) {
    const text = cell.textContent.trim();

    if (
        text.includes("default")
        || text.includes("ULTIMATE")
    ) {
        return 1;
    }

    return +text
        .replace("Unlocked at Rank ", "")
        .replace("Unlocked by ", "");
}
