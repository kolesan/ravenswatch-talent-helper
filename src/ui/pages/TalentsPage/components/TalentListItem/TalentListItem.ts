import clsx from "clsx";
import { html } from "htm/preact";

import { Talent } from "ui/uiData/heroes/talents/types";
import { ListItem } from "ui/components/ListItem/ListItem";
import { PreferredIcon } from "ui/components/PreferredIcon/PreferredIcon";
import { TalentDescription } from "ui/components/TalentDescription/TalentDescription";
import { TalentIcon } from "ui/components/TalentIcon/TalentIcon";
import { HeroCode } from "ui/uiData/heroes/types";

import { TalentRank } from "./components/TalentRank/TalentRank";
import { TalentTags } from "./components/TalentTags/TalentTags";

import cls from "./TalentListItem.module.css";

interface Props {
    className?: string;
    interactive?: boolean;
    showRank?: boolean;
    heroCode: HeroCode;
    talent: Talent;
    index: number;
    onClick?: () => void;
    onAltClick?: () => void;
    onHold?: () => void;
}

export function TalentListItem({
    className,
    interactive,
    showRank,
    heroCode,
    talent,
    index,
    onClick,
    onAltClick,
    onHold,
}: Props) {
    return html`
        <${ListItem}
            classes=${{
                root: clsx({
                    [cls.locked!]: talent.locked,
                }, className)
            }}
            name=${talent.name}
            interactive=${interactive}
            tools=${html`
                ${talent.preferred && html`
                    <${PreferredIcon} 
                        lowerTooltip=${index === 0} 
                    />
                `}
                ${!talent.locked && html`
                    <${TalentTags} 
                        className=${cls.talentTags}
                        talent=${talent} 
                        index=${index} 
                    />
                    ${showRank && talent.unlockedAtRank > 1 && html`
                        <${TalentRank} 
                            className=${cls.talentRank}
                            talent=${talent} 
                        />
                    `}
                `}
            `}
            iconElement=${html`
                <${TalentIcon}
                    heroCode=${heroCode}
                    talent=${talent}
                />
            `}
            descriptionElement=${html`
                <${TalentDescription} 
                    talent=${talent} 
                />
            `}
            onClick=${onClick}
            onAltClick=${onAltClick}
            onHold=${onHold}
        />
    `;
}
