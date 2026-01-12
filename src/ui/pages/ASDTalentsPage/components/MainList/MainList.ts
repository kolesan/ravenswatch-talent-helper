import clsx from "clsx";
import { html } from "htm/preact";

import { HeroCode } from "../../../../../data/heroes";
import { TalentDescription } from "../../../../components/TalentDescription/TalentDescription";
import { TalentWithLockedFlag } from "../../types";
import { MultiplayerOnlyTag } from "../MultiplayerOnlyTag/MultiplayerOnlyTag";

import cls from "./MainList.module.css";

interface Props {
    classes?: string;
    label: string;
    heroCode: HeroCode;
    talents: TalentWithLockedFlag[];
    maxItems?: number;
    onTalentClick?: (talent: TalentWithLockedFlag) => void;
    onTalentAltClick?: (talent: TalentWithLockedFlag) => void;
}

export function MainList({
    classes,
    label,
    heroCode,
    talents,
    maxItems,
    onTalentClick,
    onTalentAltClick,
}: Props) {
    const unlockedCount = talents.filter(it => !it.locked).length;
    return html`
        <div classes=${classes}>
            <h1>${label} ${unlockedCount}${maxItems ? ` / ${maxItems}` : null}</h1>
            <ul class=${cls.mainList}>
                ${talents.slice(0, maxItems).map(talent => {
                    const imageSrc = talent.locked
                        ? `/icons/talents/locked_talent_cut.webp`
                        : `/icons/talents/${heroCode}/${talent.code}.webp`;

                    return html`
                        <li 
                            class=${clsx(cls.listItem, { [cls.locked] : talent.locked })}
                            onClick=${(e: any) => {
                                if (e.altKey) {
                                    onTalentAltClick?.(talent);
                                } else {
                                    onTalentClick?.(talent);
                                }
                            }}
                        >
                            <img src=${imageSrc} height=80 />
                            <div>
                                <div class=${cls.header}>
                                    <div class=${cls.name}>
                                        ${talent.name}
                                    </div>
                                    ${!talent.locked && html`
                                        <div class=${cls.tags}>
                                            ${talent.multiplayerOnly && html`
                                                <${MultiplayerOnlyTag} />
                                            `}
                                        </div>
                                    `}
                                </div>
                                <${TalentDescription} 
                                    isLocked=${talent.locked} 
                                    talent=${talent} 
                                />
                            </div>
                        </li>    
                    `;
                })}
            </ul>
        </div>
    `;
}
