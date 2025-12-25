import { html } from "htm/preact";
import { useState } from "preact/hooks";

import { HeroCode } from "../data/heroes";
import { Hero, heroes } from "../finalData/finalData";
import { Talent } from "../scripts/extractTalents/types";

import { MainList } from "./MainList";

export function App() {
    const [hero, setHero] = useState<Hero>(heroes.all.wukong);
    const [rank, setRank] = useState(3);

    console.log("App rendered", { hero: hero.code, rank });

    const [usedTalents, setUsedTalents] = useState<Talent[]>([]);
    const [preferredTalents, setPreferredTalents] = useState<Talent[]>([]);
    const [availableTalents, setAvailableTalents] = useState<Talent[]>(() => 
        hero.talents.filter(it => it.unlockedAtRank <= rank)
    );
    const [lockedTalents, setLockedTalents] = useState<Talent[]>(() => 
        hero.talents.filter(it => it.unlockedAtRank > rank)
    );

    console.log("App rendered", {
        availableTalents,
        lockedTalents,
    });

    return html`
        <label class=container-label>
            Select hero
            <select 
                value=${hero.code} 
                onChange=${(e: preact.TargetedEvent<HTMLSelectElement>) => {
                    const newCode = e.currentTarget.value as HeroCode;
                    const newHero = heroes.utils.findByCode(newCode);
                    setHero(newHero!);
                    setUsedTalents([]);
                    setPreferredTalents([]);
                    setAvailableTalents(newHero!.talents.filter(it => it.unlockedAtRank <= rank));
                    setLockedTalents(newHero!.talents.filter(it => it.unlockedAtRank > rank));
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
                    setRank(newRank);
                    setUsedTalents([]);
                    setPreferredTalents([]);
                    setAvailableTalents(hero.talents.filter(it => it.unlockedAtRank <= newRank));
                    setLockedTalents(hero.talents.filter(it => it.unlockedAtRank > newRank));
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
                    setAvailableTalents([...availableTalents, talent]);
                    setUsedTalents(usedTalents.filter(it => it !== talent));
                }}
                onTalentAltClick=${(talent: Talent) => {
                    setPreferredTalents([...preferredTalents, talent]);
                    setUsedTalents(usedTalents.filter(it => it !== talent));
                }}
            />
            <${MainList} 
                label=Preferred 
                heroCode=${hero.code} 
                talents=${preferredTalents} 
                onTalentClick=${(talent: Talent) => {
                    setUsedTalents([...usedTalents, talent]);
                    setPreferredTalents(preferredTalents.filter(it => it !== talent));
                }}
                onTalentAltClick=${(talent: Talent) => {
                    setAvailableTalents([...availableTalents, talent]);
                    setPreferredTalents(preferredTalents.filter(it => it !== talent));
                }}
            />
            <${MainList} 
                label=Available 
                heroCode=${hero.code} 
                talents=${availableTalents} 
                onTalentClick=${(talent: Talent) => {
                    setUsedTalents([...usedTalents, talent]);
                    setAvailableTalents(availableTalents.filter(it => it !== talent));
                }}
                onTalentAltClick=${(talent: Talent) => {
                    setPreferredTalents([...preferredTalents, talent]);
                    setAvailableTalents(availableTalents.filter(it => it !== talent));
                }}
            />
            <hr/>
            <${MainList} 
                label=Locked 
                isLocked 
                heroCode=${hero.code} 
                talents=${lockedTalents}
            />
        </div>
    `;
}
