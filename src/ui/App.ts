import { html } from "htm/preact";
import { Redirect, Route, Switch } from "wouter-preact";

import { pages } from "../../pages";

import { Toolbar } from "./components/Toolbar/Toolbar";
import { TalentsPage } from "./pages/TalentsPage/TalentsPage";
import { CursedObjectsPage } from "./pages/CursedObjectsPage/CursedObjectsPage";
import { HelpPage } from "./pages/HelpPage/HelpPage";
import { LegendaryObjectsPage } from "./pages/LegendaryObjectsPage/LegendaryObjectsPage";

export function App() {
    return html`
        <${Toolbar} />

        <${Switch}>
            <${Route} 
                path=${pages.talents.path} 
                component=${TalentsPage} 
            />
            <${Route} 
                path=${pages.legendaryObjects.path} 
                component=${LegendaryObjectsPage} 
            />
            <${Route} 
                path=${pages.cursedObjects.path} 
                component=${CursedObjectsPage} 
            />
            <${Route} 
                path=${pages.help.path} 
                component=${HelpPage} 
            />

            <${Redirect} to="/talents" />
        </${Switch}>
    `;
}
