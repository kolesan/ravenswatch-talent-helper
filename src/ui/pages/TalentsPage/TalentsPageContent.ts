import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";

import { pages } from "../../../../pages";
import { Hero } from "../../../finalData/finalData";
import { hst } from "../../core/hst";

import { Builder } from "./components/Builder/Builder";
import { useTalentsBuilder } from "./components/Builder/useTalentsBuilder";
import { Compendium } from "./components/Compendium/Compendium";
import { Controls } from "./components/Controls/Controls";
import { TalentsPageView } from "./talentsPageViews";
import { compendiumStateStorage } from "./utils/compendiumStateStorage/compendiumStateStorage";
import { talentsBuilderStateStorage } from "./utils/talentsBuilderStateStorage/talentsBuilderStateStorage";

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

    // ================== LOCAL SHARED STATE ===========================
    const [localHero, setLocalHero] = useState(hero);
    // ===============================================================

    // ================== COMPENDIUM STATE ===========================
    const [compendiumRank, setCompendiumRank] = useState(() => {
        return compendiumStateStorage.get(localHero.code).rank;
    });
    // ===============================================================

    // ================== BUILDER STATE ===========================
    const talentsBuilder = useTalentsBuilder({
        getInitialState: () => {
            return talentsBuilderStateStorage.get(localHero)
        },
        onAction: (newState, actionType) => {
            if (actionType === "load_state") {
                // In all such cases currently we load the state from storage first,
                // so there's no point in saving it
                return;
            }
            talentsBuilderStateStorage.set(localHero.code, newState);
        },
        allHeroTalents: localHero.talents,
    });
    // ===============================================================


    const handleHeroChangeCompendium = (newHero: Hero) => {
        // ================== COMPENDIUM STATE ===========================
        // load new hero compendium state
        const storedCompendiumState = compendiumStateStorage.get(newHero.code);
        // set local compendium state to values from storage
        setCompendiumRank(storedCompendiumState.rank);
        // ===============================================================
    }
    const handleHeroChangeBuilder = (newHero: Hero) => {
        // ================== Builder STATE ===========================
        // load new hero Builder state
        const storedBuilderState = talentsBuilderStateStorage.get(newHero);
        // set local Builder state to values from storage
        talentsBuilder.loadState(storedBuilderState);
        // ===============================================================
    }
    const handleHeroChangeLocalState = (newHero: Hero) => {
        setLocalHero(newHero);
        handleHeroChangeCompendium(newHero);
        handleHeroChangeBuilder(newHero);
    }


    // in case hero change comes from the parent and we can see that local state
    // does not match we need to update local state
    // current known such cases:
    // * back and forward browser buttons
    // * some other direct change to url
    useEffect(() => {
        console.log("= TPC = Checking if hero change from parent is happening", {
            from: localHero.code, 
            to: hero.code
        });
        if (localHero.code !== hero.code) {
            console.log("= TPC = Hero change from parent detected ", {
                from: localHero.code, 
                to: hero.code
            });
            handleHeroChangeLocalState(hero);
        }
    }, [hero.code]);

    return html`
        <${Controls}
            hero=${localHero}
            view=${view}
            onHeroChange=${(newHero: Hero) => {
                handleHeroChangeLocalState(newHero);
                // adapt url to new hero
                hst.push(`${pages.talents.path}/${newHero.code}/${view}`);
            }}
            onViewChange=${(newView: TalentsPageView) => {
                // adapt url to new view
                hst.push(`${pages.talents.path}/${localHero.code}/${newView}`);
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
                hero=${localHero}
                rank=${compendiumRank}
                onRankChange=${(rank: number) => {
                    setCompendiumRank(rank);
                    compendiumStateStorage.set(localHero.code, { rank });
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
                hero=${localHero}
                talentsBuilder=${talentsBuilder}
            />
        `}
    `;
}
