import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";

const imageModules = import.meta.glob([
    '/public/art/*',
    '/public/icons/heroes/optimized/**/*',
    '/public/icons/talents/new/optimized/**/*',
    '/public/icons/talents/locked_talent*',
    '/public/icons/feather*',
    '/public/icons/objects/new/optimized/**/*',
    '!**/*Wiki/*',
]);

const urls = Object.keys(imageModules).map(it => it.replace("/public", ""));
const urlBatchSize = 20;

/**
 * This component renders a list of img elements with all images from the public folder.
 * 
 * This is done in order for the browser to prefetch all images used in the app
 * and also to keep the images decoded and in memory 
 * when the user switches between pages or heroes, so that there is no more 
 * image flicker after the first load.
 * 
 * The images start to render after a delay to give the browser time to trigger
 * fetching of the images that the user should have on screen when he opens the app.
 * 
 * The images are rendered in batches with a delay inbetween batches to
 * avoid blocking the loop too much with image fetching and decoding.
 */
export function ImagePreloader() {
    const [urlsToRender, setUrlsToRender] = useState<string[]>([]);

    useEffect(() => {
        for (let i = 0; i < urls.length; i += urlBatchSize) {
            const batch = urls.slice(i, i + urlBatchSize);
            setTimeout(() => {
                setUrlsToRender(urlsToRender => [...urlsToRender, ...batch]);
            }, 200 + i * 2);
        }
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
            ${urlsToRender.map(it => html`
                <img
                    src=${it} 
                    height=0
                    width=0 
                    decoding="async" 
                    fetchpriority="low" 
                />
            `)}
        </div>
    `;
}
