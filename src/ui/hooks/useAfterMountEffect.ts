import { useEffect } from "preact/hooks";

import { useVar } from "./useVar";

/**
 * Does not trigger on mount.
 *
 * *Does not support cleanup callbacks (add if needed)*
 */
export function useAfterMountEffect(effect: () => void, onChangeOf: any[]) {
    const [getMounted, setMounted] = useVar(false);

    useEffect(() => {
        if (getMounted()) {
            effect();
        }
    }, onChangeOf);

    useEffect(() => {
        setMounted(true);
    }, []);
}
