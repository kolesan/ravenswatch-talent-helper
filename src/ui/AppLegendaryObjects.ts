import { html } from "htm/preact";

import { Toolbar } from "./components/Toolbar/Toolbar";
import { LegendaryObjectsPage } from "./pages/LegendaryObjectsPage/LegendaryObjectsPage";

export function AppLegendaryObjects() {
    return html`
        <${Toolbar} />
        <${LegendaryObjectsPage} />
    `;
}
