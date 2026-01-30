const defaultHoldDelayMs = 450;

type Params = {
    holdDelayMs?: number;
    onHold: () => void;
}

export function holder({
    holdDelayMs,
    onHold,
}: Params) {
    let delay = holdDelayMs || defaultHoldDelayMs;

    let startX = 0;
    let startY = 0;
    let holdTimer: NodeJS.Timeout | null = null;
    let holding = false;

    function onPointerDown(e: PointerEvent) {
        if (e.button !== 0) {
            return;
        }

        startX = e.clientX;
        startY = e.clientY;
        holding = false;
        holdTimer = setTimeout(() => {
            holding = true;
            onHold();
        }, delay);
    }

    function onPointerUp() {
        cancel();
    }

    function onPointerMove(e: PointerEvent) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        if (Math.hypot(dx, dy) > 5) {
            cancel();
        }
    }

    function cancel() {
        if (holdTimer) {
            clearTimeout(holdTimer);
            holdTimer = null;
            holding = false;
        }
    }

    function getHolding() {
        return holding;
    }

    return {
        onPointerDown,
        onPointerUp,
        onPointerMove,
        getHolding,
    };
}
