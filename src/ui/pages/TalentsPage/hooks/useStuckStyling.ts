import { useEffect, useRef } from "preact/hooks";

import { useDebouncedState } from "../../../hooks/useDebouncedState";

// TODO investigate how this trick works (why top -1 is needed, etc)
export function useStuckStyling() {
    const ref = useRef<Element>(null);
    const [isStuck, setIsStuck] = useDebouncedState(false, 150);

    useEffect(() => {
        new IntersectionObserver(([e]) => {
            setIsStuck(e.intersectionRatio < 1);
        }, 
        {
            threshold: [1]
        }
        ).observe(ref.current);
    }, [ref.current]);

    return {
        stuckStylingRef: ref,
        isStuck,
    };
}
