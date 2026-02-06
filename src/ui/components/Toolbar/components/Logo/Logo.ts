import { clsx } from "clsx";
import { html } from "htm/preact";

import { Link } from "../../../RouterProvider/Link";

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
                class=${cls.logoSmall}
                src="/logos/optimized/logo-small.webp" 
                width=94 
                height=94 
            />
            <div class=${cls.logoBig}>
                <img 
                    class=${cls.logoImg}
                    src="/logos/optimized/ravenswatch-logo.webp" 
                    width=314 
                    height=80 
                />
                <div class=${cls.logoText}>
                    RUN HELPER
                </div>
            </div>
        </${Link}>
    `;
}
