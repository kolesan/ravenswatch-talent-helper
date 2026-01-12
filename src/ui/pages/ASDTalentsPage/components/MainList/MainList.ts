import { html } from "htm/preact";

import { HeroCode } from "../../../../../data/heroes";
import { Talent } from "../../../../../scripts/extractTalents/types";

import { TalentDescription } from "../../../../components/TalentDescription/TalentDescription";
import { MultiplayerOnlyTag } from "../MultiplayerOnlyTag/MultiplayerOnlyTag";

import cls from "./MainList.module.css";

interface Props {
    classes?: string;
    isLocked: boolean;
    label: string;
    heroCode: HeroCode;
    talents: Talent[];
    maxItems?: number;
    onTalentClick?: (talent: Talent) => void;
    onTalentAltClick?: (talent: Talent) => void;
}

export function MainList({
    classes,
    isLocked,
    label,
    heroCode,
    talents,
    maxItems,
    onTalentClick,
    onTalentAltClick,
}: Props) {
    return html`
        <div classes=${classes}>
            <h1>${label} ${talents.length}${maxItems ? ` / ${maxItems}` : null}</h1>
            <ul class="main-list">
                ${talents.slice(0, maxItems).map(talent => {
                    const imageSrc = isLocked
                        ? `/icons/talents/locked_talent.webp`
                        : `/icons/talents/${heroCode}/${talent.code}.webp`;

                    return html`
                        <li
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
                                    <div class=${cls.tags}>
                                        ${talent.multiplayerOnly && !isLocked && html`
                                            <${MultiplayerOnlyTag} />
                                        `}
                                    </div>
                                </div>
                                <${TalentDescription} 
                                    isLocked=${isLocked} 
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
