import { html } from "htm/preact";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { ListLabelRight } from "../../../../components/ListLabelRight/ListLabelRight";
import { useBooleanState } from "../../../../hooks/useBooleanState";
import { maxUsedTalents } from "../../consts/maxUsedTalents";
import { markLocked } from "../../utils/markLocked";
import { MainList } from "../MainList/MainList";

import { BuilderState } from "./types";
import { getDerivedTalentsState } from "./utils/getDerivedTalentsState";

import cls from "./Builder.module.css";

type Props = {
    classes?: {
        list?: {
            label?: string;
            content?: string;
        }
    }
    heroCode: string;
    heroTalents: Talent[];
    heroRank: number;
    state: BuilderState;
    onClearUsed: () => void;
    onRemoveFromUsed: () => void;
    onClearPreferred: () => void;
    onPreferredToUsed: () => void;
    onPreferredToAvailable: () => void;
    onAvailabelToUsed: () => void;
    onAvailableToPreferred: () => void;
}

export function Builder({
    classes,
    heroCode,
    heroTalents,
    heroRank,
    state,
    onClearUsed,
    onRemoveFromUsed,
    onClearPreferred,
    onPreferredToUsed,
    onPreferredToAvailable,
    onAvailabelToUsed,
    onAvailableToPreferred,
}: Props) {
    console.log("========== Builder rendering ==========");

    const usedLabelScrollingAgain = useBooleanState(false);
    const preferredLabelScrollingAgain = useBooleanState(false);

    const derivedTalentsState = getDerivedTalentsState(heroRank, heroTalents, state);

    return html`
        <div class=${cls.builderRoot}>
            <${MainList}
                classes=${classes?.list}
                label=Used 
                heroCode=${heroCode} 
                talents=${state.used} 
                maxItems=${maxUsedTalents}
                onStickyLabelScrollingAgain=${usedLabelScrollingAgain.set}
                onClear=${onClearUsed}
                onTalentClick=${onRemoveFromUsed}
                onTalentAltClick=${onRemoveFromUsed}
                onTalentHold=${onRemoveFromUsed}
            />
            <${MainList} 
                classes=${classes?.list}
                slots=${{
                    labelRight: html`
                        <${ListLabelRight} 
                            className=${cls.listLabelRight}
                            visible=${
                                usedLabelScrollingAgain.is 
                                && !preferredLabelScrollingAgain.is
                            }
                            used=${state.used.length}
                            maxUsed=${maxUsedTalents}
                        />
                    `,
                }}
                label=Preferred 
                heroCode=${heroCode} 
                talents=${state.preferred} 
                onStickyLabelScrollingAgain=${preferredLabelScrollingAgain.set}
                confirmBeforeClear
                onClear=${onClearPreferred}
                onTalentClick=${onPreferredToUsed}
                onTalentAltClick=${onPreferredToAvailable}
                onTalentHold=${onPreferredToAvailable}
            />
            <${MainList} 
                classes=${classes?.list}
                slots=${{
                    labelRight: html`
                        <${ListLabelRight}
                            className=${cls.listLabelRight}
                            visible=${preferredLabelScrollingAgain.is}
                            used=${state.used.length}
                            preferred=${state.preferred.length}
                            maxUsed=${maxUsedTalents}
                        />
                    `,
                }}
                label=Available 
                heroCode=${heroCode} 
                talents=${[
                    ...derivedTalentsState.available, 
                    ...derivedTalentsState.locked.map(markLocked),
                ]}
                onTalentClick=${onAvailabelToUsed}
                onTalentAltClick=${onAvailableToPreferred}
                onTalentHold=${onAvailableToPreferred}
            />
        </div>
    `;
}
