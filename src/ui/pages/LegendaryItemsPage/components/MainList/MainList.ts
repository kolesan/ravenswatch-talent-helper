import { html } from "htm/preact";

import { TalentDescription } from "../../../../components/TalentDescription/TalentDescription";
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
                        <li
                            onClick=${(e: any) => {
                                if (e.altKey) {
                                    onItemAltClick?.(item);
                                } else {
                                    onItemClick?.(item);
                                }
                            }}
                        >
                            <div class=${cls.imgContainer}>
                                <img class=${cls.item} src=${itemSrc} width=192 height=192 />
                                <img class=${cls.frame} src=${frameSrc} width=256 height=256 />
                            </div>
                            <div class=${cls.textContainer}>
                                <div class=name>${item.name}</div>
                                <${TalentDescription} 
                                    talent=${item} 
                                />
                            </div>
                        </li>    
                    `;
                })}
            </ul>
        </div>
    `;
}
