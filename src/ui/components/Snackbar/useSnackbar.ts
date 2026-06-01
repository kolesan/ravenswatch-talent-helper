import { useState } from "preact/hooks";

import { useBooleanState } from "ui/hooks/useBooleanState";
import { useVar } from "ui/hooks/useVar";

const hideBlockDurationMs = 150;

export function useSnackbar() {
    const open = useBooleanState(false);
    const [text, setText] = useState("");
    const [getHideTimeoutId, setHideTimeoutId] = useVar<NodeJS.Timeout | null>(null);
    const [getShownAtTimestamp, setShownAtTimestamp] = useVar<number | null>(null);

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
        setShownAtTimestamp(Date.now());
    }

    return {
        open: open.is,
        text,
        show,
        hide: () => {
            // Without this check the snackbar gets shown and instantly hidden
            // if the user clicks a list item under a hidden snackbar
            const lastShownAt = getShownAtTimestamp();
            const currentTime = Date.now();
            const canHide = lastShownAt === null
                || currentTime - lastShownAt > hideBlockDurationMs;

            if (canHide) {
                open.off();
            }
        },
    }
}
