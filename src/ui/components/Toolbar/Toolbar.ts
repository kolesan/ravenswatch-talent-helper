import { clsx } from "clsx";
import { html } from "htm/preact";
import { Link } from "wouter-preact";

import { pages } from "../../../../pages";

import { Logo } from "./components/Logo/Logo";

import cls from "./Toolbar.module.css";

export function Toolbar() {
    return html`
        <div class=${cls.root}>
            <${Logo} />
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
