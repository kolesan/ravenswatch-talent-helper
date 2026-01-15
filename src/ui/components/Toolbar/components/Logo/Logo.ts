import { clsx } from "clsx";
import { html } from "htm/preact";
import { Link } from "wouter-preact";

import cls from "./Logo.module.css";

type Props = {
    className?: string;
}

export function Logo({
    className,
}: Props) {
    return html`
        <${Link} 
            class=${clsx(cls.logoRoot, className)}
            href="/"
        >
            <img 
                class=${cls.logoImg}
                src="/logos/ravenswatch-logo.webp" 
                width=314 
                height=80 
            />
            <div class=${cls.logoText}>
                RUN HELPER
            </div>
        </${Link}>
    `;
}
