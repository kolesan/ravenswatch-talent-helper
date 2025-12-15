export function getChangePerLevel(cell: HTMLTableCellElement) {
    const text = cell.textContent.replaceAll("\n", ". ").trim();
    return text;
}
