import { useState } from "preact/hooks";

export interface BooleanState {
    is: boolean;
    on: () => void;
    off: () => void;
    toggle: () => void;
    set: (v: boolean) => void;
}

export function useBooleanState(initial: boolean | (() => boolean)): BooleanState {
    const [is, setIs] = useState(initial);
    const on = () => setIs(true);
    const off = () => setIs(false);
    const toggle = () => setIs(!is);
    const set = setIs;
    return { is, on, off, toggle, set };
}
