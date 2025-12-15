export function getNameAndIconUrl(cell: HTMLTableCellElement) {
    const name = cell.textContent.trim();
    const iconUrl = cell.querySelector("a")?.getAttribute("href") || null;
    return {
        name,
        iconUrl
    }
}
