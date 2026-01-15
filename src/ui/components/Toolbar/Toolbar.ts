import { clsx } from "clsx";
import { html } from "htm/preact";
import { Link } from "wouter-preact";

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
                ${pages.utils.asArray().map(it => html`
                    <${Link} 
                        className=${(active: boolean) => clsx({
                            [cls.navigationItem]: true,
                            [cls.navigationItemActive]: active,
                        })}
                        href=${it.path}
                    >
                        ${it.label}
                    </${Link}>
                `)}
            </div>
        </div>
    `;
}
