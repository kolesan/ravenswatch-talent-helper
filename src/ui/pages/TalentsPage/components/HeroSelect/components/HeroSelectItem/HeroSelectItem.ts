import { clsx } from "clsx";
import { html } from "htm/preact";

import { Hero } from "../../../../../../../finalData/finalData";

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
            style=${`background-image: url("/art/${hero.code}.jpg");`}
            key=${hero.code}
            onClick=${() => {
                onChange(hero);
            }}
        >
            <img
                class=${cls.itemImage}
                src=${`/icons/heroes/${hero.code}.png`}
                height=256
                widht=256
            />
            <div class=${cls.itemTextContainer}>
                <div class=${cls.itemText}>
                    ${hero.name}
                </div>
                <div class=${cls.itemTextBigger}>
                    ${hero.name}
                </div>
            </div>
        </div>
    `;
}
