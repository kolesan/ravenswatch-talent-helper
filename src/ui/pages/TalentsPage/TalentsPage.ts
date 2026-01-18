import clsx from "clsx";
import { html } from "htm/preact";

import { Hero, heroes } from "../../../finalData/finalData";
import { Talent } from "../../../scripts/extractTalents/types";
import { usePageTitle } from "../../hooks/usePageTitle";
import { appStateStorage } from "../../utils/appStateStorage/appStateStorage";

import { HeroSelect } from "./components/HeroSelect/HeroSelect";
import { MainList } from "./components/MainList/MainList";
import { maxUsedTalents } from "./consts/maxUsedTalents";
import { rankConsts } from "./consts/rankConsts";
import { useSaveStateToStorage } from "./hooks/useSaveStateToStorage";
import { useIsStickyElemStuck } from "./hooks/useIsStickyElemStuck";
import { useTalentsPageState } from "./hooks/useTalentsPageState";
import { TalentWithLockedFlag } from "./types";
import { defaultAppState } from "./utils/defaultAppState";
import { getDerivedTalentsState } from "./utils/getDerivedTalentsState";
import { markLocked } from "./utils/markLocked";

import cls from "./TalentsPage.module.css";

const initialState = appStateStorage.getCurrentHero() || defaultAppState;

export function TalentsPage() {
    usePageTitle("Talents");

    const [state, dispatch] = useTalentsPageState(initialState);

    useSaveStateToStorage(state);

    const { 
        stickyElemRef, 
        isStuck: controlsStuck 
    } = useIsStickyElemStuck({
        stuckAtPx: 56,
    });

    const derivedTalentsState = getDerivedTalentsState(state);

    return html`
        <div 
            class=${clsx({
                [cls.controls]: true,
                [cls.controlsStuck]: controlsStuck
            })}
            ref=${stickyElemRef}
        >
            <${HeroSelect}
                items=${heroes.asArray}
                value=${state.hero}
                onChange=${(hero: Hero) => {
                    dispatch({
                        type: "set_hero",
                        heroCode: hero.code,
                    });
                }}
            />
            <label class=container-label>
                Rank
                <input
                    type=range
                    min=${rankConsts.min}
                    max=${rankConsts.max}
                    value=${state.rank}
                    oninput=${(e: preact.TargetedEvent<HTMLInputElement>) => {
                        const newRank = +e.currentTarget.value;

                        dispatch({
                            type: "set_rank",
                            rank: newRank,
                        })
                    }}
                />
                <output>${state.rank}</output>
            </label>
        </div>
        <div class=${cls.talentLists}>
            <${MainList}
                classes=${{ 
                    label: cls.listLabel,
                    content: cls.listContent,
                }}
                label=Used 
                heroCode=${state.hero.code} 
                talents=${state.talents.used} 
                maxItems=${maxUsedTalents}
                onTalentClick=${(talent: Talent) => {
                    dispatch({
                        type: talent.preferred
                            ? "talent_from_used_to_preferred"
                            : "talent_from_used_to_available",
                        talent,
                    });
                }}
                onTalentHold=${(talent: TalentWithLockedFlag) => {
                    dispatch({
                        type: talent.preferred
                            ? "talent_from_used_to_preferred"
                            : "talent_from_used_to_available",
                        talent,
                    });
                }}
            />
            <${MainList} 
                classes=${{ 
                    label: cls.listLabel,
                    content: cls.listContent,
                }}
                label=Preferred 
                heroCode=${state.hero.code} 
                talents=${state.talents.preferred} 
                onTalentClick=${(talent: Talent) => {
                    dispatch({
                        type: "talent_from_preferred_to_used",
                        talent,
                    });
                }}
                onTalentAltClick=${(talent: Talent) => {
                    dispatch({
                        type: "talent_from_preferred_to_available",
                        talent,
                    });
                }}
                onTalentHold=${(talent: TalentWithLockedFlag) => {
                    dispatch({
                        type: "talent_from_preferred_to_available",
                        talent,
                    });
                }}
            />
            <${MainList} 
                classes=${{ 
                    label: cls.listLabel,
                    content: cls.listContent,
                }}
                label=Available 
                heroCode=${state.hero.code} 
                talents=${[
                    ...derivedTalentsState.available, 
                    ...derivedTalentsState.locked.map(markLocked),
                ]}
                onTalentClick=${(talent: TalentWithLockedFlag) => {
                    if (talent.locked) {
                        return;
                    }

                    dispatch({
                        type: "talent_from_available_to_used",
                        talent,
                    });
                }}
                onTalentAltClick=${(talent: TalentWithLockedFlag) => {
                    if (talent.locked) {
                        return;
                    }
                    
                    dispatch({
                        type: "talent_from_available_to_preferred",
                        talent,
                    });
                }}
                onTalentHold=${(talent: TalentWithLockedFlag) => {
                    if (talent.locked) {
                        return;
                    }
                    
                    dispatch({
                        type: "talent_from_available_to_preferred",
                        talent,
                    });
                }}
            />
        </div>
    `;
}
