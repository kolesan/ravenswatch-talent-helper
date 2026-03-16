import { html } from "htm/preact";

import { MagicalObject, MagicalObjectType } from "../../types";

import { DescriptionList } from "./DescriptionList/DescriptionList";
import { ListItem } from "./ListItem/ListItem";
import { ObjectIcon } from "./ObjectIcon/ObjectIcon";
import { PreferredIcon } from "./PreferredIcon/PreferredIcon";

interface Props {
    classes?: {
        root?: string;
        interactive?: string;
    };
    index: number;
    object: MagicalObject;
    objectType: MagicalObjectType;
    onClick?: () => void;
    onAltClick?: () => void;
    onHold?: () => void;
}

export function ObjectListItem({
    classes,
    index,
    object,
    objectType,
    onClick,
    onAltClick,
    onHold,
}: Props) {
    return html`
        <${ListItem}
            classes=${{ 
                root: classes?.root,
                interactive: classes?.interactive,
            }}
            name=${object.name}
            interactive
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
