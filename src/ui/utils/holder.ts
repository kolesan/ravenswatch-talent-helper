const defaultHoldDelayMs = 400;
const noLongerAClickDelayMs = 300;
const pointerMovementTresholdPx = 7;

type Params = {
    holdDelayMs?: number;
}

type OnPointerDownParams = {
    onHold?: () => void;
}

type OnPointerUpParams = {
    onClick: (e: PointerEvent) => void;
}

function getX(e: PointerEvent) {
    return e.screenX;
}

function getY(e: PointerEvent) {
    return e.screenY;
}

export function holder(params?: Params) {
    let delay = params?.holdDelayMs || defaultHoldDelayMs;

    let startX = 0;
    let startY = 0;
    let holdStartTime: number | null = null;
    let holdTimer: NodeJS.Timeout | null = null;

    function onPointerDown({
        onHold,
    }: OnPointerDownParams) { 
        return function(e: PointerEvent) {
            if (e.button !== 0) {
                return;
            }

            startX = getX(e);
            startY = getY(e);
            holdStartTime = Date.now();
            holdTimer = setTimeout(() => {
                onHold?.();
                cancelHold();
            }, delay);

            // Needed for iPhone overscroll screen bounce effect
            window.addEventListener('scroll', cancelHold, {
                passive: true,
                once: true,
            });
        }
    }

    function onPointerUp({
        onClick,
    }: OnPointerUpParams) {
        return function(e: PointerEvent) {
            if (holdTimer && !heldTooLongForAClick() && !pointerMovedTooMuch(e)) {
                onClick(e);
            }
            cancelHold();
        }
    }

    function onPointerMove(e: PointerEvent) {
        if (pointerMovedTooMuch(e)) {
            cancelHold();
        }
    }

    function cancelHold() {
        if (holdTimer) {
            clearTimeout(holdTimer);
            holdStartTime = null;
            holdTimer = null;
            window.removeEventListener('scroll', cancelHold);
        }
    }

    function heldTooLongForAClick() {
        return holdStartTime 
            && ((Date.now() - holdStartTime) > noLongerAClickDelayMs);
    }

    function pointerMovedTooMuch(e: PointerEvent) {
        const dx = getX(e) - startX;
        const dy = getY(e) - startY;
        return Math.hypot(dx, dy) > pointerMovementTresholdPx;
    }

    return {
        onPointerDown,
        onPointerUp,
        onPointerMove,
        onPointerCancel: cancelHold,
    };
}
