import { html } from "htm/preact";

import { Talent } from "../../../../../../../scripts/extractTalents/types";
import { Tooltip } from "../../../../../../components/Tooltip/Tooltip";

import cls from "./TalentRank.module.css";

type Props = {
    className?: string;
    talent: Talent;
}

export function TalentRank({
    className,
    talent,
}: Props) {
    return html`
        <${Tooltip} 
            className=${className} 
            left
            title=${`Unlocked at Rank ${talent.unlockedAtRank}`}
        >
            <span class=${cls.rank}>
                R${talent.unlockedAtRank}
            </span>
        </${Tooltip}>
    `;
}
