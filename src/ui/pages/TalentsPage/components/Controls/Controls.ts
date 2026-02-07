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
    rank: number;
    view: TalentsPageView;
    onHeroChange: (hero: Hero) => void;
    onRankChange: (rank: number) => void;
    onViewChange: (view: TalentsPageView) => void;
}

export function Controls({
    hero,
    rank,
    view,
    onHeroChange,
    onRankChange,
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
