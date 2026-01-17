import { useEffect, useRef } from "preact/hooks";

import { useDebouncedState } from "../../../hooks/useDebouncedState";

type Params = {
    enabled?: boolean;
    stuckAtPx?: number;
    doLog?: boolean;
}

const defaultParams: Params = {
    enabled: true,
    stuckAtPx: 0,
    doLog: false,
}

export function useIsStickyElemStuck(params?: Params) {
    const { 
        enabled = defaultParams.enabled,
        stuckAtPx = defaultParams.stuckAtPx,
        doLog = defaultParams.doLog
    } = params || defaultParams;

    const ref = useRef<Element>(null);
    const [isStuck, setIsStuck] = useDebouncedState(false, 150);

    useEffect(() => {
        if (!enabled) {
            return;
        }
        new IntersectionObserver(
            ([e]) => {
                // if less than 100% of an element is 
                // inside the intersection root (+top margin) we consider the
                // element stuck, because one pixel has already crossed
                // the roots top border but position sticky won't let it 
                // move any further
                setIsStuck(e.intersectionRatio < 1);
                log({ 
                    ratio: e.intersectionRatio, 
                    isIntersecting: e.isIntersecting,
                });
            }, 
            {
                // this effectively moves the top border of the root elem down,
                // the value should be where the sticky element is positioned,
                // -1 is added to ensure that the sticky element crosses
                // the root border and triggers a callback even though
                // it gets stuck right on border of the root element
                rootMargin: `${-stuckAtPx - 1}px 0px 0px 0px`,
                // this ensures the callback is fired when intersaction ratio changes
                // from 1 to anything else or back to 1
                // since originally the target is intersecting with the root fully
                // the ratio is 1
                // if at least one pixel crosses out of the root, the ratio changes to < 1
                // and the callback is fired
                threshold: 1,
            }
        ).observe(ref.current);
    }, [enabled, ref.current]);

    return {
        stickyElemRef: ref,
        isStuck,
    };


    // local utils
    function log(...params) {
        if (doLog) {
            console.log(...params);
        }
    }

}
