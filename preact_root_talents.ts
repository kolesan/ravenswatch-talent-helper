import { html } from "htm/preact";
import { render } from "preact";

import { AppTalents } from "./src/ui/AppTalents";

render(
    html`<${AppTalents} />`, 
    document.body
);
