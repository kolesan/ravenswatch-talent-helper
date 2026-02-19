import { clsx } from "clsx";
import { html } from "htm/preact";

import { HeroCode } from "../../../data/heroes";
import { TalentWithLockedFlag } from "../../pages/TalentsPage/types";

import cls from "./TalentIcon.module.css";

type Props = {
    className?: string;
    heroCode: HeroCode;
    talent: TalentWithLockedFlag;
}

const lockedTalentSrc = `/icons/talents/locked_talent.webp`;
const frameSrc = `/icons/talents/new/optimized/talent_frame_common.webp`;

export function TalentIcon({
    className,
    heroCode,
    talent,
}: Props) {
    const { locked } = talent;

    if (locked) {
        return html`
            <img class=${cls.locked} src=${lockedTalentSrc} width=159 height=154 />
        `;
    }

    const talentSrc = `/icons/talents/new/optimized/${heroCode}/${talent.code}.webp`;

    return html`
        <div class=${clsx(cls.unlockedRoot, className)}>
            <img class=${cls.talent} src=${talentSrc} width=128 height=128 />
            <img class=${cls.frame} src=${frameSrc} width=256 height=256 />
        </div>
    `;
}
