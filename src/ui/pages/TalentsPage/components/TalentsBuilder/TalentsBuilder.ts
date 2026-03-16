import { html } from "htm/preact";

import { Builder } from "../../../../components/Builder/Builder";
import { BuilderListItemActions } from "../../../../components/Builder/types";
import { listLabelStuckAtPx } from "../../consts/listLabelStuckAtPx";
import { maxUsedTalents } from "../../consts/maxUsedTalents";
import { TalentWithLockedFlag } from "../../types";
import { TalentListItem } from "../TalentListItem/TalentListItem";

import { TalentsBuilderType } from "./types";

import cls from "./TalentsBuilder.module.css";

type Props = {
    classes?: {
        list?: {
            root?: string;
            label?: string;
            content?: string;
        }
    }
    talentsBuilder: TalentsBuilderType;
}

export function TalentsBuilder({
    classes,
    talentsBuilder,
}: Props) {
    return html`
        <${Builder}
            classes=${{
                root: cls.builderRoot,
                list: { 
                    root: classes?.list?.root,
                    label: classes?.list?.label,
                    content: classes?.list?.content,
                }
            }}
            builder=${talentsBuilder.builder}
            entityName=${"talent"}
            listLabelStuckAtPx=${listLabelStuckAtPx}
            maxUsedItems=${maxUsedTalents}
            canCountItemAvailable=${(talent: TalentWithLockedFlag) => !talent.locked}
            renderItem=${(
                talent: TalentWithLockedFlag, 
                index: number,
                actions: BuilderListItemActions,
            ) => html`
                <${TalentListItem}
                    interactive=${!talent.locked}
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
