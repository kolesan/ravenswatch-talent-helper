import clsx from "clsx";
import { html } from "htm/preact";

import { HeroCode } from "../../../../../data/heroes";
import { TalentDescription } from "../../../../components/TalentDescription/TalentDescription";
import { TalentWithLockedFlag } from "../../types";
import { MultiplayerOnlyTag } from "../MultiplayerOnlyTag/MultiplayerOnlyTag";

import cls from "./MainList.module.css";

interface Props {
    label: string;
    heroCode: HeroCode;
    talents: TalentWithLockedFlag[];
    maxItems?: number;
    onTalentClick?: (talent: TalentWithLockedFlag) => void;
    onTalentAltClick?: (talent: TalentWithLockedFlag) => void;
}

export function MainList({
    label,
    heroCode,
    talents,
    maxItems,
    onTalentClick,
    onTalentAltClick,
}: Props) {
    const unlockedCount = talents.filter(it => !it.locked).length;
    return html`
        <div class=${cls.root}>
            <div class=${cls.label}>
                ${label} ${unlockedCount}${maxItems ? ` / ${maxItems}` : null}
            </div>
            ${!talents.length && html`
                <div class=${cls.empty}>
                    This list is empty
                </div>
            `}
            <ul class=${cls.mainList}>
                ${talents.slice(0, maxItems).map(talent => {
                    const imageSrc = talent.locked
                        ? `/icons/talents/locked_talent.webp`
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
