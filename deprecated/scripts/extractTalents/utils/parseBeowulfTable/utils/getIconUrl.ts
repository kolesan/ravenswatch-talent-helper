export function getIconUrl(cell: HTMLTableCellElement | undefined) {
    return cell?.querySelector("a")?.getAttribute("href") || null;
}
