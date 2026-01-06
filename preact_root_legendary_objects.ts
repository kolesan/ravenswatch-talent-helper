import { html } from "htm/preact";
import { render } from "preact";

import { AppLegendaryObjects } from "./src/ui/AppLegendaryObjects";

render(
    html`<${AppLegendaryObjects} />`, 
    document.body
);
