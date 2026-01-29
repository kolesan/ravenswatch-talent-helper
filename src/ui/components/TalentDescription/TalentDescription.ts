import { html } from "htm/preact";

import { Talent } from "../../../scripts/extractTalents/types";
import { DescriptionList } from "../DescriptionList/DescriptionList";

import { UnlockedAtRank } from "./components/UnlockedAtRank/UnlockedAtRank";

interface Props {
    className?: string;
    isLocked: boolean;
    talent: Talent;
}

export function TalentDescription({
    className,
    isLocked,
    talent,
}: Props) {
    return html`
        <div class=${className}>
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
