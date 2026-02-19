import { html } from "htm/preact";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { Builder as BuilderCommon } from "../../../../components/Builder/Builder";
import { BuilderListItemActions } from "../../../../components/Builder/types";
import { ListLabelRight } from "../../../../components/ListLabelRight/ListLabelRight";
import { TalentListItem } from "../../../../components/TalentListItem/TalentListItem";
import { useBooleanState } from "../../../../hooks/useBooleanState";
import { maxUsedTalents } from "../../consts/maxUsedTalents";
import { TalentsBuilder } from "../../hooks/useTalentsBuilder/types";
import { MainList } from "../MainList/MainList";

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
        <${BuilderCommon}
            classes=${{
                root: cls.root,
                list: { 
                    root: cls.listRoot,
                    label: cls.listLabel,
                    content: cls.listContent,
                }
            }}
            builder=${{
                state: {
                    used: talentsBuilder.talents.used,
                    preferred: talentsBuilder.talents.preferred,
                },
                derivedState: {
                    available: talentsBuilder.talents.available,
                },
                actions: {
                    loadState: talentsBuilder.loadHero,
                    clearUsed: talentsBuilder.clearUsed,
                    clearPreferred: talentsBuilder.clearPreferred,
                    removeFromUsed: talentsBuilder.removeFromUsed,
                    preferredToUsed: talentsBuilder.preferredToUsed,
                    preferredToAvailable: talentsBuilder.preferredToAvailable,
                    availableToUsed: talentsBuilder.availableToUsed,
                    availableToPreferred: talentsBuilder.availableToPreferred,
                }
            }}
            entityName=${"talents"}
            listLabelStuckAtPx=${154}
            maxUsedItems=${maxUsedTalents}
            renderItem=${(
                item: Talent, 
                index: number,
                actions: BuilderListItemActions,
            ) => html`
                <${TalentListItem}
                    heroCode=${hero.code}
                    talent=${item}
                    index=${index}
                    onClick=${actions.onClick}
                    onAltClick=${actions.onAltClick}
                    onHold=${actions.onHold}
                />
            `}
        />
    `;

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
