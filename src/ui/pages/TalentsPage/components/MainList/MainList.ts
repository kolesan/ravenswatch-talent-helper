import clsx from "clsx";
import { html } from "htm/preact";

import { HeroCode } from "../../../../../data/heroes";
import { TalentDescription } from "../../../../components/TalentDescription/TalentDescription";
import { holder } from "../../../../utils/onHold";
import { useIsStickyElemStuck } from "../../hooks/useIsStickyElemStuck";
import { TalentWithLockedFlag } from "../../types";
import { MultiplayerOnlyTag } from "../MultiplayerOnlyTag/MultiplayerOnlyTag";

import { PreferredIcon } from "./components/PreferredIcon/PreferredIcon";
import { TalentIcon } from "./components/TalentIcon/TalentIcon";

import cls from "./MainList.module.css";

interface Props {
    className?: string;
    classes?: {
        label?: string;
        content?: string;
    };
    label: string;
    heroCode: HeroCode;
    talents: TalentWithLockedFlag[];
    maxItems?: number;
    disableHover?: boolean;
    onTalentClick?: (talent: TalentWithLockedFlag) => void;
    onTalentAltClick?: (talent: TalentWithLockedFlag) => void;
    onTalentHold?: (talent: TalentWithLockedFlag) => void;
}

export function MainList({
    className,
    classes,
    label,
    heroCode,
    talents,
    maxItems,
    disableHover,
    onTalentClick,
    onTalentAltClick,
    onTalentHold,
}: Props) {
    const unlockedCount = talents.filter(it => !it.locked).length;

    const { 
        stickyElemRef, 
        isStuck: labelStuck 
    } = useIsStickyElemStuck({
        stuckAtPx: 148,
    });

    return html`
        <div class=${clsx(cls.root, className)}>
            <div class=${cls.labelHeight}></div>
            <div class=${cls.labelContainer}>
                <div 
                    class=${clsx({
                        [cls.label]: true,
                        [cls.labelStuck]: labelStuck,
                    }, classes?.label)} 
                    ref=${stickyElemRef}
                >
                    ${label}${" "}
                    ${unlockedCount}${maxItems ? ` / ${maxItems}` : null} 
                </div>
            </div>
            <div class=${clsx(cls.content, classes?.content)}>
                ${!talents.length && html`
                    <div class=${cls.empty}>
                        This list is empty
                    </div>
                `}
                <ul class=${cls.mainList}>
                    ${talents.slice(0, maxItems).map((talent, i) => {
                        const hld = holder({
                            onHold: () => {
                                onTalentHold?.(talent);
                            }
                        });
                        return html`
                            <li 
                                class=${clsx({
                                    [cls.listItem]: true, 
                                    [cls.locked]: talent.locked,
                                    [cls.listItemDisableHover]: disableHover,
                                })}
                                key=${talent.code}
                                onClick=${(e: any) => {
                                    if (hld.getHolding()) {
                                        return;
                                    }

                                    if (e.altKey) {
                                        onTalentAltClick?.(talent);
                                    } else {
                                        onTalentClick?.(talent);
                                    }
                                }}
                                onPointerDown=${hld.onPointerDown}
                                onPointerUp=${hld.onPointerUp}
                                onPointerCancel=${hld.onPointerUp}
                                onPointerMove=${hld.onPointerMove}
                            >
                                <${TalentIcon} 
                                    talent=${talent}
                                    heroCode=${heroCode}
                                />
                                <div>
                                    <div class=${cls.header}>
                                        <div class=${cls.name}>
                                            ${talent.name}
                                            ${talent.preferred && html`
                                                <${PreferredIcon} 
                                                    lowerTooltip=${i === 0}
                                                />
                                            `}
                                        </div>
                                        ${!talent.locked && html`
                                            <div class=${cls.tags}>
                                                ${talent.multiplayerOnly && html`
                                                    <${MultiplayerOnlyTag} 
                                                        lowerTooltip=${i === 0}
                                                    />
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
        </div>
    `;
}
