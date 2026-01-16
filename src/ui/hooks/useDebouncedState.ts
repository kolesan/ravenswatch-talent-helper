import debounce from "lodash.debounce";
import { useMemo, useState } from "preact/hooks";

const DEFAULT_WAIT = 300;

export function useDebouncedState<T>(defaultValue: T, wait: number = DEFAULT_WAIT) {
    const [debouncedValue, setDebouncedValue] = useState(defaultValue);

    const debouncedSetValue = useMemo(
        () =>
            debounce(setDebouncedValue, wait, {
                trailing: true,
                leading: true,
            }),
        [setDebouncedValue],
    );

    return [debouncedValue, debouncedSetValue] as const;
}
