import clsx from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import { HeroCode } from "../../../../../data/heroes";
import { TalentDescription } from "../../../../components/TalentDescription/TalentDescription";
import { Tooltip } from "../../../../components/Tooltip/Tooltip";
import { useIsStickyElemStuck } from "../../../../hooks/useIsStickyElemStuck";
import { holder } from "../../../../utils/onHold";
import { TalentWithLockedFlag } from "../../types";
import { MultiplayerOnlyTag } from "../MultiplayerOnlyTag/MultiplayerOnlyTag";

import { ClearListButton } from "./components/ClearListButton/ClearListButton";
import { PreferredIcon } from "./components/PreferredIcon/PreferredIcon";
import { TalentIcon } from "./components/TalentIcon/TalentIcon";

import cls from "./MainList.module.css";

interface Props {
    className?: string;
    classes?: {
        label?: string;
        content?: string;
    };
    slots?: {
        labelRight?: ComponentChildren;
    };
    label: string;
    heroCode: HeroCode;
    talents: TalentWithLockedFlag[];
    maxItems?: number;
    disableHover?: boolean;
    showRanks?: boolean;
    confirmBeforeClear?: boolean;
    onClear?: () => void;
    onStickyLabelScrollingAgain?: (isScrollingAgain: boolean) => void;
    onTalentClick?: (talent: TalentWithLockedFlag) => void;
    onTalentAltClick?: (talent: TalentWithLockedFlag) => void;
    onTalentHold?: (talent: TalentWithLockedFlag) => void;
}

export function MainList({
    className,
    classes,
    slots,
    label,
    heroCode,
    talents,
    maxItems,
    disableHover,
    showRanks,
    confirmBeforeClear,
    onClear,
    onStickyLabelScrollingAgain,
    onTalentClick,
    onTalentAltClick,
    onTalentHold,
}: Props) {
    const unlockedCount = talents.filter(it => !it.locked).length;

    const { 
        stickyElemRef, 
        isStuck: labelStuck 
    } = useIsStickyElemStuck({
        stuckAtPx: 154,
        onStartingToScrollAgain: onStickyLabelScrollingAgain,
    });

    const empty = !talents.length;

    return html`
        <div class=${clsx(cls.root, className)}>
            <div class=${cls.labelHeight}></div>
            <div class=${cls.labelContainer}>
                <div 
                    class=${clsx({
                        [cls.label]: true,
                        [cls.labelHeight]: true,
                        [cls.labelStuck]: labelStuck,
                    }, classes?.label)} 
                    ref=${stickyElemRef}
                >
                    <div class=${cls.labelLeft}>
                        ${label}${" "}
                        ${unlockedCount}${maxItems ? ` / ${maxItems}` : null} 
                    </div>
                    <div class=${cls.labelMiddle}>
                        ${onClear && html`
                            <${ClearListButton}
                                withConfirm=${confirmBeforeClear}
                                listName=${label}
                                disabled=${empty || labelStuck}
                                onClear=${onClear}
                            />
                        `}
                    </div>
                    ${slots?.labelRight && html`
                        <div class=${cls.labelRight}>
                            ${slots?.labelRight}
                        </div>
                    `}
                </div>
            </div>
            <div class=${clsx(cls.content, classes?.content)}>
                ${empty && html`
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
                                <div class=${cls.talentDescription}>
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
                                            ${showRanks && talent.unlockedAtRank > 1 && html`
                                                <${Tooltip} 
                                                    className=${cls.rankContainer} 
                                                    left
                                                    title=${`Unlocked at Rank ${talent.unlockedAtRank}`}
                                                >
                                                    <span class=${cls.rank}>
                                                        R${talent.unlockedAtRank}
                                                    </span>
                                                </${Tooltip}>
                                            `}
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
