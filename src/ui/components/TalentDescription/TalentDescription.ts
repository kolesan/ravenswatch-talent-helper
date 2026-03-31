import { html } from "htm/preact";

import { Talent } from "../../uiData/heroes/talents/types";
import { DescriptionList } from "../DescriptionList/DescriptionList";

import { UnlockedAtRank } from "./components/UnlockedAtRank/UnlockedAtRank";

interface Props {
    className?: string;
    talent: Talent;
}

export function TalentDescription({
    className,
    talent,
}: Props) {
    return html`
        <div class=${className}>
            ${talent.locked ? html`
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
