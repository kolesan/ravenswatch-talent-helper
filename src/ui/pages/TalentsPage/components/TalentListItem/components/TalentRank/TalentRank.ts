import { html } from "htm/preact";

import { Tooltip } from "ui/components/Tooltip/Tooltip";
import { Talent } from "ui/uiData/heroes/talents/types";

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
