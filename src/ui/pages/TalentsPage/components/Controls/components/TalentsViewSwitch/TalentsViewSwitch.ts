import { clsx } from "clsx";
import { html } from "htm/preact";

import { TalentsPageView, talentsPageViews } from "../../../../talentsPageViews";

import cls from "./TalentsViewSwitch.module.css";

type Props = {
    className?: string;
    view: TalentsPageView;
    onSwitch: (view: TalentsPageView) => void;
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
            <div class=${cls.options}>
                ${talentsPageViews.map(it => html`
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

function nextOption(current: TalentsPageView): TalentsPageView {
    const currentIndex = talentsPageViews.findIndex(it => it.value === current);
    const nextIndex = (currentIndex + 1) % talentsPageViews.length;
    return talentsPageViews[nextIndex].value;
}
