import { html } from "htm/preact";

import { MagicalObject } from "../../../types";
import { Builder } from "../../components/Builder/Builder";
import { BuilderListItemActions } from "../../components/Builder/types";
import { ObjectListItem } from "../../components/ObjectListItem";
import { usePageTitle } from "../../hooks/usePageTitle";

import { useLegendaryObjectsBuilder } from "./hooks/useLegendaryObjectsBuilder/useLegendaryObjectsBuilder";

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
                    objectType=${"legendary"}
                    onClick=${actions.onClick}
                    onAltClick=${actions.onAltClick}
                    onHold=${actions.onHold}
                />
            `}
        />
    `;
}
