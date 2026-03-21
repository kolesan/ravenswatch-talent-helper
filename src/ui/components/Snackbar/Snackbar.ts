import { clsx } from "clsx";
import { html } from "htm/preact";
import { createPortal } from "preact/compat";

import { snackbarContainerId } from "../SnackbarContainer/snackbarContainerId";

import cls from "./Snackbar.module.css";

type Props = {
    className?: string;
    open: boolean;
    text: string;
    onClose: () => void;
}

export function Snackbar({
    className,
    open,
    text,
    onClose,
}: Props) {
    const container = document.getElementById(snackbarContainerId);

    if (!container) {
        return null;
    }
    
    return createPortal(html`
        <div 
            class=${clsx(cls.snackbarRoot, {
                [cls.shown!]: open,
            }, className)}
            onClick=${onClose}
        >
            ${text}
        </div>
    `, container);
}
