import { html } from "htm/preact";
import { useState } from "preact/hooks";

import { HeroCode } from "../data/heroes";
import { heroes } from "../finalData/finalData";
import { Talent } from "../scripts/extractTalents/types";

import { appStateStorage } from "./core/AppStateStorage";
import { MainList } from "./MainList";
import { calculateFullTalentsState } from "./utils/calculateFullTalentsState";
import { defaultAppState } from "./utils/defaultAppState";
import { isNotLocked } from "./utils/isNotLocked";

// TODO: Rewrite state using useReducer
// TODO: Think about saving state in one place not in every change callback
// separately, to protect against forgetting to add saving to some new action cb
// TODO: Save state to storage separately per hero
// * dl hero icons from main website
// * think about using hero art as bg somewhere in the app

const initialState = appStateStorage.get() || defaultAppState;

export function App() {
    const [hero, setHero] = useState(initialState.hero);
    const [rank, setRank] = useState(initialState.rank);
    const [usedTalents, setUsedTalents] = useState(initialState.talents.used);
    const [preferredTalents, setPreferredTalents] = useState(initialState.talents.preferred);

    const localTalents = calculateFullTalentsState({
        hero,
        rank,
        talents: {
            used: usedTalents,
            preferred: preferredTalents,
        }
    });

    return html`
        <label class=container-label>
            Select hero
            <select 
                value=${hero.code} 
                onChange=${(e: preact.TargetedEvent<HTMLSelectElement>) => {
                    const newCode = e.currentTarget.value as HeroCode;
                    const newHero = heroes.utils.findByCode(newCode)!;

                    setHero(newHero);
                    setUsedTalents([]);
                    setPreferredTalents([]);

                    appStateStorage.set({
                        hero: newHero,
                        rank,
                        talents: {
                            used: [],
                            preferred: [],
                        }
                    })
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
                min=1
                max=9
                value=${rank}
                oninput=${(e: preact.TargetedEvent<HTMLInputElement>) => {
                    const newRank = +e.currentTarget.value;
                    const newUsedTalents = usedTalents.filter(isNotLocked(newRank));
                    const newPreferredTalents = preferredTalents.filter(isNotLocked(newRank));

                    setRank(newRank);
                    setUsedTalents(newUsedTalents);
                    setPreferredTalents(preferredTalents.filter(isNotLocked(newRank)));

                    appStateStorage.set({
                        hero,
                        rank: newRank,
                        talents: {
                            used: newUsedTalents,
                            preferred: newPreferredTalents,
                        }
                    })
                }}
            />
            <output>${rank}</output>
        </label>
        <div class=talent-lists>
            <${MainList} 
                label=Used 
                heroCode=${hero.code} 
                talents=${usedTalents} 
                onTalentClick=${(talent: Talent) => {
                    const newUsedTalents = usedTalents.filter(it => it !== talent);

                    setUsedTalents(newUsedTalents);

                    appStateStorage.set({
                        hero,
                        rank,
                        talents: {
                            used: newUsedTalents,
                            preferred: preferredTalents,
                        }
                    });
                }}
                onTalentAltClick=${(talent: Talent) => {
                    const newPreferredTalents = [...preferredTalents, talent];
                    const newUsedTalents = usedTalents.filter(it => it !== talent);

                    setPreferredTalents(newPreferredTalents);
                    setUsedTalents(newUsedTalents);

                    appStateStorage.set({
                        hero,
                        rank,
                        talents: {
                            used: newUsedTalents,
                            preferred: newPreferredTalents,
                        }
                    });
                }}
            />
            <${MainList} 
                label=Preferred 
                heroCode=${hero.code} 
                talents=${preferredTalents} 
                onTalentClick=${(talent: Talent) => {
                    const newUsedTalents = [...usedTalents, talent];
                    const newPreferredTalents = preferredTalents.filter(it => it !== talent);

                    setUsedTalents(newUsedTalents);
                    setPreferredTalents(newPreferredTalents);

                    appStateStorage.set({
                        hero,
                        rank,
                        talents: {
                            used: newUsedTalents,
                            preferred: newPreferredTalents,
                        }
                    });
                }}
                onTalentAltClick=${(talent: Talent) => {
                    const newPreferredTalents = preferredTalents.filter(it => it !== talent);

                    setPreferredTalents(newPreferredTalents);

                    appStateStorage.set({
                        hero,
                        rank,
                        talents: {
                            used: usedTalents,
                            preferred: newPreferredTalents,
                        }
                    });
                }}
            />
            <${MainList} 
                label=Available 
                heroCode=${hero.code} 
                talents=${localTalents.available} 
                onTalentClick=${(talent: Talent) => {
                    const newUsedTalents = [...usedTalents, talent];

                    setUsedTalents(newUsedTalents);

                    appStateStorage.set({
                        hero,
                        rank,
                        talents: {
                            used: newUsedTalents,
                            preferred: preferredTalents,
                        }
                    });
                }}
                onTalentAltClick=${(talent: Talent) => {
                    const newPreferredTalents = [...preferredTalents, talent];

                    setPreferredTalents(newPreferredTalents);

                    appStateStorage.set({
                        hero,
                        rank,
                        talents: {
                            used: usedTalents,
                            preferred: newPreferredTalents,
                        }
                    });
                }}
            />
            <hr/>
            <${MainList} 
                label=Locked 
                isLocked 
                heroCode=${hero.code} 
                talents=${localTalents.locked}
            />
        </div>
    `;
}
