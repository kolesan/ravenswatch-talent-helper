import { html } from "htm/preact";

import "./UnlockedAtRank.css";

interface Props {
    rank: number;
}

export function UnlockedAtRank({
    rank,
}: Props) {
    return html`
        Unlocked at Rank 
        <span class="unlocked-at-rank">
            ${rank}
        </span>
    `;
}
