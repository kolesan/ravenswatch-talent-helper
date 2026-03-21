export function getCode(name: string | undefined) {
    return name?.replaceAll(" ", "_").toLowerCase();
}
