import { clsx } from "clsx";
import { html } from "htm/preact";

import { snackbarContainerId } from "./snackbarContainerId";

import cls from "./SnackbarContainer.module.css";

type Props = {
    className?: string;
}

export function SnackbarContainer({
    className,
}: Props) {
    return html`
        <div 
            class=${clsx(cls.snackbarContainerRoot, className)}
            id=${snackbarContainerId}
        >
        </div>
    `;
}
