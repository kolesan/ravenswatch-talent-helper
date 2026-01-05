import { html } from "htm/preact";

import { TalentDescription } from "../../../components/TalentDescription/TalentDescription";
import { Item } from "../types";

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
                    const imageSrc = `/icons/items/legendary/${item.code}.webp`;

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
                            <img src=${imageSrc} height=100 />
                            <div>
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
