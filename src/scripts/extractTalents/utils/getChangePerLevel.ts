export function getChangePerLevel(cell: HTMLTableCellElement) {
    const text = cell.textContent.trim().split("\n");
    return text;
}
