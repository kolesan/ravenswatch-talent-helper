import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";

import { pages } from "../../../../pages";
import { Hero } from "../../../finalData/finalData";
import { hst } from "../../core/hst";

import { Builder } from "./components/Builder/Builder";
import { Compendium } from "./components/Compendium/Compendium";
import { Controls } from "./components/Controls/Controls";
import { TalentsPageView } from "./talentsPageViews";
import { compendiumStateStorage } from "./utils/compendiumStateStorage/compendiumStateStorage";

import cls from "./TalentsPageContent.module.css";

type Props = {
    hero: Hero;
    view: TalentsPageView;
}

export function TalentsPageContent({
    hero,
    view,
}: Props) {
    console.log("= TPC RENDERING =", {
        hero: hero.code,
        view
    });


    // ================== COMPENDIUM STATE ===========================
    // init local compendium state
    const [compendiumHero, setCompendiumHero] = useState(hero);
    const [compendiumRank, setCompendiumRank] = useState(() => {
        return compendiumStateStorage.get(hero.code).rank;
    });
    // ===============================================================


    const doCompendiumHeroChange = (newHero: Hero) => {
        // ================== COMPENDIUM STATE ===========================
        // load new hero compendium state
        const storedCompendiumState = compendiumStateStorage.get(newHero.code);
        // set local compendium state to values from storage
        setCompendiumRank(storedCompendiumState.rank);
        setCompendiumHero(newHero);
        // ===============================================================
    }

    // in case hero change comes from the parent we need to update local state
    // current known such cases:
    // * back and forward buttons
    // * some other direct change to url that we will catch
    useEffect(() => {
        if (hero.code !== compendiumHero.code) {
            doCompendiumHeroChange(hero);
        }
    }, [hero.code]);

    return html`
        <${Controls}
            hero=${hero}
            view=${view}
            onHeroChange=${(newHero: Hero) => {
                doCompendiumHeroChange(newHero);
                // adapt url to new hero
                hst.push(`${pages.talents.path}/${newHero.code}/${view}`);
            }}
            onViewChange=${(view: TalentsPageView) => {
                // adapt url to new view
                hst.push(`${pages.talents.path}/${hero.code}/${view}`);
            }}
        />
        ${view === "compendium" && html`
            <${Compendium} 
                classes=${{
                    list: {
                        label: cls.listLabel,
                        content: cls.listContent,
                    }
                }}
                hero=${compendiumHero}
                rank=${compendiumRank}
                onRankChange=${(rank: number) => {
                    setCompendiumRank(rank);
                    compendiumStateStorage.set(compendiumHero.code, { rank });
                }}
            />
        `}
        ${view === "builder" && html`
            <${Builder} 
                classes=${{
                    list: {
                        label: cls.listLabel,
                        content: cls.listContent,
                    }
                }}
                hero=${hero}
            />
        `}
    `;
}
