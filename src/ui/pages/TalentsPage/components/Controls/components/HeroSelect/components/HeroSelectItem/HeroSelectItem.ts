import { clsx } from "clsx";
import { html } from "htm/preact";

import { Hero } from "../../../../../../../../../finalData/finalData";

import cls from "./HeroSelectItem.module.css";

type Props = {
    className?: string;
    hero: Hero;
    onChange: (hero: Hero) => void;
}

export function HeroSelectItem({
    className,
    hero,
    onChange,
}: Props) {
    return html`
        <div
            class=${clsx(cls.heroSelectItemRoot, className)}
            style=${`background-image: url("/art/newResampled/${hero.code}.webp");`}
            key=${hero.code}
            onClick=${() => {
                onChange(hero);
            }}
        >
            <div class=${cls.itemImageContainer}>
                <img
                    class=${clsx(cls.itemImage, cls[hero.code])}
                    src=${`/icons/heroes/optimized/${hero.code}.webp`}
                    height=256
                    width=256
                />
            </div>
            <div class=${clsx(cls.itemTextContainer, cls[`${hero.code}Text`])}>
                <div class=${cls.itemText}>
                    ${hero.name}
                </div>
            </div>
        </div>
    `;
}
