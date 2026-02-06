import { useEffect } from "preact/hooks";

import { popState, pushState, replaceState } from "./consts";

type Params = {
    onLocationChange: (location: string) => void;
}

export function useInitHistoryListeners({
    onLocationChange
}: Params) {
    useEffect(() => {
        window.addEventListener(popState, handlePopState(onLocationChange));
        window.addEventListener(pushState as any, handlePushState(onLocationChange));
        window.addEventListener(replaceState as any, handleReplaceState(onLocationChange));
    }, []);
}

function handlePopState(cb: (location: string) => void) {
    return function(e: any) {
        console.log("Pop State detected", e?.target?.window?.location?.pathname);
        cb(e?.target?.window?.location?.pathname);
    }
}
function handlePushState(cb: (location: string) => void) {
    return function(e: any) {
        console.log("Push State detected", e.arguments[2]);
        cb(e.arguments[2]);
    }
}
function handleReplaceState(cb: (location: string) => void) {
    return function(e: any) {
        console.log("Replace State detected", e.arguments[2]);
        cb(e.arguments[2]);
    }
}
