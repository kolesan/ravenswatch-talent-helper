import { useEffect, useRef } from "preact/hooks";

export function useOnClickOutside(cb: () => void) {
    const ref = useRef(null);

    useEffect(() => {
        const listener = (e: PointerEvent) => {
            if (!ref.current?.contains(e.target)) {
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
