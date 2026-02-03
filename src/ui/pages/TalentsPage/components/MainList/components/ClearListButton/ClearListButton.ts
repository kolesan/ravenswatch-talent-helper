import { clsx } from "clsx";
import { html } from "htm/preact";

import cls from "./ClearListButton.module.css";

type Props = {
    className?: string;
    disabled: boolean;
    onClick: () => void;
}

export function ClearListButton({
    className,
    disabled,
    onClick,
}: Props) {
    return html`
        <div 
            class=${clsx(cls.clearListButtonRoot, {
                [cls.clearListButtonDisabled]: disabled 
            }, className)}
            onClick=${!disabled && onClick}
        >
            Clear list
        </div>
    `;
}
