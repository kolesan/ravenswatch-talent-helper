import { html } from "htm/preact";

import { MagicalObject } from "../../../../types";
import { DescriptionList } from "../../../components/DescriptionList/DescriptionList";
import { ItemIcon } from "../../../components/ItemIcon/ItemIcon";
import { ListItem } from "../../../components/ListItem/ListItem";

interface Props {
    className?: string;
    object: MagicalObject;
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
