import { html } from "htm/preact";
import { render } from "preact";

import { App } from "./src/ui/App";
import { migrateLocalStorage } from "./src/utils/migrateLocalStorage/migrateLocalStorage";
import { preloadImages } from "./src/utils/preloadImages";

migrateLocalStorage("v1");
// preloadImages();

render(
    html`<${App} />`, 
    document.body
);
