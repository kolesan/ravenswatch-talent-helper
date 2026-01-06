import { html } from "htm/preact";
import { render } from "preact";

import { AppCursedObjects } from "./src/ui/AppCursedObjects";

render(
    html`<${AppCursedObjects} />`, 
    document.body
);
