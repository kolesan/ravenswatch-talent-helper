import { useEffect } from "preact/hooks";

export function useCloseOnEsc(
    active: boolean, 
    onClose: () => void
) {
    useEffect(() => {
        if (!active) {
            return;
        }

        const listener = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", listener);

        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [active, onClose]);
}
