export function upperCaseFirstLetter(s: string) {
    const newFirstLetter = s[0].toUpperCase();
    return newFirstLetter + s.slice(1);
}