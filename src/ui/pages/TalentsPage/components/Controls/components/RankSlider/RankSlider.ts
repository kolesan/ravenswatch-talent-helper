import { clsx } from "clsx";
import { html } from "htm/preact";

import { rankConsts } from "TalentsPage/consts/rankConsts";
import { minmaxRank } from "TalentsPage/utils/minmaxRank";

import { useBgGradient } from "./hooks/useBgGradient";

import cls from "./RankSlider.module.css";

type Props = {
    className?: string;
    value: number;
    onChange: (value: number) => void;
}

const min = rankConsts.min;
const max = rankConsts.max;

export function RankSlider({
    className,
    value,
    onChange,
}: Props) {
    const inputRef = useBgGradient(value, min, max);

    return html`
        <label class=${clsx(cls.rankSliderRoot, className)}>
            Rank
            <input
                ref=${inputRef}
                type=range
                min=${min}
                max=${max}
                value=${value}
                oninput=${(e: preact.TargetedEvent<HTMLInputElement>) => {
                    onChange(minmaxRank(+e.currentTarget.value));
                }}
            />
            <output class=${cls.output}>${value}</output>
        </label>
    `;
}
