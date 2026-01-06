import { html } from "htm/preact";

import { DescriptionList } from "../../../../components/DescriptionList/DescriptionList";
import { ItemIcon } from "../../../../components/ItemIcon/ItemIcon";
import { ListItem } from "../../../../components/ListItem/ListItem";
import { Item } from "../../types";

interface Props {
    className?: string;
    object: Item;
    onClick?: () => void;
    onAltClick?: () => void;
}

export function ObjectListItem({
    className,
    object,
    onClick,
    onAltClick,
}: Props) {
    return html`
        <${ListItem}
            className=${className}
            name=${object.name}
            iconElement=${html`
                <${ItemIcon}
                    type=legendary
                    code=${object.code}
                />
            `}
            descriptionElement=${html`
                <${DescriptionList}
                    description=${object.description}
                />
            `}
            onClick=${onClick}
            onAltClick=${onAltClick}
        />
    `;
}
