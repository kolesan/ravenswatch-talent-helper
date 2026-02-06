import { clsx } from "clsx";
import { html } from "htm/preact";

import { Link } from "../../../RouterProvider/Link";

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
            }, className)}
            href="/help"
        >
            ?
        </${Link}>
    `;
}
