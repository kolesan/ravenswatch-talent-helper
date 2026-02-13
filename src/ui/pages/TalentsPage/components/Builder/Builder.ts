import { html } from "htm/preact";
import { createPortal } from "preact/compat";
import { useEffect, useMemo, useState } from "preact/hooks";

import { Hero } from "../../../../../finalData/finalData";
import { ListLabelRight } from "../../../../components/ListLabelRight/ListLabelRight";
import { useBooleanState } from "../../../../hooks/useBooleanState";
import { maxUsedTalents } from "../../consts/maxUsedTalents";
import { heroStateStorage } from "../../utils/heroStateStorage/heroStateStorage";
import { markLocked } from "../../utils/markLocked";
import { RankSlider } from "../Controls/components/RankSlider/RankSlider";
import { rankSliderPortalContainerId } from "../Controls/constants";
import { MainList } from "../MainList/MainList";

import { useBuilder } from "./useBuilder";
import { getDerivedTalentsState } from "./utils/getDerivedTalentsState";

import cls from "./Builder.module.css";

type Props = {
    classes?: {
        list?: {
            label?: string;
            content?: string;
        }
    }
    hero: Hero;
}
export function Builder({
    classes,
    hero,
}: Props) {
    console.log("=== Builder rendering ===", { hero: hero.code });

    // load builder state of the hero
    const storedState = useMemo(() => {
        const storedHero = heroStateStorage.get(hero);
        console.log(`= Builder = Loading "${hero.code}" hero state`, storedHero);
        return storedHero;
    }, [hero.code]);

    // create local state for rank and talents
    // using stored state as initial state
    const [rank, setRank] = useState(storedState.rank);
    const builder = useBuilder(storedState.builderState);

    // ensure local rank and talent state is correct after hero change
    useEffect(() => {
        console.log("= Builder = Hero code change detected, setting rank and builder state", 
            storedState
        );
        setRank(storedState.rank);
        builder.loadState(storedState.builderState);
    }, [hero.code]);

    // save any local state changes to storage
    useEffect(() => {
        console.log("= Builder = Hero state change detected, saving to storage", {
            hero: hero.code,
            rank,
            builderState: builder.state,
        });
        heroStateStorage.set(hero.code, {
            rank: rank,
            builderState: builder.state,
        });
    }, [rank, builder.state]);

    const usedLabelScrollingAgain = useBooleanState(false);
    const preferredLabelScrollingAgain = useBooleanState(false);

    const derivedTalentsState = getDerivedTalentsState(rank, hero.talents, builder.state);

    const rankSliderPortalContainer = document.getElementById(rankSliderPortalContainerId);

    return html`
        ${rankSliderPortalContainer && createPortal(html`
            <${RankSlider}
                value=${rank}
                onChange=${setRank}
            />
        `, rankSliderPortalContainer)}
        <div class=${cls.builderRoot}>
            <${MainList}
                classes=${classes?.list}
                label=Used 
                heroCode=${hero.code} 
                talents=${builder.state.used} 
                maxItems=${maxUsedTalents}
                onStickyLabelScrollingAgain=${usedLabelScrollingAgain.set}
                onClear=${builder.clearUsed}
                onTalentClick=${builder.removeFromUsed}
                onTalentAltClick=${builder.removeFromUsed}
                onTalentHold=${builder.removeFromUsed}
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
                            used=${builder.state.used.length}
                            maxUsed=${maxUsedTalents}
                        />
                    `,
                }}
                label=Preferred 
                heroCode=${hero.code} 
                talents=${builder.state.preferred} 
                onStickyLabelScrollingAgain=${preferredLabelScrollingAgain.set}
                confirmBeforeClear
                onClear=${builder.clearPreferred}
                onTalentClick=${builder.preferredToUsed}
                onTalentAltClick=${builder.preferredToAvailable}
                onTalentHold=${builder.preferredToAvailable}
            />
            <${MainList} 
                classes=${classes?.list}
                slots=${{
                    labelRight: html`
                        <${ListLabelRight}
                            className=${cls.listLabelRight}
                            visible=${preferredLabelScrollingAgain.is}
                            used=${builder.state.used.length}
                            preferred=${builder.state.preferred.length}
                            maxUsed=${maxUsedTalents}
                        />
                    `,
                }}
                label=Available 
                heroCode=${hero.code} 
                talents=${[
                    ...derivedTalentsState.available, 
                    ...derivedTalentsState.locked.map(markLocked),
                ]}
                onTalentClick=${builder.availabelToUsed}
                onTalentAltClick=${builder.availableToPreferred}
                onTalentHold=${builder.availableToPreferred}
            />
        </div>
    `;
}
