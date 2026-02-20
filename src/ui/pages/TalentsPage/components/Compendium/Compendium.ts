import { clsx } from "clsx";
import { html } from "htm/preact";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { List } from "../../../../components/List/List";
import { TalentListItem } from "../../../../components/TalentListItem/TalentListItem";
import { listLabelStuckAtPx } from "../../consts/listLabelStuckAtPx";
import { TalentWithLockedFlag } from "../../types";

import { TalentsCompendium } from "./types";

import cls from "./Compendium.module.css";

type Props = {
    className?: string;
    classes?: {
        list?: {
            root?: string,
            label?: string;
            content?: string;
        }
    }
    talentsCompendium: TalentsCompendium;
}

export function Compendium({
    className,
    classes,
    talentsCompendium,
}: Props) {
    console.log("=== Compendium rendering ===", { 
        hero: talentsCompendium.hero.code
    });

    const {
        hero,
        talents,
    } = talentsCompendium;

    return html`
        <div class=${clsx(cls.root, className)}>
            <${List}
                label=${"Starting"}
                items=${talents.starting}
                ...${commonProps()}
            />
            <${List}
                label=${"Standard"}
                items=${talents.standard} 
                ...${commonProps()}
            />
            <${List}
                label=${"Final"}
                items=${talents.final} 
                ...${commonProps()}
            />
        </div>
    `;

    function commonProps() {
        return {
            classes: {
                ...classes?.list,
                listItem: (talent: TalentWithLockedFlag) => clsx({
                    [cls.listItemDisableHover]: true,
                    [cls.listItemLocked]: talent.locked,
                }),
            },
            labelStuckAtPx: listLabelStuckAtPx,
            canCountItemUsable: (talent: TalentWithLockedFlag) => !talent.locked,
            renderItem: renderCompendiumItem,
        };
    }

    function renderCompendiumItem(talent: Talent, index: number) {
        return html`
            <${TalentListItem}
                showRanks
                heroCode=${hero.code}
                talent=${talent}
                index=${index}
            />
        `;
    }
}
