import { clsx } from "clsx";
import { html } from "htm/preact";
import { Link } from "wouter-preact";

import { pages } from "../../../../../../pages";

import cls from "./Navigation.module.css";

type Props = {
    className?: string;
}

const items = [
    pages.talents,
    pages.legendaryObjects,
    pages.cursedObjects,
]

export function Navigation({
    className,
}: Props) {
    return html`
        <div class=${clsx(cls.navigationRoot, className)}>
            ${items.map(it => html`
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
    `;
}
