import { html } from "htm/preact";

import { HeroCode } from "../../../data/heroes";
import { heroes } from "../../../finalData/finalData";
import { Talent } from "../../../scripts/extractTalents/types";
import { appStateStorage } from "../../core/AppStateStorage";

import { maxUsedTalents } from "./consts/maxUsedTalents";
import { rankConsts } from "./consts/rankConsts";
import { useSaveStateToStorage } from "./hooks/useSaveStateToStorage";
import { useTalentsPageState } from "./hooks/useTalentsPageState";
import { MainList } from "./MainList";
import { calculateFullTalentsState } from "./utils/calculateFullTalentsState";
import { defaultAppState } from "./utils/defaultAppState";

// TODO: think about rewriting useTalentsPage to return function for actions, 
// not useReducer directly
// TODO: Save state to storage separately per hero

const initialState = appStateStorage.get() || defaultAppState;

export function TalentsPage() {
    const [state, dispatch] = useTalentsPageState(initialState);

    useSaveStateToStorage(state);

    // TODO probably need to move this to the state reducer
    // also consider that we do not need to save this to the storage
    const localTalents = calculateFullTalentsState({
        hero: state.hero,
        rank: state.rank,
        talents: {
            used: state.talents.used,
            preferred: state.talents.preferred,
        }
    });

    return html`
        <label class=container-label>
            Select hero
            <select 
                value=${state.hero.code} 
                onChange=${(e: preact.TargetedEvent<HTMLSelectElement>) => {
                    const newCode = e.currentTarget.value as HeroCode;
                    // TODO: think about this "!""
                    const newHero = heroes.utils.findByCode(newCode)!;

                    dispatch({ 
                        type: "set_hero", 
                        hero: newHero 
                    });
                }}
            >
                ${heroes.asArray.map(hero => html`
                    <option 
                        key=${hero.code}
                        value=${hero.code}
                    >
                        ${hero.name}
                    </option>
                `)}
            </select>
        </label>
        <label class=container-label>
            Select Hero rank
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
        <div class=talent-lists>
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
                talents=${localTalents.available} 
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
            <hr/>
            <${MainList} 
                label=Locked 
                isLocked 
                heroCode=${state.hero.code} 
                talents=${localTalents.locked}
            />
        </div>
    `;
}
