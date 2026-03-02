type Page = {
    label: string;
    path: string;
}
type WithPathConstruction<T = void> = {
    constructPath: (params: T) => string;
    deconstructPath: (path: string) => T;
}

type TalentsPageParams = {
    hero: string;
    view: string;
}
const talents: Page & WithPathConstruction<TalentsPageParams> = {
    label: "Talents",
    path: "/talents",
    constructPath({ hero, view }) { 
        return `${this.path}/${hero}/${view}`;
    },
    deconstructPath(path: string) {
        const [_, __, hero, view] = path.split("/");
        return { hero, view };
    },
}
const legendaryObjects: Page = {
    label: "Legendary Objects",
    path: "/objects/legendary",
}
const cursedObjects: Page = {
    label: "Cursed Objects",
    path: "/objects/cursed",
}
const help: Page = {
    label: "Help",
    path: "/help",
}

export const pages = {
    talents,
    legendaryObjects,
    cursedObjects,
    help,
};
