import clsx from "clsx";
import { html } from "htm/preact";

import { HeroCode } from "../../../data/heroes";
import { TalentWithLockedFlag } from "../../pages/TalentsPage/types";
import { ListItem } from "../ListItem/ListItem";
import { PreferredIcon } from "../PreferredIcon/PreferredIcon";
import { TalentDescription } from "../TalentDescription/TalentDescription";
import { TalentIcon } from "../TalentIcon/TalentIcon";

import { TalentRank } from "./components/TalentRank/TalentRank";
import { TalentTags } from "./components/TalentTags/TalentTags";

import cls from "./TalentListItem.module.css";

interface Props {
    className?: string;
    showRanks?: boolean;
    heroCode: HeroCode;
    talent: TalentWithLockedFlag;
    index: number;
    onClick?: () => void;
    onAltClick?: () => void;
    onHold?: () => void;
}

export function TalentListItem({
    className,
    showRanks,
    heroCode,
    talent,
    index,
    onClick,
    onAltClick,
    onHold,
}: Props) {
    return html`
        <${ListItem}
            className=${clsx(cls.talentListItemRoot, className)}
            name=${talent.name}
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
                    ${showRanks && talent.unlockedAtRank > 1 && html`
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
