import { html } from "htm/preact";

import "./Toolbar.css";

export function Toolbar() {
    return html`
        <div class="toolbar">
            <div class=logo_container>
                <img 
                    class=logo_img 
                    src="/logos/ravenswatch-logo.webp" 
                    width=332 
                    height=100 
                />
                <div class="logo_text">
                    RUN HELPER
                </div>
            </div>
        </div>
    `;
}
