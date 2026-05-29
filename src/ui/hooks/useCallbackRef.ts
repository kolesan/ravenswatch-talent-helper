import { useCallback, useState } from "preact/hooks";

export function useCallbackRef<T = Element>() {
    const [elem, setElem] = useState<T | null>(null);
    const ref = useCallback(setElem, []);
    return [ref, elem] as const;
}
