import { clsx } from "clsx";
import { html } from "htm/preact";

import { HeroCode } from "../../../../../../../data/heroes";
import { TalentWithLockedFlag } from "../../../../types";

import cls from "./TalentIcon.module.css";

type Props = {
    className?: string;
    talent: TalentWithLockedFlag;
    heroCode: HeroCode;
}

const lockedTalentSrc = `/icons/talents/locked_talent.webp`;
const frameSrc = `/icons/talents/new/talent_frame_common.png`;

export function TalentIcon({
    className,
    talent,
    heroCode,
}: Props) {
    const { locked } = talent;

    if (locked) {
        return html`
            <img class=${cls.locked} src=${lockedTalentSrc} width=159 height=154 />
        `;
    }

    const talentSrc = `/icons/talents/new/${heroCode}/${talent.code}.png`;

    return html`
        <div class=${clsx(cls.unlockedRoot, className)}>
            <img class=${cls.talent} src=${talentSrc} width=128 height=128 />
            <img class=${cls.frame} src=${frameSrc} width=256 height=256 />
        </div>
    `;
}
