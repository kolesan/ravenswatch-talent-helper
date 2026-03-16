import { html } from "htm/preact";

import { ImagePreloader } from "./components/ImagePreloader/ImagePreloader";
import { RouterProvider, useRouter } from "./components/RouterProvider/RouterProvider";
import { SnackbarContainer } from "./components/SnackbarContainer/SnackbarContainer";
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
        <${ImagePreloader} />
        <${SnackbarContainer} />
    `;
}

function Content() {
    const location = useRouter();

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
