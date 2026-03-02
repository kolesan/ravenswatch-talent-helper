import { clsx } from "clsx";
import { html } from "htm/preact";

import { pages } from "../../../../../../pages";
import { Link } from "../../../RouterProvider/Link";
import { useRouter } from "../../../RouterProvider/RouterProvider";

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
    const location = useRouter();
    return html`
        <div class=${clsx(cls.navigationRoot, className)}>
            ${items.map(it => html`
                <${Link} 
                    className=${clsx({
                        [cls.navigationItem]: true,
                        [cls.navigationItemActive]: location.includes(it.path),
                    })}
                    href=${it.path}
                >
                    ${it.label}
                </${Link}>
            `)}
        </div>
    `;
}
