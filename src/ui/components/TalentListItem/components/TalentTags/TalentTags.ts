import { clsx } from "clsx";
import { html } from "htm/preact";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { MultiplayerOnlyTag } from "../../../../pages/TalentsPage/components/MultiplayerOnlyTag/MultiplayerOnlyTag";

import cls from "./TalentTags.module.css";

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
        <div class=${clsx(cls.talentTagsRoot, className)}>
            ${talent.multiplayerOnly && html`
                <${MultiplayerOnlyTag} lowerTooltip=${index === 0} />
            `}
        </div>
    `;
}
