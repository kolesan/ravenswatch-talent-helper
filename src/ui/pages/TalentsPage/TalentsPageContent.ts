import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";

import { Hero } from "../../../finalData/finalData";

import { Controls } from "./components/Controls/Controls";
import { TalentsBuilder } from "./components/TalentsBuilder/TalentsBuilder";
import { TalentsCompendium } from "./components/TalentsCompendium/TalentsCompendium";
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
    const [localView, setLocalView] = useState(view);
    const talentsBuilder = useTalentsBuilder({ initialHero: hero });
    const talentsCompendium = useTalentsCompendium({ initialHero: hero });

    const reloadViewContents = (view: TalentsPageView, hero: Hero) => {
        if (view === "builder") {
            talentsBuilder.actions.loadHero(hero);
        } else {
            talentsCompendium.actions.loadHero(hero);
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
                    talentsBuilder.actions.applyRank(newRank);
                } else {
                    talentsCompendium.actions.applyRank(newRank);
                }
            }}
        />
        ${localView === "builder" && html`
            <${TalentsBuilder} 
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
            <${TalentsCompendium} 
                classes=${{
                    list: {
                        root: cls.listRoot,
                        label: cls.listLabel,
                        content: cls.listContent,
                    }
                }}
                talentsCompendium=${talentsCompendium}
            />
        `}
    `;
}
