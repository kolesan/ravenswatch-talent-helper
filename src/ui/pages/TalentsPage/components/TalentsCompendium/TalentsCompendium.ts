import { clsx } from "clsx";
import { html } from "htm/preact";

import { List } from "../../../../components/List/List";
import { Talent } from "../../../../uiData/heroes/talents/types";
import { listLabelStuckAtPx } from "../../consts/listLabelStuckAtPx";
import { TalentListItem } from "../TalentListItem/TalentListItem";

import { TalentsCompendiumType } from "./types";

import cls from "./TalentsCompendium.module.css";

type Props = {
    className?: string;
    classes?: {
        list?: {
            root?: string,
            label?: string;
            content?: string;
        }
    }
    talentsCompendium: TalentsCompendiumType;
}

export function TalentsCompendium({
    className,
    classes,
    talentsCompendium,
}: Props) {
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
                label=${"Ultimate / Final"}
                items=${[
                    ...talents.ultimate,
                    ...talents.final,
                ]} 
                ...${commonProps()}
            />
        </div>
    `;

    function commonProps() {
        return {
            classes: classes?.list,
            labelStuckAtPx: listLabelStuckAtPx,
            canCountItemUsable: (talent: Talent) => !talent.locked,
            renderItem: renderCompendiumItem,
        };
    }

    function renderCompendiumItem(talent: Talent, index: number) {
        return html`
            <${TalentListItem}
                className=${clsx({
                    [cls.separatorItem!]: talent.type === "final" 
                        && talent.unlockedAtRank === 1,
                })}
                showRank
                heroCode=${hero.code}
                talent=${talent}
                index=${index}
            />
        `;
    }
}
