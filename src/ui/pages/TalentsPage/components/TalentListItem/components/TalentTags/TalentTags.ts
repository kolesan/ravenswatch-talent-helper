import { html } from "htm/preact";

import { Talent } from "../../../../../../../scripts/extractTalents/types";
import { MultiplayerOnlyTag } from "../MultiplayerOnlyTag/MultiplayerOnlyTag";

type Props = {
    className?: string;
    talent: Talent;
    index: number;
}

export function TalentTags({
    className,
    talent,
    index,
}: Props) {
    return html`
        <div class=${className}>
            ${talent.multiplayerOnly && html`
                <${MultiplayerOnlyTag} lowerTooltip=${index === 0} />
            `}
        </div>
    `;
}
