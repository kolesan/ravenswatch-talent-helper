const keyWord = "{sk}";
const improvement = "{si}";
const degradation = "{sd}";
const other = "{so}";
const endTag = "{/s}";

const breakPlaceholder = "#$%^";

const myTags = {
    keyWord,
    improvement,
    degradation,
    other,
    endTag,
};

const passtechToMyTag = {
    "<span class=\"key_words\">": keyWord,
    "<span class=\"improvement\">": improvement,
    "<span class=\"degradation\">": degradation,
    "<span class=\"other\">": other,
    "</span>": endTag,
};

const myTagToHtml = {
    [keyWord]: `${breakPlaceholder}${keyWord}`,
    [improvement]: `${breakPlaceholder}${improvement}`,
    [degradation]: `${breakPlaceholder}${degradation}`,
    [other]: `${breakPlaceholder}${other}`,
    [endTag]: `${endTag}${breakPlaceholder}`,
};

export const descriptionKeyMaps = {
    myTags: {
        tags: myTags,
        findContained(s: string): string | undefined {
            const { endTag, ...myTagsRest } = myTags;
            const tagValues = Object.values(myTagsRest);
            for(let i = 0; i < tagValues.length; i++) {
                const tagValue = tagValues[i];
                if (s.includes(tagValue)) {
                    return tagValue;
                }
            }
            return undefined;
        }
    },
    passtechToMyTag: {
        apply: apply(passtechToMyTag),
    },
    myTagWithBreakPlaceholder: {
        breakPlaceholder,
        apply: apply(myTagToHtml),
    }
};

function apply(map: Record<string, string>) {
    const mapEntries = Object.entries(map);
    return function(s: string) {
        let result = s;
        mapEntries.forEach(([k, v]) => {
            result = result.replaceAll(k, v);
        });
        return result;
    }
}
