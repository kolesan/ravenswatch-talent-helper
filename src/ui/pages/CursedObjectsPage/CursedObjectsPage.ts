import { html } from "htm/preact";

import { Builder } from "ui/components/Builder/Builder";
import { BuilderListItemActions } from "ui/components/Builder/types";
import { ObjectListItem } from "ui/components/ObjectListItem";
import { usePageTitle } from "ui/hooks/usePageTitle";
import { MagicalObject } from "ui/uiData/objects/types";

import { useCursedObjectsBuilder } from "./hooks/useCursedObjectsBuilder";

import cls from "./CursedObjectsPage.module.css";

export function CursedObjectsPage() {
    usePageTitle("Cursed Objects");

    const builder = useCursedObjectsBuilder();

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
