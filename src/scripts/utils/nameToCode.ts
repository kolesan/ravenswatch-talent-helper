export function nameToCode(name: string) {
    return name.replaceAll(" ", "_").replaceAll("/", "or").toLowerCase();
}
