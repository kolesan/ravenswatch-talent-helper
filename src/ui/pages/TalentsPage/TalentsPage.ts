import { html } from "htm/preact";
import { useState } from "preact/hooks";

import { pages } from "../../../../pages";
import { Hero } from "../../../finalData/finalData";
import { hst } from "../../core/hst";
import { useAfterMountEffect } from "../../hooks/useAfterMountEffect";
import { usePageTitle } from "../../hooks/usePageTitle";

import { Builder } from "./components/Builder/Builder";
import { useBuilder } from "./components/Builder/useBuilder";
import { Compendium } from "./components/Compendium/Compendium";
import { Controls } from "./components/Controls/Controls";
import { useHandleUrl } from "./hooks/useHandleUrl";
import { useStoredTalentsPageState } from "./hooks/useStoredTalentsPageState";
import { useStoreTalentsPageState } from "./hooks/useStoreTalentsPageState";
import { useTalentsPagePathParams } from "./hooks/useTalentsPagePathParams";
import { TalentsPageView } from "./talentsPageViews";
import { calculatePageTitle } from "./utils/calculatePageTitle";

import cls from "./TalentsPage.module.css";

export function TalentsPage() {
    const { hero, view } = useTalentsPagePathParams();

    usePageTitle(calculatePageTitle(hero, view));

    const storedState = useStoredTalentsPageState(hero?.code);

    const [rank, setRank] = useState(storedState.rank);

    const builder = useBuilder(storedState.builderState);

    // TODO this effect feels wrong investigate a proper way to 
    // react to url change
    // potential solution is to just do these in the event handler
    // where hero and rank change
    useAfterMountEffect(() => {
        setRank(storedState.rank);
        builder.loadState(storedState.builderState);
    }, [hero?.code]);
    useAfterMountEffect(() => {
        builder.applyRank(rank);
    }, [rank])
    

    useHandleUrl({
        url: {
            heroCode: hero?.code,
            view,
        },
        state: {
            heroCode: storedState.heroCode,
            view: storedState.view,
        },
        updateUrl: ({ heroCode, view }) => {
            hst.replace(`${pages.talents.path}/${heroCode}/${view}`);
        }
    });

    useStoreTalentsPageState({
        heroCode: hero?.code || storedState.heroCode,
        view: view || storedState.view,
        rank,
        builderState: builder.state,
    });

    if (!hero || !view) {
        return null;
    }

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
