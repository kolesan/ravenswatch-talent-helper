import { clsx } from "clsx";
import { html } from "htm/preact";

import { Talent } from "../../../scripts/extractTalents/types";
import { HeroCode } from "../../uiData/heroes/types";

import cls from "./TalentIcon.module.css";

type Props = {
    className?: string;
    heroCode: HeroCode;
    talent: Talent;
}

const lockedTalentSrc = `/icons/talents/locked_talent.webp`;
const commonFrameSrc = `/icons/talents/talent_frame_common.webp`;
const ultimateFrameSrc = `/icons/talents/ultimate_frame.webp`;

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

    const talentSrc = `/icons/talents/${heroCode}/${talent.code}.webp`;
    const frameSrc = talent.type === "ultimate" ? ultimateFrameSrc : commonFrameSrc;

    return html`
        <div class=${clsx(cls.unlockedRoot, className)}>
            <img class=${cls.talent} src=${talentSrc} width=128 height=128 />
            <img class=${cls.frame} src=${frameSrc} width=256 height=256 />
        </div>
    `;
}
