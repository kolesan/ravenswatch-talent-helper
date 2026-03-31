export function getChangePerLevel(cell: HTMLTableCellElement | undefined) {
    const text = cell?.textContent.trim().split("\n");
    return text;
}
