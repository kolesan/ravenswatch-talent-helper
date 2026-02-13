import { clsx } from "clsx";
import { html } from "htm/preact";
import { createPortal } from "preact/compat";
import { useEffect, useMemo, useState } from "preact/hooks";

import { Hero } from "../../../../../finalData/finalData";
import { compendiumStateStorage } from "../../utils/compendiumStateStorage/compendiumStateStorage";
import { RankSlider } from "../Controls/components/RankSlider/RankSlider";
import { rankSliderPortalContainerId } from "../Controls/constants";
import { MainList } from "../MainList/MainList";

import { getDerivedTalentsState } from "./utils/getDerivedTalentsState";

import cls from "./Compendium.module.css";

type Props = {
    className?: string;
    classes?: {
        list?: {
            label?: string;
            content?: string;
        }
    }
    hero: Hero;
}

export function Compendium({
    className,
    classes,
    hero,
}: Props) {
    console.log("=== Compendium rendering ===", { 
        hero: hero.code
    });

    // load compendium state of the hero
    const storedState = useMemo(() => {
        const storedHero = compendiumStateStorage.get(hero.code);
        console.log(`= Compendium = Loading compendium "${hero.code}" hero state`, storedHero);
        return storedHero;
    }, [hero.code]);

    const [rank, setRank] = useState(storedState.rank);

    // ensure local rank and talent state is correct after hero change
    useEffect(() => {
        console.log("= Compendium = Hero code change detected, setting rank state", 
            storedState
        );
        setRank(storedState.rank);
    }, [hero.code]);
    
    // save local rank state to storage on change
    useEffect(() => {
        console.log("= Compendium = rank state change detected, saving to storage", {
            hero: hero.code,
            rank,
        });
        compendiumStateStorage.set(hero.code, { rank });
    }, [rank]);

    const rankSliderPortalContainer = document
        .getElementById(rankSliderPortalContainerId);

    const {
        starting,
        standard,
        final,
    } = getDerivedTalentsState(rank, hero.talents);

    return html`
        ${rankSliderPortalContainer && createPortal(html`
            <${RankSlider}
                value=${rank}
                onChange=${setRank}
            />
        `, rankSliderPortalContainer)}
        <div class=${clsx(cls.root, className)}>
            <${MainList}
                classes=${{ 
                    label: classes?.list?.label,
                    content: classes?.list?.content,
                }}
                disableHover
                showRanks
                label=Starting 
                heroCode=${hero.code} 
                talents=${starting}
            />
            <${MainList} 
                classes=${{ 
                    label: classes?.list?.label,
                    content: classes?.list?.content,
                }}
                disableHover
                showRanks
                label=Standard 
                heroCode=${hero.code} 
                talents=${standard} 
            />
            <${MainList} 
                classes=${{ 
                    label: classes?.list?.label,
                    content: classes?.list?.content,
                }}
                disableHover
                showRanks
                label=Final 
                heroCode=${hero.code} 
                talents=${final}
            />
        </div>
    `;
}
