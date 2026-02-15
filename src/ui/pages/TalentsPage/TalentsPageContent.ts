import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";

import { Hero } from "../../../finalData/finalData";

import { Builder } from "./components/Builder/Builder";
import { Compendium } from "./components/Compendium/Compendium";
import { Controls } from "./components/Controls/Controls";
import { useTalentsBuilder } from "./hooks/useTalentsBuilder/useTalentsBuilder";
import { useTalentsCompendium } from "./hooks/useTalentsCompendium/useTalentsCompendium";
import { TalentsPageView } from "./talentsPageViews";

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

    const talentsBuilder = useTalentsBuilder({ initialHero: hero });

    const talentsCompendium = useTalentsCompendium({ initialHero: hero });

    const reloadBuilderOrCompendiumIfNeeded = (view: TalentsPageView, hero: Hero) => {
        if (view === "builder") {
            if (talentsBuilder.hero.code !== hero.code) {
                talentsBuilder.loadHero(hero);
            }
        } else {
            if (talentsCompendium.hero.code !== hero.code) {
                talentsCompendium.loadHero(hero);
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
