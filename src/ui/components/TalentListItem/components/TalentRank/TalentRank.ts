import { clsx } from "clsx";
import { html } from "htm/preact";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { Tooltip } from "../../../Tooltip/Tooltip";

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
            className=${clsx(cls.talentRankRoot, className)} 
            left
            title=${`Unlocked at Rank ${talent.unlockedAtRank}`}
        >
            <span class=${cls.rank}>
                R${talent.unlockedAtRank}
            </span>
        </${Tooltip}>
    `;
}
