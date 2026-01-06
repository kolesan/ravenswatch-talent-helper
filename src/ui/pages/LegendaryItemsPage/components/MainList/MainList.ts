import { html } from "htm/preact";

import { DescriptionList } from "../../../../components/DescriptionList/DescriptionList";
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
            <ul class="main-list">
                ${items.map(item => {
                    const itemSrc = `/icons/items/new/legendary/${item.code}.png`;
                    const frameSrc = `/icons/items/new/legendary/frame.png`;

                    return html`
                        <${ListItem} 
                            name=${item.name}
                            iconElement=${html`
                                <div class=${cls.imgContainer}>
                                    <img class=${cls.item} src=${itemSrc} width=192 height=192 />
                                    <img class=${cls.frame} src=${frameSrc} width=256 height=256 />
                                </div>
                            `}
                            descriptionElement=${html`
                                <${DescriptionList}
                                    description=${item.description}
                                />
                            `}
                            onItemClick=${() => onItemClick?.(item)}
                            onItemAltClick=${() => onItemAltClick?.(item)}
                        />
                    `;
                })}
            </ul>
        </div>
    `;
}
