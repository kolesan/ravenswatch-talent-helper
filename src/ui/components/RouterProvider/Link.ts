import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import { hst } from "ui/core/hst";

import { Anchor } from "../Anchor/Anchor";

type Props = {
    className?: string;
    href: string;
    children: ComponentChildren;
}

export function Link({
    className,
    href,
    children,
}: Props) {
    return html`
        <${Anchor}
            className=${className}
            href=${href}
            onPointerUp=${() => {
                hst.push(href);
            }}
        >
            ${children}
        </${Anchor}
    `;
}
