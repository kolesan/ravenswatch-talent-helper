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

    const [localView, setLocalView] = useState(view);

    const talentsBuilder = useTalentsBuilder({
        getInitialState: () => {
            return {
                hero, 
                ...talentsBuilderStateStorage.get(hero),
            };
        },
        onAction: (newState, actionType) => {
            if (actionType === "load_state") { // Always loaded from storage
                return;
            }
            talentsBuilderStateStorage.set(newState.hero.code, {
                rank: newState.rank,
                builderState: newState.builderState,
            });
        },
    });

    const talentsCompendium = useTalentsCompendium({
        getInitialState: () => {
            return {
                hero, 
                ...compendiumStateStorage.get(hero.code),
            };
        },
        onAction: (newState, actionType) => {
            if (actionType === "load_state") { // Always loaded from storage
                return;
            }
            compendiumStateStorage.set(newState.hero.code, {
                rank: newState.rank,
            });
        },
    });

    const reloadBuilderOrCompendiumIfNeeded = (view: TalentsPageView, hero: Hero) => {
        if (view === "builder") {
            if (talentsBuilder.hero.code !== hero.code) {
                talentsBuilder.loadState({
                    hero,
                    ...talentsBuilderStateStorage.get(hero),
                });
            }
        } else {
            if (talentsCompendium.hero.code !== hero.code) {
                talentsCompendium.loadState({
                    hero,
                    ...compendiumStateStorage.get(hero.code),
                });
            }
        }
    }

    // Current known cases where this effect is necessary:
    // * direct url change (e.g. back and forward browser buttons)
    useEffect(() => {
        reloadBuilderOrCompendiumIfNeeded(view, hero);
        setLocalView(view); // will not do anything if same value
    }, [hero.code, view]);

    const { 
        hero: localHero, 
        rank: localRank
    } = localView === "builder" ? talentsBuilder : talentsCompendium;

    return html`
        <${Controls}
            hero=${localHero}
            view=${localView}
            rank=${localRank}
            onHeroChange=${(newHero: Hero) => {
                reloadBuilderOrCompendiumIfNeeded(localView, newHero);
                onHeroChange(newHero);
            }}
            onViewChange=${(newView: TalentsPageView) => {
                reloadBuilderOrCompendiumIfNeeded(newView, localHero);
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
                talentsCompendium=${talentsCompendium}
            />
        `}
    `;
}
