import { html } from "htm/preact";

import { Help } from "./components/Help/Help";
import { Logo } from "./components/Logo/Logo";
import { Navigation } from "./components/Navigation/Navigation";

import cls from "./Toolbar.module.css";

export function Toolbar() {
    return html`
        <div class=${cls.toolbarRoot}>
            <${Logo} />
            <${Navigation} />
            <${Help} className=${cls.help} />
        </div>
    `;
}
