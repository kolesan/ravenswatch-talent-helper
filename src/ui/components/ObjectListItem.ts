import { html } from "htm/preact";

import { MagicalObject, MagicalObjectType } from "../../types";
import { PreferredIcon } from "../pages/TalentsPage/components/MainList/components/PreferredIcon/PreferredIcon";

import { DescriptionList } from "./DescriptionList/DescriptionList";
import { ListItem } from "./ListItem/ListItem";
import { ObjectIcon } from "./ObjectIcon/ObjectIcon";

interface Props {
    className?: string;
    index: number;
    object: MagicalObject;
    objectType: MagicalObjectType;
    onClick?: () => void;
    onAltClick?: () => void;
    onHold?: () => void;
}

export function ObjectListItem({
    className,
    index,
    object,
    objectType,
    onClick,
    onAltClick,
    onHold,
}: Props) {
    return html`
        <${ListItem}
            className=${className}
            name=${object.name}
            tools=${object.preferred && html`
                <${PreferredIcon} lowerTooltip=${index === 0} />
            `}
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
            onHold=${onHold}
        />
    `;
}
