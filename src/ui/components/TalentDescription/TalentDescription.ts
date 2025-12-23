import { html } from "htm/preact";

import "./TalentDescription.css";

import { Talent } from "../../../scripts/extractTalents/types";

import { DescriptionList } from "./components/DescriptionList/DescriptionList";
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
            ${isLocked
                ? html`<${UnlockedAtRank} rank=${talent.unlockedAtRank} />`
                : talent.description.length > 1
                    ? html`<${DescriptionList} description=${talent.description} />`
                    : talent.description[0]
            }
        </div>
    `;
}
