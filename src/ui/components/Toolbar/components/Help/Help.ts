import { clsx } from "clsx";
import { html } from "htm/preact";

import { Link } from "ui/components/RouterProvider/Link";
import { useRouter } from "ui/components/RouterProvider/RouterProvider";
import { pages } from "ui/pages";

import cls from "./Help.module.css";

type Props = {
    className?: string;
}

export function Help({
    className,
}: Props) {
    const location = useRouter();
    return html`
        <${Link} 
            className=${clsx(cls.helpRoot, {
                [cls.helpRootActive!]: location.includes(pages.help.path),
            }, className)}
            href=${pages.help.path}
        >
            ?
        </${Link}>
    `;
}
