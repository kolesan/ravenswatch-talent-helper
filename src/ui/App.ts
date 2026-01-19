import { html } from "htm/preact";
import { Route, Switch } from "wouter-preact";

import { pages } from "../../pages";

import { Toolbar } from "./components/Toolbar/Toolbar";
import { CursedObjectsPage } from "./pages/CursedObjectsPage/CursedObjectsPage";
import { HelpPage } from "./pages/HelpPage/HelpPage";
import { LegendaryObjectsPage } from "./pages/LegendaryObjectsPage/LegendaryObjectsPage";
import { TalentsPage } from "./pages/TalentsPage/TalentsPage";

export function App() {
    return html`
        <${Toolbar} />

        <${Switch}>
            <${Route} 
                path=${`${pages.talents.path}/:hero?`} 
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

            <!-- 
                Redirect was screwing the "back" button navigation 
                so had to replace with this. TalentsPage currently handles
                empty url by loading a hero from state and changin url
                manually
            -->
            <${Route} component=${TalentsPage} />
        </${Switch}>
    `;
}
