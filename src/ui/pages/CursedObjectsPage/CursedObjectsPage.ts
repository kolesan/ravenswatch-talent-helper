import { html } from "htm/preact";

import { MagicalObject } from "../../../types";
import { Builder } from "../../components/Builder/Builder";
import { BuilderListItemActions } from "../../components/Builder/types";
import { ObjectListItem } from "../../components/ObjectListItem";
import { usePageTitle } from "../../hooks/usePageTitle";

import { useCursedObjectsBuilder } from "./hooks/useCursedObjectsBuilder/useCursedObjectsBuilder";

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
            entityName=${"objects"}
            listLabelStuckAtPx=${56}
            renderItem=${(
                item: MagicalObject, 
                index: number,
                actions: BuilderListItemActions,
            ) => html`
                <${ObjectListItem}
                    index=${index}
                    object=${item}
                    objectType=${"cursed"}
                    onClick=${actions.onClick}
                    onAltClick=${actions.onAltClick}
                    onHold=${actions.onHold}
                />
            `}
        />
    `;
}
