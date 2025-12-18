export function getCode(name: string) {
    return name.replaceAll(" ", "_").toLowerCase();
}
