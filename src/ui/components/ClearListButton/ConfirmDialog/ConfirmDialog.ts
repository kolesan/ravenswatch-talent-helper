import { clsx } from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";
import { createPortal } from "preact/compat";

import { useCloseOnEsc } from "./utils/useCloseOnEsc";
import { useLockBodyScroll } from "./utils/useLockBodyScroll";

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
    useLockBodyScroll(open);
    useCloseOnEsc(open, onClose);

    if (!open) {
        return null;
    }

    return createPortal(html`
        <div 
            class=${cls.confirmDialogBackdrop}
            onPointerUp=${onClose}
        >
        </div>
        <div class=${clsx(cls.confirmDialogRoot, className)}>
            <div class=${cls.header}>
                <div class=${cls.title}>
                    Are you sure?
                </div>
                <div 
                    class=${clsx(cls.button, cls.closeButton)} 
                    onPointerUp=${onClose}
                >
                    <span class=${cls.closeButtonText}>
                        ✕
                    </span>
                </div>
            </div>
            <div class=${cls.body}>
                ${message}
            </div>
            <div class=${cls.buttons}>
                <div 
                    class=${clsx(cls.button, cls.confirmButton)}
                    onPointerUp=${() => {
                        onConfirm();
                        onClose();
                    }}
                >
                    Yes
                </div>
                <div 
                    class=${clsx(cls.button, cls.cancelButton)}
                    onPointerUp=${onClose}
                >
                    Cancel
                </div>
            </div>
        </div>
    `, document.body);
}
