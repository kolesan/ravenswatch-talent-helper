import { useRef } from "preact/hooks";

export function useVar<T>(initialValue: T): [() => T, (v: T) => void] {
    const ref = useRef(initialValue);
    return [() => ref.current, (v: T) => (ref.current = v)];
}
