import clsx from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import { useIsStickyElemStuck } from "../../hooks/useIsStickyElemStuck";
import { ClearListButton } from "../ClearListButton/ClearListButton";

import cls from "./List.module.css";

type Props<T> = {
    classes?: {
        root?: string;
        label?: string;
        content?: string;
    };
    label: string;
    // TODO: consider extracting sticky functionality out of List and into parent
    // might have issues with there being 3 lists tho and so 3 hook calls
    // in the parent
    labelStuckAtPx?: number;
    slots?: {
        labelRight?: ComponentChildren;
    };
    entityName?: string;
    items: T[];
    maxItems?: number;
    confirmBeforeClear?: boolean;
    renderItem: (item: T, index: number) => ComponentChildren;
    onClear?: () => void;
    onStickyLabelScrollingAgain?: (isScrollingAgain: boolean) => void;
}

type WithCode = {
    code: string;
}

export function List<T extends WithCode>({
    classes,
    label,
    labelStuckAtPx,
    slots,
    entityName,
    items,
    maxItems,
    confirmBeforeClear,
    renderItem,
    onClear,
    onStickyLabelScrollingAgain,
}: Props<T>) {
    const { 
        stickyElemRef, 
        isStuck: labelStuck 
    } = useIsStickyElemStuck({
        enabled: !!labelStuckAtPx,
        stuckAtPx: labelStuckAtPx,
        onStartingToScrollAgain: onStickyLabelScrollingAgain,
    });

    const empty = !items.length;

    return html`
        <div class=${clsx(cls.listRoot, classes?.root)}>
            <div class=${cls.labelHeight}></div>
            <div class=${cls.labelContainer}>
                <div 
                    class=${clsx({
                        [cls.label]: true,
                        [cls.labelStuck]: labelStuck,
                    }, classes?.label)} 
                    ref=${stickyElemRef}
                >
                    <div class=${cls.labelLeft}>
                        ${label} ${items.length}${maxItems ? ` / ${maxItems}` : null}
                    </div>
                    <div class=${cls.labelMiddle}>
                        ${onClear && html`
                            <${ClearListButton}
                                withConfirm=${confirmBeforeClear}
                                listName=${label}
                                entityName=${entityName}
                                disabled=${empty || labelStuck}
                                onClear=${onClear}
                            />
                        `}
                    </div>
                    ${slots?.labelRight && html`
                        <div class=${cls.labelRight}>
                            ${slots?.labelRight}
                        </div>
                    `}
                </div>
            </div>
            <div class=${clsx(cls.content, classes?.content)}>
                ${empty  && html`
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
