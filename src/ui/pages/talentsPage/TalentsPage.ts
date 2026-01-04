import { html } from "htm/preact";

import { HeroCode } from "../../../data/heroes";
import { heroes } from "../../../finalData/finalData";
import { Talent } from "../../../scripts/extractTalents/types";
import { appStateStorage } from "../../utils/appStateStorage/appStateStorage";

import { HeroSelect } from "./components/HeroSelect";
import { MainList } from "./components/MainList";
import { maxUsedTalents } from "./consts/maxUsedTalents";
import { rankConsts } from "./consts/rankConsts";
import { useSaveStateToStorage } from "./hooks/useSaveStateToStorage";
import { useTalentsPageState } from "./hooks/useTalentsPageState";
import { defaultAppState } from "./utils/defaultAppState";
import { getDerivedTalentsState } from "./utils/getDerivedTalentsState";

// TODO: think about rewriting useTalentsPage to return function for actions, 
// not useReducer directly
// TODO: think about how to set up TS properly in state deserialization to make sure
// that TS doesnt give us any false confidence in what can be deserialized
// TODO: Add favicon (e.g. the feather but with RH (RunHelper) letters)

const initialState = appStateStorage.getCurrentHero() || defaultAppState;

export function TalentsPage() {
    const [state, dispatch] = useTalentsPageState(initialState);

    useSaveStateToStorage(state);

    const derivedTalentsState = getDerivedTalentsState(state);

    return html`
        <${HeroSelect}
            items=${heroes.asArray}
            value=${state.hero.code}
            onChange=${(code: HeroCode) => {
                dispatch({
                    type: "set_hero",
                    heroCode: code,
                });
            }}
        />
        <label class=container-label>
            Select Rank
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
        <!-- TODO rework this js style application later -->
        <div class=${`talent-lists ${derivedTalentsState.locked.length ? "" : "three-columns"}`}>
            <${MainList} 
                label=Used 
                heroCode=${state.hero.code} 
                talents=${state.talents.used} 
                maxItems=${maxUsedTalents}
                onTalentClick=${(talent: Talent) => {
                    dispatch({
                        type: "talent_from_used_to_available",
                        talent,
                    });
                }}
                onTalentAltClick=${(talent: Talent) => {
                    dispatch({
                        type: "talent_from_used_to_preferred",
                        talent,
                    });
                }}
            />
            <${MainList} 
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
            />
            <${MainList} 
                label=Available 
                heroCode=${state.hero.code} 
                talents=${derivedTalentsState.available} 
                onTalentClick=${(talent: Talent) => {
                    dispatch({
                        type: "talent_from_available_to_used",
                        talent,
                    });
                }}
                onTalentAltClick=${(talent: Talent) => {
                    dispatch({
                        type: "talent_from_available_to_preferred",
                        talent,
                    });
                }}
            />
            ${!!derivedTalentsState.locked.length &&
                html`
                    <hr/>
                    <${MainList}
                        label=Locked 
                        isLocked 
                        heroCode=${state.hero.code} 
                        talents=${derivedTalentsState.locked}
                    />
                `
            }
        </div>
    `;
}
