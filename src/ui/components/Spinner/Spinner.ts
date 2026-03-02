import { html } from "htm/preact";

import cls from "./Spinner.module.css";

export function Spinner() {
    return html`
        <svg
            class=${cls.circular}
            viewBox="25 25 50 50"
        >
            <circle
                className=${cls.path}
                cx="50"
                cy="50"
                r="20"
                fill="none"
                strokeWidth="4"
                strokeMiterlimit="10"
            />
        </svg>
    `;
}
