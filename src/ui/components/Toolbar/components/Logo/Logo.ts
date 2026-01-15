import { clsx } from "clsx";
import { html } from "htm/preact";

import cls from "./Logo.module.css";

type Props = {
    className?: string;
}

export function Logo({
    className,
}: Props) {
    return html`
        <div class=${clsx(cls.logoRoot, className)}>
            <img 
                class=${cls.logoImg}
                src="/logos/ravenswatch-logo.webp" 
                width=314 
                height=80 
            />
            <div class=${cls.logoText}>
                RUN HELPER
            </div>
        </div>
    `;
}
