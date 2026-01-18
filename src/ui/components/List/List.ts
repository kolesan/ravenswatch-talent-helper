import clsx from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import { useIsStickyElemStuck } from "../../pages/TalentsPage/hooks/useIsStickyElemStuck";

import cls from "./List.module.css";

type Props<T> = {
    className?: string;
    classes?: {
        label?: string;
        content?: string;
    };
    label: string;
    // TODO: consider extracting sticky functionality out of List and into parent
    // might have issues with there being 3 lists tho and so 3 hook calls
    // in the parent
    labelStuckAtPx?: number;
    items: T[];
    renderItem: (item: T, index: number) => ComponentChildren;
    onItemClick?: (item: T) => void;
    onItemAltClick?: (item: T) => void;
}

type WithCode = {
    code: string;
}

export function List<T extends WithCode>({
    className,
    classes,
    label,
    labelStuckAtPx,
    items,
    renderItem,
}: Props<T>) {
    const { 
        stickyElemRef, 
        isStuck: labelStuck 
    } = useIsStickyElemStuck({
        enabled: !!labelStuckAtPx,
        stuckAtPx: labelStuckAtPx,
    });

    return html`
        <div class=${clsx(cls.listRoot, className)}>
            <div class=${cls.labelHeight}></div>
            <div class=${cls.labelContainer}>
                <div 
                    class=${clsx({
                        [cls.label]: true,
                        [cls.labelStuck]: labelStuck,
                    }, classes?.label)} 
                    ref=${stickyElemRef}
                >
                    ${label} ${items.length}
                </div>
            </div>
            <div class=${clsx(cls.content, classes?.content)}>
                ${!items.length && html`
                    <div class=${cls.empty}>
                        This list is empty
                    </div>
                `}
                <ul class=${cls.list}>
                    ${items.map((item, i) => html`
                        <div class=${cls.listItem} key=${item.code}>
                            ${renderItem(item, i)}
                        </div>
                    `)}
                </ul>
            </div>
        </div>
    `;
}
