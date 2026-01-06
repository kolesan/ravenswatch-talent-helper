import { html } from "htm/preact";

import { Toolbar } from "./components/Toolbar/Toolbar";
import { CursedObjectsPage } from "./pages/CursedObjectsPage/CursedObjectsPage";

export function AppCursedObjects() {
    return html`
        <${Toolbar} />
        <${CursedObjectsPage} />
    `;
}
