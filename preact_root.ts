import { html } from "htm/preact";
import { render } from "preact";

import { App } from "./src/ui/App";

render(
    html`<${App} />`, 
    document.body
);
