import { html } from "htm/preact";

import { HeroCode } from "../data/heroes";
import { Talent } from "../scripts/extractTalents/types";

import { TalentDescription } from "./components/TalentDescription/TalentDescription";

interface Props {
    classes?: string;
    isLocked: boolean;
    label: string;
    heroCode: HeroCode;
    talents: Talent[];
    onTalentClick?: (talent: Talent) => void;
    onTalentAltClick?: (talent: Talent) => void;
}

export function MainList({
    classes,
    isLocked,
    label,
    heroCode,
    talents,
    onTalentClick,
    onTalentAltClick,
}: Props) {
    return html`
        <div classes=${classes}>
            <h1>${label} ${talents.length}</h1>
            <ul class="main-list">
                ${talents.map(talent => {
                    const imageSrc = isLocked
                        ? `src/scrapedData/icons/talents/locked_talent.webp`
                        : `src/scrapedData/icons/talents/${heroCode}/${talent.code}.webp`;

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
                                <div class=name>${talent.name}</div>
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
