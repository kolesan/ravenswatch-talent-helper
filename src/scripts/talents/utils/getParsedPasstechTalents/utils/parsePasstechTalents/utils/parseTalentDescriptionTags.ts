export function parseTalentDescriptionTags(tag: string) {
    const parseFn = parseDescriptionTag(tag);

    return function(description: string[]) {
        return parseFn(description.join(" "));
    }
}

function parseDescriptionTag(tag: string) {
    const cleanTag = tag.replaceAll(/[\{\}]/g, "");

    return function(description: string) {
        const parsed = description
            .matchAll(new RegExp(`{${cleanTag}}.*?{/s}`, "g")).toArray()
            .map(it => it[0])
            .filter(it => !it.includes("+0%"))
            .map(it => it.replace(new RegExp(`{${cleanTag}}`), "").replace(/\{\/s\}/g, ""));

        return parsed;
    }
}
