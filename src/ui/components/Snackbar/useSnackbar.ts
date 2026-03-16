import { useState } from "preact/hooks";

import { useBooleanState } from "../../hooks/useBooleanState";
import { useVar } from "../../hooks/useVar";

export function useSnackbar() {
    const open = useBooleanState(false);
    const [text, setText] = useState("");
    const [getHideTimeoutId, setHideTimeoutId] = useVar<NodeJS.Timeout | null>(null);

    const clearSnackHideTimeout = () => {
        const lastSnackHideTimeoutId = getHideTimeoutId();
        if (lastSnackHideTimeoutId) {
            clearTimeout(lastSnackHideTimeoutId);
            setHideTimeoutId(null);
        }
    }

    const show = (msg: string) => {
        clearSnackHideTimeout();
        setText(msg);
        open.on();
        setHideTimeoutId(setTimeout(open.off, 2400));
    }

    return {
        open: open.is,
        text,
        show,
        hide: open.off,
    }
}
