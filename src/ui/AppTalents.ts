import { html } from "htm/preact";

import { Toolbar } from "./components/Toolbar/Toolbar";
import { TalentsPage } from "./pages/talentsPage/TalentsPage";

export function AppTalents() {
    return html`
        <${Toolbar} />
        <${TalentsPage} />
    `;
}
