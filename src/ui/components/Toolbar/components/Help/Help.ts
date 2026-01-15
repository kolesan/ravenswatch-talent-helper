import { clsx } from "clsx";
import { html } from "htm/preact";
import { Link } from "wouter-preact";

import cls from "./Help.module.css";

type Props = {
    className?: string;
}

export function Help({
    className,
}: Props) {
    return html`
        <${Link} 
            className=${(active: boolean) => clsx({
                [cls.helpRoot]: true,
                [cls.helpRootActive]: active,
                [className]: true,
            })}
            href="/help"
        >
            ?
        </${Link}>
    `;
}
