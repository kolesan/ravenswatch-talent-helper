import clsx from "clsx";
import { html } from "htm/preact";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { Builder as BuilderCommon } from "../../../../components/Builder/Builder";
import { BuilderListItemActions } from "../../../../components/Builder/types";
import { TalentListItem } from "../../../../components/TalentListItem/TalentListItem";
import { maxUsedTalents } from "../../consts/maxUsedTalents";
import { TalentsBuilder } from "../../hooks/useTalentsBuilder/types";
import { TalentWithLockedFlag } from "../../types";

import cls from "./Builder.module.css";

type Props = {
    classes?: {
        list?: {
            root?: string;
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
    return html`
        <${BuilderCommon}
            classes=${{
                root: cls.builderRoot,
                list: { 
                    root: classes?.list?.root,
                    label: classes?.list?.label,
                    content: classes?.list?.content,
                    listItem: (talent: TalentWithLockedFlag) => clsx({
                        [cls.listItemLocked]: talent.locked,
                        [cls.listItemDisableHover]: talent.locked,
                    }),
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
            canCountItemAvailable=${(talent: TalentWithLockedFlag) => !talent.locked}
            renderItem=${(
                talent: Talent, 
                index: number,
                actions: BuilderListItemActions,
            ) => html`
                <${TalentListItem}
                    heroCode=${talentsBuilder.hero.code}
                    talent=${talent}
                    index=${index}
                    onClick=${actions.onClick}
                    onAltClick=${actions.onAltClick}
                    onHold=${actions.onHold}
                />
            `}
        />
    `;
}
