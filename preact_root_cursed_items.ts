import { html } from "htm/preact";
import { render } from "preact";

import { AppCursedItems } from "./src/ui/AppCursedItems";

render(
    html`<${AppCursedItems} />`, 
    document.body
);
