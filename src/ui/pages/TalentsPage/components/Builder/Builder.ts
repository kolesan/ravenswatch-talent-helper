import { html } from "htm/preact";
import { createPortal } from "preact/compat";
import { useEffect, useMemo } from "preact/hooks";

import { Hero } from "../../../../../finalData/finalData";
import { ListLabelRight } from "../../../../components/ListLabelRight/ListLabelRight";
import { useBooleanState } from "../../../../hooks/useBooleanState";
import { maxUsedTalents } from "../../consts/maxUsedTalents";
import { heroStateStorage } from "../../utils/heroStateStorage/heroStateStorage";
import { RankSlider } from "../Controls/components/RankSlider/RankSlider";
import { rankSliderPortalContainerId } from "../Controls/constants";
import { MainList } from "../MainList/MainList";

import { useTalentsBuilder } from "./useTalentsBuilder";

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

    // init local state
    const talentsBuilder = useTalentsBuilder({
        initialState: storedState,
        allHeroTalents: hero.talents,
        onNewState: newState => {
            heroStateStorage.set(hero.code, newState);
        },
    });

    // ensure local rank and talent state is correct after hero change
    useEffect(() => {
        console.log("= Builder = Hero code change detected, setting rank and builder state", 
            storedState
        );
        talentsBuilder.loadStateWithoutNewStateCb(storedState);
    }, [hero.code]);

    const usedLabelScrollingAgain = useBooleanState(false);
    const preferredLabelScrollingAgain = useBooleanState(false);

    const rankSliderPortalContainer = document
        .getElementById(rankSliderPortalContainerId);

    return html`
        ${rankSliderPortalContainer && createPortal(html`
            <${RankSlider}
                value=${talentsBuilder.rank}
                onChange=${talentsBuilder.setRank}
            />
        `, rankSliderPortalContainer)}
        <div class=${cls.builderRoot}>
            <${MainList}
                classes=${classes?.list}
                label=Used 
                heroCode=${hero.code} 
                talents=${talentsBuilder.talents.used} 
                maxItems=${maxUsedTalents}
                onStickyLabelScrollingAgain=${usedLabelScrollingAgain.set}
                onClear=${talentsBuilder.clearUsed}
                onTalentClick=${talentsBuilder.removeFromUsed}
                onTalentAltClick=${talentsBuilder.removeFromUsed}
                onTalentHold=${talentsBuilder.removeFromUsed}
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
                            used=${talentsBuilder.talents.used.length}
                            maxUsed=${maxUsedTalents}
                        />
                    `,
                }}
                label=Preferred 
                heroCode=${hero.code} 
                talents=${talentsBuilder.talents.preferred} 
                onStickyLabelScrollingAgain=${preferredLabelScrollingAgain.set}
                confirmBeforeClear
                onClear=${talentsBuilder.clearPreferred}
                onTalentClick=${talentsBuilder.preferredToUsed}
                onTalentAltClick=${talentsBuilder.preferredToAvailable}
                onTalentHold=${talentsBuilder.preferredToAvailable}
            />
            <${MainList} 
                classes=${classes?.list}
                slots=${{
                    labelRight: html`
                        <${ListLabelRight}
                            className=${cls.listLabelRight}
                            visible=${preferredLabelScrollingAgain.is}
                            used=${talentsBuilder.talents.used.length}
                            preferred=${talentsBuilder.talents.preferred.length}
                            maxUsed=${maxUsedTalents}
                        />
                    `,
                }}
                label=Available 
                heroCode=${hero.code} 
                talents=${talentsBuilder.talents.available}
                onTalentClick=${talentsBuilder.availableToUsed}
                onTalentAltClick=${talentsBuilder.availableToPreferred}
                onTalentHold=${talentsBuilder.availableToPreferred}
            />
        </div>
    `;
}
