export function getUnlockedAtRank(cell: HTMLTableCellElement) {
    const text = cell.textContent.trim();

    if (text === "Unlocked by default") {
        return 1;
    }

    return +text;
}
