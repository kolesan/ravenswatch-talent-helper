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
    console.log("============ TPC rendering ============", { 
        hero: hero.code, 
        view 
    });

    // load rank and talents state of the hero
    const storedState = useMemo(() => {
        const storedHero = heroStateStorage.get(hero);
        console.log(`TPC Loading "${hero.code}" hero state`, storedHero);
        return storedHero;
    }, [hero.code]);

    // create local state for rank and talents
    // using stored state as initial state
    const [rank, setRank] = useState(storedState.rank);
    const builder = useBuilder(storedState.builderState);

    // ensure local rank and talent state is correct after hero change
    useEffect(() => {
        console.log("TPC Hero code change detected, setting rank and builder state", storedState);
        setRank(storedState.rank);
        builder.loadState(storedState.builderState);
    }, [hero.code]);

    // save any local state changes to storage
    useEffect(() => {
        console.log("TPC Hero state change detected, saving to storage", hero.code, {
            rank,
            builderState: builder.state,
        });
        heroStateStorage.set(hero.code, {
            rank,
            builderState: builder.state,
        });
    }, [rank, builder.state]);

    return html`
        <${Controls}
            hero=${hero}
            rank=${rank}
            view=${view}
            onHeroChange=${(hero: Hero) => {
                hst.push(`${pages.talents.path}/${hero.code}/${view}`);
            }}
            onRankChange=${(rank: number) => {
                setRank(rank);
                builder.applyRank(rank);
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
                heroRank=${rank}
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
                heroRank=${rank}
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
