import { clsx } from "clsx";
import { html } from "htm/preact";

import { Hero, heroes } from "../../../../../finalData/finalData";
import { useIsStickyElemStuck } from "../../../../hooks/useIsStickyElemStuck";
import { TalentsPageView } from "../../talentsPageViews";

import { HeroSelect } from "./components/HeroSelect/HeroSelect";
import { RankSlider } from "./components/RankSlider/RankSlider";
import { TalentsViewSwitch } from "./components/TalentsViewSwitch/TalentsViewSwitch";

import cls from "./Controls.module.css";

type Props = {
    hero: Hero;
    onHeroChange: (hero: Hero) => void;
    rank: number;
    onRankChange: (rank: number) => void;
    view: TalentsPageView;
    onViewChange: (view: TalentsPageView) => void;
}

export function Controls({
    hero,
    onHeroChange,
    rank,
    onRankChange,
    view,
    onViewChange,
}: Props) {
    const {
        stickyElemRef,
        isStuck: controlsStuck
    } = useIsStickyElemStuck({
        stuckAtPx: 56,
    });

    return html`
        <div 
            class=${clsx({
                [cls.controlsRoot]: true,
                [cls.controlsStuck]: controlsStuck
            })}
            ref=${stickyElemRef}
        >
            <div class=${cls.nonWrapableControls}>
                <${HeroSelect}
                    classes=${{
                        portraitContainer: cls.heroSelectPortrait
                    }}
                    items=${heroes.asArray}
                    value=${hero}
                    onChange=${(newHero: Hero) => {
                        if (newHero.code !== hero.code) {
                            onHeroChange(newHero);
                        }
                    }}
                />
                <${RankSlider}
                    value=${rank}
                    onChange=${(newRank: number) => {
                        if (newRank !== rank) {
                            onRankChange(newRank);
                        }
                    }}
                />
            </div>
            <${TalentsViewSwitch}
                view=${view}
                onSwitch=${(newView: TalentsPageView) => {
                    if (newView !== view) {
                        onViewChange(newView);
                    }
                }}
            />
        </div>
    `;
}
