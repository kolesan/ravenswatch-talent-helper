import { useEffect } from "preact/hooks";

export function useLockBodyScroll(active: boolean) {
    useEffect(() => {
        if (!active) {
            return
        };

        const original = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        return () => {
            // Apparently this works, because this cleanup function
            // si fired not just on component unmount 
            // but also before the effect reruns
            document.body.style.overflow = original;
        };
    }, [active]);
}
