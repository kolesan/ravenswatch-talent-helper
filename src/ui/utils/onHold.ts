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
    let holdTimer = null;
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
        clearTimeout(holdTimer);
    }

    function onPointerMove(e: PointerEvent) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        if (Math.hypot(dx, dy) > 5) {
            clearTimeout(holdTimer);
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
