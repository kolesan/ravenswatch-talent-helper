import { clsx } from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import cls from "./ConfirmDialog.module.css";

type Props = {
    className?: string;
    message: ComponentChildren;
    open: boolean;
    onConfirm: () => void;
    onClose: () => void;
}

export function ConfirmDialog({
    className,
    message,
    open,
    onConfirm,
    onClose,
}: Props) {
    if (!open) {
        return null;
    }

    return html`
        <div class=${clsx(cls.confirmDialogRoot, className)}>
            <div class=${cls.header}>
                <div class=${cls.title}>
                    Are you sure?
                </div>
                <div 
                    class=${cls.closeButton} 
                    onClick=${onClose}
                >
                    ✕
                </div>
            </div>
            <div class=${cls.body}>
                ${message}
            </div>
            <div class=${cls.buttons}>
                <div 
                    class=${cls.confirmButton} 
                    onClick=${() => {
                        onConfirm();
                        onClose();
                    }}
                >
                    Yes
                </div>
                <div 
                    class=${cls.cancelButton} 
                    onClick=${onClose}
                >
                    Cancel
                </div>
            </div>
        </div>
    `;
}
