import { html } from "htm/preact";

import { DescriptionList } from "../../../../components/DescriptionList/DescriptionList";
import { ItemIcon } from "../../../../components/ItemIcon/ItemIcon";
import { ListItem } from "../../../../components/ListItem/ListItem";
import { Item } from "../../types";

import cls from "./MainList.module.css";

interface Props {
    label: string;
    items: Item[];
    onItemClick?: (item: Item) => void;
    onItemAltClick?: (item: Item) => void;
}

export function MainList({
    label,
    items,
    onItemClick,
    onItemAltClick,
}: Props) {
    return html`
        <div>
            <h1>${label} ${items.length}</h1>
            <ul>
                ${items.map(item => html`
                    <${ListItem} 
                        className=${cls.listItem}
                        key=${item.code}
                        name=${item.name}
                        iconElement=${html`
                            <${ItemIcon}
                                type=legendary
                                code=${item.code}
                            />
                        `}
                        descriptionElement=${html`
                            <${DescriptionList}
                                description=${item.description}
                            />
                        `}
                        onItemClick=${() => onItemClick?.(item)}
                        onItemAltClick=${() => onItemAltClick?.(item)}
                    />
                `)}
            </ul>
        </div>
    `;
}
