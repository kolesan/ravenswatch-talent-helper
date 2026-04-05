import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import { hst } from "ui/core/hst";

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
        <a 
            class=${className}
            href=${href}
            onClick=${(e: any) => {
                e.preventDefault();
                hst.push(href);
            }}
        >
            ${children}
        </a>
    `;
}
