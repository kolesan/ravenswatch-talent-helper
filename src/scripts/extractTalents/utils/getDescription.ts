export function getDescription(cell: HTMLTableCellElement) {
    const text = cell.textContent.replaceAll("\n", ". ").trim();
    return text;
}
