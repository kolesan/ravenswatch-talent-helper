export function getUnlockedAtRank(cell: HTMLTableCellElement | undefined) {
    const text = cell?.textContent.trim();

    if (!text) {
        return undefined;
    }

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
