import { useEffect, useRef } from "preact/hooks";

export function useOnClickOutside(cb: () => void) {
    const ref = useRef<Element>(null);

    useEffect(() => {
        const listener = (e: PointerEvent) => {
            const target = e.currentTarget;
            if (
                target instanceof Node 
                && !ref.current?.contains(target)
            ) {
                cb();
            }
        }

        window.addEventListener("pointerdown", listener);

        return () => {
            window.removeEventListener("pointerdown", listener);
        };
    }, [])

    return {
        ref,
    }
}
