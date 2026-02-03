import { clsx } from "clsx";
import { html } from "htm/preact";

import { useBooleanState } from "../../hooks/useBooleanState";

import { ConfirmDialog } from "./ConfirmDialog/ConfirmDialog";

import cls from "./ClearListButton.module.css";

type Props = {
    className?: string;
    withConfirm?: boolean;
    listName?: string;
    disabled: boolean;
    onClear: () => void;
}

export function ClearListButton({
    className,
    withConfirm,
    listName,
    disabled,
    onClear,
}: Props) {
    const confirmOpen = useBooleanState(false);

    const renderedListName = listName
        ? html`the <span class=${cls.listName}>${listName}</span>` 
        : html`this`;

    return html`
        <div 
            class=${clsx(cls.clearListButtonRoot, {
                [cls.clearListButtonDisabled]: disabled 
            }, className)}
            onClick=${() => {
                if (disabled) {
                    return;
                }
                if (withConfirm) {
                    confirmOpen.on()
                } else {
                    onClear();
                }
            }}
        >
            Clear list
        </div>
        <${ConfirmDialog}
            message=${html`This will remove all talents from ${renderedListName} list.`}
            open=${confirmOpen.is}
            onConfirm=${onClear}
            onClose=${confirmOpen.off}
        />
    `;
}
