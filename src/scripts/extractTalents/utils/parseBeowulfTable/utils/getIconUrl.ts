export function getIconUrl(cell: HTMLTableCellElement) {
    return cell.querySelector("a")?.getAttribute("href") || null;
}
