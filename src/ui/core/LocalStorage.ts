export const LocalStorage = {
    set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key: string) {
        const item = localStorage.getItem(key);

        if (item === null) {
            return null;
        }

        try {
            return JSON.parse(item);
        } catch (e) {
            console.error(`Could not parse local storage item: '${key}'. Error: ${e}`);
            return null;
        }
    },
    remove(key: string) {
        localStorage.removeItem(key);
    }
};
