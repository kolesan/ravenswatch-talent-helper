export function getNameAndIconUrl(cell: HTMLTableCellElement) {
    const rawName = cell.textContent.trim();
    const isUnavailableDuringSoloPlay = rawName.endsWith("*") ;
    const name = rawName.replaceAll("*", "");
    const iconUrl = cell.querySelector("a")?.getAttribute("href") || null;
    return {
        name,
        iconUrl,
        isUnavailableDuringSoloPlay
    }
}
