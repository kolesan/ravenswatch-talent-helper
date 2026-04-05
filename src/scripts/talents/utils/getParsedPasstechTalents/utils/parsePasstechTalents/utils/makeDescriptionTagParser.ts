export function makeDescriptionTagParser(tag: string) {
    const cleanTag = tag.replaceAll(/[\{\}]/g, "");

    return function(description: string[]) {
        const parsed = description
            .join(" ")
            .matchAll(new RegExp(`{${cleanTag}}.*?{/s}`, "g")).toArray()
            .map(it => it[0])
            .filter(it => !it.includes("+0%"))
            .map(it => it.replace(new RegExp(`{${cleanTag}}`), "").replace(/\{\/s\}/g, ""));

        return parsed;
    }
}
