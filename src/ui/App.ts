import { html } from "htm/preact";
import { Redirect, Route, Switch } from "wouter-preact";

import { pages } from "../../pages";

import { Toolbar } from "./components/Toolbar/Toolbar";
import { TalentsPage } from "./pages/ASDTalentsPage/TalentsPage";
import { CursedObjectsPage } from "./pages/CursedObjectsPage/CursedObjectsPage";
import { LegendaryObjectsPage } from "./pages/LegendaryObjectsPage/LegendaryObjectsPage";

export function App() {
    return html`
        <${Toolbar} />

        <${Switch}>
            <${Route} path=${pages.all.talents.path} component=${TalentsPage} />
            <${Route} path=${pages.all.legendaryObjects.path} component=${LegendaryObjectsPage} />
            <${Route} path=${pages.all.cursedObjects.path} component=${CursedObjectsPage} />

            <${Redirect} path="*" to="/talents" />
        </${Switch}>
    `;
}
