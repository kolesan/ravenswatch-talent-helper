import { html } from "htm/preact";
import { useEffect, useMemo, useState } from "preact/hooks";

import { pages } from "../../../../pages";
import { Hero } from "../../../finalData/finalData";
import { hst } from "../../core/hst";

import { Builder } from "./components/Builder/Builder";
import { useBuilder } from "./components/Builder/useBuilder";
import { Compendium } from "./components/Compendium/Compendium";
import { Controls } from "./components/Controls/Controls";
import { TalentsPageView } from "./talentsPageViews";
import { compendiumStateStorage } from "./utils/compendiumStateStorage/compendiumStateStorage";
import { heroStateStorage } from "./utils/heroStateStorage/heroStateStorage";

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

    // load builder state of the hero
    const storedState = useMemo(() => {
        const storedHero = heroStateStorage.get(hero);
        console.log(`= TPC = Loading builder "${hero.code}" hero state`, storedHero);
        return storedHero;
    }, [hero.code]);
    // load compendium state of the hero
    const storedCompendiumState = useMemo(() => {
        const storedHero = compendiumStateStorage.get(hero.code);
        console.log(`= TPC = Loading compendium "${hero.code}" hero state`, storedHero);
        return storedHero;
    }, [hero.code]);

    // create local state for rank and talents
    // using stored state as initial state
    const [builderRank, setBuilderRank] = useState(storedState.rank);
    const [compendiumRank, setCompendiumRank] = useState(storedCompendiumState.rank);
    const builder = useBuilder(storedState.builderState);

    // ensure local rank and talent state is correct after hero change
    useEffect(() => {
        console.log("= TPC = Hero code change detected, setting rank and builder state", 
            storedState
        );
        setBuilderRank(storedState.rank);
        builder.loadState(storedState.builderState);
        setCompendiumRank(storedCompendiumState.rank);
    }, [hero.code]);

    // save any local state changes to storage
    useEffect(() => {
        console.log("= TPC = Builder Hero state change detected, saving to storage", {
            hero: hero.code,
            view,
            builderRank,
            builderState: builder.state,
        });
        heroStateStorage.set(hero.code, {
            rank: builderRank,
            builderState: builder.state,
        });
    }, [builderRank, builder.state]);

    useEffect(() => {
        console.log("= TPC = compendiumRank state change detected, saving to storage", {
            hero: hero.code,
            compendiumRank,
        });
        compendiumStateStorage.set(hero.code, {
            rank: compendiumRank,
        });
    }, [compendiumRank]);

    return html`
        <${Controls}
            hero=${hero}
            rank=${view === "builder" ? builderRank : compendiumRank}
            view=${view}
            onHeroChange=${(hero: Hero) => {
                hst.push(`${pages.talents.path}/${hero.code}/${view}`);
            }}
            onRankChange=${(rank: number) => {
                if (view === "builder") {
                    setBuilderRank(rank);
                    builder.applyRank(rank);
                } else {
                    setCompendiumRank(rank);
                }
            }}
            onViewChange=${(view: TalentsPageView) => {
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
                heroCode=${hero.code}
                heroRank=${compendiumRank}
                talents=${hero.talents}
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
                heroCode=${hero.code}
                heroTalents=${hero.talents}
                heroRank=${builderRank}
                state=${builder.state}
                onClearUsed=${builder.clearUsed}
                onClearPreferred=${builder.clearPreferred}
                onRemoveFromUsed=${builder.removeFromUsed}
                onPreferredToUsed=${builder.preferredToUsed}
                onPreferredToAvailable=${builder.preferredToAvailable}
                onAvailabelToUsed=${builder.availabelToUsed}
                onAvailableToPreferred=${builder.availableToPreferred}
            />
        `}
    `;
}
