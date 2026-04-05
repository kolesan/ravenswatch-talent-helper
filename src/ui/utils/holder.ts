const defaultHoldDelayMs = 450;

type Params = {
    holdDelayMs?: number;
}

type OnPointerDownParams = {
    onHold?: () => void;
}

type OnPointerUpParams = {
    onClick?: (e: PointerEvent) => void;
}

export function holder(params?: Params) {
    let delay = params?.holdDelayMs || defaultHoldDelayMs;

    let startX = 0;
    let startY = 0;
    let holdTimer: NodeJS.Timeout | null = null;

    function onPointerDown({
        onHold,
    }: OnPointerDownParams) { 
        return function(e: PointerEvent) {
            if (e.button !== 0) {
                return;
            }

            startX = e.clientX;
            startY = e.clientY;

            holdTimer = setTimeout(() => {
                onHold?.();
                cancelHold();
            }, delay);
        }
    }

    function onPointerUp({
        onClick,
    }: OnPointerUpParams) {
        return function(e: PointerEvent) {
            if (holdTimer) {
                onClick?.(e);
            }
            cancelHold();
        }
    }

    function onPointerMove(e: PointerEvent) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        if (Math.hypot(dx, dy) > 10) {
            cancelHold();
        }
    }

    function cancelHold() {
        if (holdTimer) {
            clearTimeout(holdTimer);
            holdTimer = null;
        }
    }

    return {
        onPointerDown,
        onPointerUp,
        onPointerMove,
    };
}
