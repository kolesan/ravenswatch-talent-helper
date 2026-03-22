import { html } from "htm/preact";
import { render } from "preact";

import { App } from "./src/ui/App";
import { migrateLocalStorage } from "./src/ui/migration/migrateLocalStorage/migrateLocalStorage";

migrateLocalStorage("v1");

render(
    html`<${App} />`, 
    document.body
);
