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

    const reloadViewContents = (view: TalentsPageView, hero: Hero) => {
        if (view === "builder") {
            talentsBuilder.loadHero(hero);
        } else {
            talentsCompendium.loadHero(hero);
        }
    }

    // Needed for direct url change (e.g. back and forward browser buttons)
    useEffect(() => {
        reloadViewContents(view, hero);
        setLocalView(view);
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
                reloadViewContents(localView, newHero);
                onHeroChange(newHero);
            }}
            onViewChange=${(newView: TalentsPageView) => {
                reloadViewContents(newView, localHero);
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
                        root: cls.listRoot,
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
