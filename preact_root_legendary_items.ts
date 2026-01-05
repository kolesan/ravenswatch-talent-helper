import { html } from "htm/preact";
import { render } from "preact";

import { AppLegendaryItems } from "./src/ui/AppLegendaryItems";

render(
    html`<${AppLegendaryItems} />`, 
    document.body
);
