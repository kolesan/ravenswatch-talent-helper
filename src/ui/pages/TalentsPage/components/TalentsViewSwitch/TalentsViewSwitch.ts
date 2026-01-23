import { clsx } from "clsx";
import { html } from "htm/preact";

import { talentsViewOptions } from "./talentsViewOptions";
import { TalentsView } from "./types";

import cls from "./TalentsViewSwitch.module.css";

type Props = {
    className?: string;
    view: TalentsView;
    onSwitch: (view: TalentsView) => void;
}

export function TalentsViewSwitch({
    className,
    view,
    onSwitch,
}: Props) {
    return html`
        <label 
            class=${clsx(cls.talentsViewSwitchRoot, className)}
            onClick=${() => {
                onSwitch(nextOption(view));
            }}
        >
            View
            <div 
                class=${clsx({
                    [cls.options]: true
                })}
            >
                ${talentsViewOptions.map(it => html`
                    <div 
                        class=${clsx({
                            [cls.option]: true,
                            [cls.optionSelected]: it.value === view,
                        })}
                        key=${it.value}
                        onClick=${(e: PointerEvent) => {
                            e.stopPropagation();
                            onSwitch(it.value);
                        }}
                    >
                        ${it.label}
                    </div>
                `)}
            </div>
        </label>
    `;
}

function nextOption(current: TalentsView): TalentsView {
    const currentIndex = talentsViewOptions.findIndex(it => it.value === current);
    const nextIndex = (currentIndex + 1) % talentsViewOptions.length;
    return talentsViewOptions[nextIndex].value;
}
