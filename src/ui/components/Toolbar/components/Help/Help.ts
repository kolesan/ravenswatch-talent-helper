import { clsx } from "clsx";
import { html } from "htm/preact";

import { pages } from "../../../../../../pages";
import { Link } from "../../../RouterProvider/Link";
import { useRouter } from "../../../RouterProvider/RouterProvider";

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
            className=${clsx({
                [cls.helpRoot]: true,
                [cls.helpRootActive]: location.includes(pages.help.path),
            }, className)}
            href=${pages.help.path}
        >
            ?
        </${Link}>
    `;
}
