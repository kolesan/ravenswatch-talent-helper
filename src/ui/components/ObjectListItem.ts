import { html } from "htm/preact";

import { MagicalObject, MagicalObjectType } from "../../types";
import { DescriptionList } from "./DescriptionList/DescriptionList";
import { ListItem } from "./ListItem/ListItem";
import { ObjectIcon } from "./ObjectIcon/ObjectIcon";

interface Props {
    className?: string;
    object: MagicalObject;
    objectType: MagicalObjectType;
    onClick?: () => void;
    onAltClick?: () => void;
}

export function ObjectListItem({
    className,
    object,
    objectType,
    onClick,
    onAltClick,
}: Props) {
    return html`
        <${ListItem}
            className=${className}
            name=${object.name}
            iconElement=${html`
                <${ObjectIcon}
                    type=${objectType}
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
