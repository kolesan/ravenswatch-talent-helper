import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";

import { Hero } from "../../../finalData/finalData";

import { Builder } from "./components/Builder/Builder";
import { useTalentsBuilder } from "./components/Builder/useTalentsBuilder";
import { Compendium } from "./components/Compendium/Compendium";
import { useTalentsCompendium } from "./components/Compendium/useTalentsCompendium";
import { Controls } from "./components/Controls/Controls";
import { TalentsPageView } from "./talentsPageViews";
import { compendiumStateStorage } from "./utils/compendiumStateStorage/compendiumStateStorage";
import { talentsBuilderStateStorage } from "./utils/talentsBuilderStateStorage/talentsBuilderStateStorage";

import cls from "./TalentsPageContent.module.css";

type Props = {
    hero: Hero;
    view: TalentsPageView;
    onHeroChange: (hero: Hero) => void;
    onViewChange: (view: TalentsPageView) => void;
}

export function TalentsPageContent({
    hero,
    view,
    onHeroChange,
    onViewChange,
}: Props) {
    console.log("= TPC RENDERING =", {
        hero: hero.code,
        view
    });

    const [localHero, setLocalHero] = useState(hero);
    const [localView, setLocalView] = useState(view);

    const talentsBuilder = useTalentsBuilder({
        getInitialState: () => {
            return talentsBuilderStateStorage.get(localHero)
        },
        onAction: (newState, actionType) => {
            if (actionType === "load_state") { // Always loaded from storage
                return;
            }
            talentsBuilderStateStorage.set(localHero.code, newState);
        },
        allHeroTalents: localHero.talents,
    });

    const talentsCompendium = useTalentsCompendium({
        getInitialState: () => {
            return compendiumStateStorage.get(localHero.code);
        },
        onAction: (newState, actionType) => {
            if (actionType === "load_state") { // Always loaded from storage
                return;
            }
            compendiumStateStorage.set(localHero.code, newState);
        },
        allHeroTalents: localHero.talents,
    });

    const loadLocalStateFromStorage = (view: TalentsPageView, hero: Hero) => {
        if (view === "builder") {
            talentsBuilder.loadState(talentsBuilderStateStorage.get(hero));
        } else {
            talentsCompendium.loadState(compendiumStateStorage.get(hero.code));
        }
    };

    // Current known cases where this effect is necessary:
    // * direct url change (e.g. back and forward browser buttons)
    useEffect(() => {
        const heroChanged = localHero.code !== hero.code;
        const viewChanged = localView !== view;

        console.log("= TPC = Checking if hero change from parent is happening", { 
            from: localHero.code, 
            to: hero.code 
        }, heroChanged);
        console.log("= TPC = Checking if view change from parent is happening", { 
            from: localView, 
            to: view 
        }, viewChanged);

        if (heroChanged || viewChanged) {
            loadLocalStateFromStorage(view, hero);
        }
        if (heroChanged) {
            setLocalHero(hero);
        }
        if (viewChanged) {
            setLocalView(view);
        }
    }, [hero.code, view]);

    return html`
        <${Controls}
            hero=${localHero}
            view=${localView}
            rank=${localView === "builder" 
                ? talentsBuilder.rank 
                : talentsCompendium.rank
            }
            onHeroChange=${(newHero: Hero) => {
                loadLocalStateFromStorage(localView, newHero);
                setLocalHero(newHero);
                onHeroChange(newHero);
            }}
            onViewChange=${(newView: TalentsPageView) => {
                loadLocalStateFromStorage(newView, localHero);
                setLocalView(newView);
                onViewChange(newView);
            }}
            onRankChange=${(newRank: number) => {
                if (localView === "builder") {
                    talentsBuilder.applyRank(newRank);
                } else {
                    talentsCompendium.applyRank(newRank);
                }
            }}
        />
        ${localView === "builder" && html`
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
        ${localView === "compendium" && html`
            <${Compendium} 
                classes=${{
                    list: {
                        label: cls.listLabel,
                        content: cls.listContent,
                    }
                }}
                hero=${localHero}
                talentsCompendium=${talentsCompendium}
            />
        `}
    `;
}
