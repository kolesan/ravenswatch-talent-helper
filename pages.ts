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
const help: Page = {
    path: "/help",
    label: "Help",
}

export const pages = {
    talents,
    legendaryObjects,
    cursedObjects,
    help,
};
