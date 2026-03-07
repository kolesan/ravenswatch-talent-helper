import { html } from "htm/preact";
import { useEffect, useMemo } from "preact/hooks";

import { pages } from "../../../../pages";
import { Hero, heroes } from "../../../finalData/finalData";
import { cursed } from "../../../scrapedData/mergedItems/cursed";
import { legendary } from "../../../scrapedData/mergedItems/legendary";
import { imagePathUtils } from "../../../utils/imagePathUtils";
import { talentsPageUrlParamsStorage } from "../../pages/TalentsPage/utils/talentsPageUrlParamsStorage/talentsPageUrlParamsStorage";
import { useBooleanState } from "../../hooks/useBooleanState";
import { idleCallbackPromise } from "./utils/idleCallbackPromise";

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

const allImagesNoParticularOrder: string[] = [
    ...legendaryObjectPageImages,
    ...cursedObjectPageImages,
    ...heroes.asArray.flatMap(getTalentImageUrls),
    imagePathUtils.feather,
    imagePathUtils.talents.locked,
    imagePathUtils.talents.frames.common,
    imagePathUtils.talents.frames.ultimate,
]

export function ImagePreloader() {
    const images = useMemo(() => {
        return calculateImageUrls(location.pathname);
    }, []);

    console.log(images);

    // ==== let the browser load what is on screen and     ====
    // ==== then trigger all images with low fetchPriority ====
    // TODO


    // ==== just trigger all images with low fetchPriority ====
    // ==== hoping browser will fetch what he needs asap ====
    // seems to work well enough if rendered after the page component
    // can feel a bit of lag while downloads are triggered though
    return html`
        <div 
            style=${`
                visibility: hidden; 
                height: 0; 
                width: 0; 
                pointer-events: none; 
                overflow: hidden;
            `}
        >
            ${allImagesNoParticularOrder.map(it => html`
                <img src=${it} height=0 width=0 decoding="async" fetchpriority="low" />
            `)}
        </div>
    `;

    // ==== fetchPriority high for high images, low for everything else ====
    return html`
        <div 
            style=${`
                visibility: hidden; 
                height: 0; 
                width: 0; 
                pointer-events: none; 
                overflow: hidden;
            `}
        >
            ${images.highPriorityImages.map(it => html`
                <img src=${it} height=0 width=0 decoding="async" fetchpriority="high" />
            `)}
            ${images.lowPriorityImages.map(it => html`
                <img src=${it} height=0 width=0 decoding="async" fetchpriority="low" />
            `)}
        </div>
    `;

    // ==== promises, idleCallback, etc. ====
    const canRenderCache = useBooleanState(false);
    useEffect(() => {
        const startTime = Date.now();
        const highPriorityImageDecodingPromises = images.highPriorityImages
            .map((src, i) => {
                return idleCallbackPromise()
                    .then(() => {
                        const img = new Image();
                        img.src = src;
                        return new Promise<void>(res => setTimeout(() => {
                            img.decode().then(res);
                        }, 1600));
                    });
                // return new Promise<void>(res => setTimeout(() => {
                //     const img = new Image();
                //     img.src = src;
                //     requestIdleCallback(() => {
                //         img.decode().then(res);
                //     });
                // }, 1*i));
            });
        Promise.all(highPriorityImageDecodingPromises).then(() => {
            console.log(Date.now() - startTime, "ms. High Priority");
            const lowPriorityImageDecodingPromises = images.lowPriorityImages
                .map((src, i) => {
                    return idleCallbackPromise()
                        .then(() => {
                            const img = new Image();
                            img.decoding = "async";
                            img.src = src;
                            return img.decode();
                        });

                    // const img = new Image();
                    // img.decoding = "async";
                    // img.src = src;
                    // return img.decode();

                    // return new Promise<void>(res => setTimeout(() => {
                    //     const img = new Image();
                    //     img.src = src;
                    //     requestIdleCallback(() => {
                    //         img.decode().then(res);
                    //     });
                    // }, 1*i));

                });
            Promise.all(lowPriorityImageDecodingPromises).then(() => {
                console.log(Date.now() - startTime, "ms. Low Priority");
                canRenderCache.on();
            });
        })
    }, []);
    return html`
        <div 
            style=${`
                visibility: hidden; 
                height: 0; 
                width: 0; 
                pointer-events: none; 
                overflow: hidden;
            `}
        >
            ${canRenderCache.is && images.allImages.map(it => html`
                <img src=${it} height=0 width=0 decoding="async" />
            `)}
        </div>
    `;
}

function calculateImageUrls(currentPath: string) {
    const {
        hightPriorityTalentsPageImages,
        lowPriorityTalentsPageImages,
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
        lowPriorityImages.push(...lowPriorityTalentsPageImages);
    } else if (currentPath.includes(pages.legendaryObjects.path)) {
        lowPriorityImages.push(...cursedObjectPageImages);
        lowPriorityImages.push(...lowPriorityTalentsPageImages);
    } else if (currentPath.includes(pages.talents.path)) {
        lowPriorityImages.push(...lowPriorityTalentsPageImages);
        lowPriorityImages.push(...cursedObjectPageImages);
        lowPriorityImages.push(...legendaryObjectPageImages);
    }

    return {
        highPriorityImages,
        lowPriorityImages,
        allImages: [
            ...highPriorityImages,
            ...lowPriorityImages,
        ]
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
