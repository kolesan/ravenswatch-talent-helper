import { html } from "htm/preact";

import { Toolbar } from "./components/Toolbar/Toolbar";
import { LegendaryItemsPage } from "./pages/LegendaryItemsPage/LegendaryItemsPage";

export function AppLegendaryItems() {
    return html`
        <${Toolbar} />
        <${LegendaryItemsPage} />
    `;
}
