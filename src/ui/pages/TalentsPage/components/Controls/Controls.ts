import { clsx } from "clsx";
import { html } from "htm/preact";

import { Hero, heroes } from "../../../../../finalData/finalData";
import { useIsStickyElemStuck } from "../../../../hooks/useIsStickyElemStuck";
import { TalentsPageView } from "../../talentsPageViews";

import { HeroSelect } from "./components/HeroSelect/HeroSelect";
import { TalentsViewSwitch } from "./components/TalentsViewSwitch/TalentsViewSwitch";
import { rankSliderPortalContainerId } from "./constants";

import cls from "./Controls.module.css";

type Props = {
    hero: Hero;
    view: TalentsPageView;
    onHeroChange: (hero: Hero) => void;
    onViewChange: (view: TalentsPageView) => void;
}

export function Controls({
    hero,
    view,
    onHeroChange,
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
                <div 
                    class=${cls.sliderContainer} 
                    id=${rankSliderPortalContainerId}
                >               
                </div>
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
