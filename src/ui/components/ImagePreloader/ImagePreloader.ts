import { html } from "htm/preact";
import { useEffect, useMemo } from "preact/hooks";

import { pages } from "../../../../pages";
import { Hero, heroes } from "../../../finalData/finalData";
import { cursed } from "../../../scrapedData/mergedItems/cursed";
import { legendary } from "../../../scrapedData/mergedItems/legendary";
import { imagePathUtils } from "../../../utils/imagePathUtils";
import { talentsPageUrlParamsStorage } from "../../pages/TalentsPage/utils/talentsPageUrlParamsStorage/talentsPageUrlParamsStorage";

const legendaryObjects = legendary
    .map(it => imagePathUtils.objects.byCode("legendary", it.code));
const cursedObjects = cursed
    .map(it => imagePathUtils.objects.byCode("cursed", it.code));

const legendaryObjectPageImages = [
    imagePathUtils.objects.frame("legendary"),
    ...legendaryObjects,
];
const cursedObjectPageImages = [
    imagePathUtils.objects.frame("cursed"),
    ...cursedObjects,
];

export function ImagePreloader() {
    const images = useMemo(() => {
        return calculateImageUrls(location.pathname);
    }, []);
    console.log(images);
    useEffect(() => {
        images.lowPriorityImages.map(src => {
            const img = new Image();
            img.decoding = "async";
            img.src = src;
            // img.decode();
        });
    }, []);
    // return null;
    return html`
        <div style="visibility: hidden; height: 0; width: 0; pointer-events: none;">
            ${images.highPriorityImages.map(it => html`
                <img src=${it} height=0 width=0 decoding="async" />
            `)}
        </div>
    `;
    // return html`
    //     <div style="visibility: hidden; height: 0; width: 0; pointer-events: none;">
    //         ${images.map(it => html`
    //             <img src=${it} height=0 width=0 decoding="async" />
    //         `)}
    //     </div>
    // `;
}

function calculateImageUrls(currentPath: string) {
    const {
        hightPriorityTalentsPageImages,
        lowPriorityTalentsPageImages
    } = calculateTalentsPageImages(currentPath);

    let highPriorityImages: string[] = [];

    if (currentPath.includes(pages.cursedObjects.path)) {
        highPriorityImages.push(...cursedObjectPageImages);
    } else if (currentPath.includes(pages.legendaryObjects.path)) {
        highPriorityImages.push(...legendaryObjectPageImages);
    } else if (currentPath.includes(pages.talents.path)) {
        highPriorityImages.push(...hightPriorityTalentsPageImages);
    }

    highPriorityImages.push(imagePathUtils.feather);

    let lowPriorityImages: string[] = [];
    if (currentPath.includes(pages.cursedObjects.path)) {
        lowPriorityImages.push(...legendaryObjectPageImages);
    } else if (currentPath.includes(pages.legendaryObjects.path)) {
        lowPriorityImages.push(...cursedObjectPageImages);
    }

    lowPriorityImages.push(...lowPriorityTalentsPageImages);

    return {
        highPriorityImages,
        lowPriorityImages,
    };
}

function calculateTalentsPageImages(currentPath: string) {
    const currentHero = getCurrentHero(currentPath);
    const otherHeroes = heroes.asArray
        .filter(it => it.code !== currentHero.code);

    const currentHeroTalentImages = getTalentImageUrls(currentHero);
    const otherHeroesTalentImages = otherHeroes.flatMap(getTalentImageUrls);

    return {
        hightPriorityTalentsPageImages: [
            imagePathUtils.talents.frames.common,
            imagePathUtils.talents.frames.ultimate,
            ...currentHeroTalentImages,
            imagePathUtils.talents.locked,
        ],
        lowPriorityTalentsPageImages: otherHeroesTalentImages,
    };
}

function getTalentImageUrls(hero: Hero) {
    return hero.talents
        .map(talent => imagePathUtils.talents.byCode(hero.code, talent.code));
}

function getCurrentHero(currentPath: string) {
    const { hero: heroCodeFromUrl } = pages.talents.deconstructPath(currentPath);

    const heroFromUrl = heroes.utils.findByCode(heroCodeFromUrl);
    
    if (heroFromUrl) {
        return heroFromUrl;
    }

    const storedParams = talentsPageUrlParamsStorage.get();
    return storedParams.hero;
}
