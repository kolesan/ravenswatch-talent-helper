import { popState, pushState, replaceState } from "../consts";

export function initHistoryListeners(cb: (location: string) => void) {
    window.addEventListener(popState, handlePopState(cb));
    window.addEventListener(pushState as any, handlePushState(cb));
    window.addEventListener(replaceState as any, handleReplaceState(cb));
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
