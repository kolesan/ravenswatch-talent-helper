export const hst = {
    push(path: string) {
        history.pushState(null, "", path);
    },
    replace(path: string) {
        history.replaceState(null, "", path);
    },
};
