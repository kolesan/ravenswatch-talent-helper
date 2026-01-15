type Page = {
    path: string;
    label: string;
}

const talents: Page = {
    path: "/talents",
    label: "Talents",
}
const legendaryObjects: Page = {
    path: "/objects/legendary",
    label: "Legendary Objects",
}
const cursedObjects: Page = {
    path: "/objects/cursed",
    label: "Cursed Objects",
}

const all = {
    talents,
    legendaryObjects,
    cursedObjects,
}

export const pages = {
    all,
    utils: {
        asArray: () => Object.values(pages.all),
    }
};
