import { html } from "htm/preact";

import { RouterProvider, useRouter } from "./components/RouterProvider/RouterProvider";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { CursedObjectsPage } from "./pages/CursedObjectsPage/CursedObjectsPage";
import { HelpPage } from "./pages/HelpPage/HelpPage";
import { LegendaryObjectsPage } from "./pages/LegendaryObjectsPage/LegendaryObjectsPage";
import { TalentsPage } from "./pages/TalentsPage/TalentsPage";

export function App() {
    return html`
        <${RouterProvider}>
            <${Content} />
        </${RouterProvider}>
    `;
}

function Content() {
    const location = useRouter();

    console.log("App Content rendered", { location });

    return html`
        <${Toolbar} />
        ${
            location.includes("legendary") ? html`<${LegendaryObjectsPage} />`
          : location.includes("cursed") ? html`<${CursedObjectsPage} />`
          : location.includes("help") ? html`<${HelpPage} />`
          : html`<${TalentsPage} />`
        }
    `;
}
