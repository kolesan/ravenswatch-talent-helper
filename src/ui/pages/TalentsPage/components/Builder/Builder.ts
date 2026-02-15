import { html } from "htm/preact";

import { ListLabelRight } from "../../../../components/ListLabelRight/ListLabelRight";
import { useBooleanState } from "../../../../hooks/useBooleanState";
import { maxUsedTalents } from "../../consts/maxUsedTalents";
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
    talentsBuilder: TalentsBuilder;
}

export function Builder({
    classes,
    talentsBuilder,
}: Props) {
    console.log("=== Builder rendering ===", { hero: talentsBuilder.hero.code });

    const usedLabelScrollingAgain = useBooleanState(false);
    const preferredLabelScrollingAgain = useBooleanState(false);

    const {
        hero,
        talents,
    } = talentsBuilder;

    return html`
        <div class=${cls.builderRoot}>
            <${MainList}
                classes=${classes?.list}
                label=Used 
                heroCode=${hero.code} 
                talents=${talents.used} 
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
                            used=${talents.used.length}
                            maxUsed=${maxUsedTalents}
                        />
                    `,
                }}
                label=Preferred 
                heroCode=${hero.code} 
                talents=${talents.preferred} 
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
                            used=${talents.used.length}
                            preferred=${talents.preferred.length}
                            maxUsed=${maxUsedTalents}
                        />
                    `,
                }}
                label=Available 
                heroCode=${hero.code} 
                talents=${talents.available}
                onTalentClick=${talentsBuilder.availableToUsed}
                onTalentAltClick=${talentsBuilder.availableToPreferred}
                onTalentHold=${talentsBuilder.availableToPreferred}
            />
        </div>
    `;
}
