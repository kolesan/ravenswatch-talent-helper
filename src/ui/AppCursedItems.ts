import { html } from "htm/preact";

import { Toolbar } from "./components/Toolbar/Toolbar";
import { CursedItemsPage } from "./pages/CursedItemsPage/CursedItemsPage";

export function AppCursedItems() {
    return html`
        <${Toolbar} />
        <${CursedItemsPage} />
    `;
}
