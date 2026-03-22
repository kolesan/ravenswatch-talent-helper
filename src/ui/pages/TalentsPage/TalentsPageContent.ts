import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";

import { Hero } from "../../uiData/types";

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
    const [localViewState, setLocalViewState] = useState(view);
    const talentsBuilder = useTalentsBuilder({ initialHero: hero });
    const talentsCompendium = useTalentsCompendium({ initialHero: hero });

    const reloadContents = (view: TalentsPageView, hero: Hero) => {
        if (view === "builder") {
            talentsBuilder.actions.loadHero(hero);
        } else {
            talentsCompendium.actions.loadHero(hero);
        }
    }

    // Needed for direct url change (e.g. back and forward browser buttons)
    useEffect(() => {
        reloadContents(view, hero);
        setLocalViewState(view);
    }, [hero.code, view]);

    const { 
        hero: localHero, 
        rank: localRank
    } = localViewState === "builder" ? talentsBuilder : talentsCompendium;

    return html`
        <${Controls}
            hero=${localHero}
            view=${localViewState}
            rank=${localRank}
            onHeroChange=${(newHero: Hero) => {
                reloadContents(localViewState, newHero);
                onHeroChange(newHero);
            }}
            onViewChange=${(newView: TalentsPageView) => {
                reloadContents(newView, localHero);
                setLocalViewState(newView);
                onViewChange(newView);
            }}
            onRankChange=${(newRank: number) => {
                if (localViewState === "builder") {
                    talentsBuilder.actions.applyRank(newRank);
                } else {
                    talentsCompendium.actions.applyRank(newRank);
                }
            }}
        />
        ${localViewState === "builder" && html`
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
        ${localViewState === "compendium" && html`
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
