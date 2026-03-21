export function getName(cell: HTMLTableCellElement | undefined) {
    return cell?.textContent.trim();
}
