import { html } from "htm/preact";
import { createPortal } from "preact/compat";

import { Hero } from "../../../../../finalData/finalData";
import { ListLabelRight } from "../../../../components/ListLabelRight/ListLabelRight";
import { useBooleanState } from "../../../../hooks/useBooleanState";
import { maxUsedTalents } from "../../consts/maxUsedTalents";
import { RankSlider } from "../Controls/components/RankSlider/RankSlider";
import { rankSliderPortalContainerId } from "../Controls/constants";
import { MainList } from "../MainList/MainList";

import { TalentsBuilder } from "./types";

import cls from "./Builder.module.css";

type Props = {
    classes?: {
        list?: {
            label?: string;
            content?: string;
        }
    }
    hero: Hero;
    talentsBuilder: TalentsBuilder;
}

export function Builder({
    classes,
    hero,
    talentsBuilder,
}: Props) {
    console.log("=== Builder rendering ===", { hero: hero.code });

    const usedLabelScrollingAgain = useBooleanState(false);
    const preferredLabelScrollingAgain = useBooleanState(false);

    const rankSliderPortalContainer = document
        .getElementById(rankSliderPortalContainerId);

    return html`
        ${rankSliderPortalContainer && createPortal(html`
            <${RankSlider}
                value=${talentsBuilder.rank}
                onChange=${talentsBuilder.setRank}
            />
        `, rankSliderPortalContainer)}
        <div class=${cls.builderRoot}>
            <${MainList}
                classes=${classes?.list}
                label=Used 
                heroCode=${hero.code} 
                talents=${talentsBuilder.talents.used} 
                maxItems=${maxUsedTalents}
                onStickyLabelScrollingAgain=${usedLabelScrollingAgain.set}
                onClear=${talentsBuilder.clearUsed}
                onTalentClick=${talentsBuilder.removeFromUsed}
                onTalentAltClick=${talentsBuilder.removeFromUsed}
                onTalentHold=${talentsBuilder.removeFromUsed}
            />
            <${MainList} 
                classes=${classes?.list}
                slots=${{
                    labelRight: html`
                        <${ListLabelRight} 
                            className=${cls.listLabelRight}
                            visible=${
                                usedLabelScrollingAgain.is 
                                && !preferredLabelScrollingAgain.is
                            }
                            used=${talentsBuilder.talents.used.length}
                            maxUsed=${maxUsedTalents}
                        />
                    `,
                }}
                label=Preferred 
                heroCode=${hero.code} 
                talents=${talentsBuilder.talents.preferred} 
                onStickyLabelScrollingAgain=${preferredLabelScrollingAgain.set}
                confirmBeforeClear
                onClear=${talentsBuilder.clearPreferred}
                onTalentClick=${talentsBuilder.preferredToUsed}
                onTalentAltClick=${talentsBuilder.preferredToAvailable}
                onTalentHold=${talentsBuilder.preferredToAvailable}
            />
            <${MainList} 
                classes=${classes?.list}
                slots=${{
                    labelRight: html`
                        <${ListLabelRight}
                            className=${cls.listLabelRight}
                            visible=${preferredLabelScrollingAgain.is}
                            used=${talentsBuilder.talents.used.length}
                            preferred=${talentsBuilder.talents.preferred.length}
                            maxUsed=${maxUsedTalents}
                        />
                    `,
                }}
                label=Available 
                heroCode=${hero.code} 
                talents=${talentsBuilder.talents.available}
                onTalentClick=${talentsBuilder.availableToUsed}
                onTalentAltClick=${talentsBuilder.availableToPreferred}
                onTalentHold=${talentsBuilder.availableToPreferred}
            />
        </div>
    `;
}
