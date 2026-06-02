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
            onPointerUp=${(e: any) => {
                e.preventDefault();

                // This improves how the middle click to open
                // the view in another window is handled
                if (e.button !== 0) {
                    return;
                }

                hst.push(href);
            }}
            onClick=${(e: any) => {
                e.preventDefault();
            }}
        >
            ${children}
        </a>
    `;
}
