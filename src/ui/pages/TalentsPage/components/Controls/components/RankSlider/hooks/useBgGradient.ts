import { useLayoutEffect } from "preact/hooks";

import { useCallbackRef } from "ui/hooks/useCallbackRef";

export function useBgGradient(value: number, min: number, max: number) {
    const [inputRef, inputElem] = useCallbackRef<HTMLInputElement>();

    useLayoutEffect(() => {
        if (inputElem) {
            const percent = ((value - min) * 100) / (max - min);
            inputElem.style.setProperty('--percent', `${percent}%`);
        }
    }, [inputElem, value, min, max]);

    return inputRef;
}
