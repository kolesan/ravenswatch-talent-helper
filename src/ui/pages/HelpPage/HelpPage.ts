import { clsx } from "clsx";
import { html } from "htm/preact";

import cls from "./HelpPage.module.css";

type Props = {
    className?: string;
}

export function HelpPage({
    className,
}: Props) {
    return html`
        <div class=${clsx(cls.helpPageRoot, className)}>
            <div class=${cls.textContainer}>
                Help Page is Under Construction
            </div>
        </div>
    `;
}
