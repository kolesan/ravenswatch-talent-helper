import { clsx } from "clsx";
import { html } from "htm/preact";

import { pages } from "../../../../pages";

import cls from "./Toolbar.module.css";

export function Toolbar() {
    return html`
        <div class=${cls.root}>
            <div class=${cls.logoContainer}>
                <img 
                    class=${cls.logoImg}
                    src="/logos/ravenswatch-logo.webp" 
                    width=332 
                    height=100 
                />
                <div class=${cls.logoText}>
                    RUN HELPER
                </div>
            </div>
            <div class=${cls.navigation}>
                ${pages.map(it => html`
                    <a 
                        class=${clsx({
                            [cls.navigationItem]: true,
                            [cls.navigationItemActive]: it.path === location.pathname,
                        })}
                        href=${it.path}
                    >
                        ${it.label}
                    </a>
                `)}
            </div>
        </div>
    `;
}
