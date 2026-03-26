export function getDescription(cell: HTMLTableCellElement | undefined) {
    const text = cell?.textContent.trim().split("\n");
    return text;
}
