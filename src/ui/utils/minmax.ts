export function minmax(min: number, max: number) {
    return function(n: number) {
        return Math.min(Math.max(n, min), max);
    }
}
