import { html } from "htm/preact";

import { Talent } from "../../../scripts/extractTalents/types";
import { DescriptionList } from "../DescriptionList/DescriptionList";

import { UnlockedAtRank } from "./components/UnlockedAtRank/UnlockedAtRank";

interface Props {
    isLocked: boolean;
    talent: Talent;
}

export function TalentDescription({
    isLocked,
    talent,
}: Props) {
    return html`
        <div>
            ${isLocked ? html`
                <${UnlockedAtRank} 
                    rank=${talent.unlockedAtRank} 
                />
            ` : html`
                <${DescriptionList} 
                    description=${talent.description}
                    improvements=${talent.improvements}
                    degradations=${talent.degradations}
                />
            `}
        </div>
    `;
}
