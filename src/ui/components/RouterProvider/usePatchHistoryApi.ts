import { useEffect } from "preact/hooks";

import { pushState, replaceState } from "./consts";

export function usePatchHistoryApi() {
    useEffect(() => {
        patchHistoryApi(); 
    }, []);
}

function patchHistoryApi() {
    history.pushState = patch(pushState);
    history.replaceState = patch(replaceState);
}
function patch(type: keyof typeof history) {
    // save original function
    const orig = history[type];

    return function override(this: any) {
        // call original function
        const rv = orig.apply(this, arguments);

        // fire custom event
        var e = new Event(type) as any;
        e.arguments = arguments;
        window.dispatchEvent(e);

        // return the original function result as if it was called directly
        return rv;
    };
};
