import { clsx } from "clsx";
import { html } from "htm/preact";

import { rankConsts } from "../../../../consts/rankConsts";
import { minmaxRank } from "../../../../utils/minmaxRank";

import cls from "./RankSlider.module.css";

type Props = {
    className?: string;
    value: number;
    onChange: (value: number) => void;
}

export function RankSlider({
    className,
    value,
    onChange,
}: Props) {
    return html`
        <label class=${clsx(cls.rankSliderRoot, className)}>
            Rank
            <input
                type=range
                min=${rankConsts.min}
                max=${rankConsts.max}
                value=${value}
                oninput=${(e: preact.TargetedEvent<HTMLInputElement>) => {
                    onChange(minmaxRank(+e.currentTarget.value));
                }}
            />
            <output>${value}</output>
        </label>
    `;
}
