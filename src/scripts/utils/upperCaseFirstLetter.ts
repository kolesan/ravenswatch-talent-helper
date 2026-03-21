export function upperCaseFirstLetter(s: string) {
    if (!s[0]) {
        return "";
    }

    const newFirstLetter = s[0].toUpperCase();
    return newFirstLetter + s.slice(1);
}