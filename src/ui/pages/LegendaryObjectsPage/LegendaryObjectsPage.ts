import { html } from "htm/preact";

import { MagicalObject } from "ui/uiData/objects/types";
import { Builder } from "ui/components/Builder/Builder";
import { BuilderListItemActions } from "ui/components/Builder/types";
import { ObjectListItem } from "ui/components/ObjectListItem";
import { usePageTitle } from "ui/hooks/usePageTitle";

import { useLegendaryObjectsBuilder } from "./hooks/useLegendaryObjectsBuilder";

import cls from "./LegendaryObjectsPage.module.css";

export function LegendaryObjectsPage() {
    usePageTitle("Legendary Objects");

    const builder = useLegendaryObjectsBuilder();

    return html`
        <${Builder}
            classes=${{
                root: cls.root,
                list: { 
                    root: cls.listRoot,
                    label: cls.listLabel,
                    content: cls.listContent,
                }
            }}
            builder=${builder}
            entityName=${"object"}
            listLabelStuckAtPx=${56}
            renderItem=${(
                item: MagicalObject, 
                index: number,
                actions: BuilderListItemActions,
            ) => html`
                <${ObjectListItem}
                    classes=${{
                        interactive: cls.interactiveListItem,
                    }}
                    index=${index}
                    object=${item}
                    onClick=${actions.onClick}
                    onAltClick=${actions.onAltClick}
                    onHold=${actions.onHold}
                />
            `}
        />
    `;
}
