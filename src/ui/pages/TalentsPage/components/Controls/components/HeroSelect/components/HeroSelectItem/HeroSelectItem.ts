import { clsx } from "clsx";
import { html } from "htm/preact";

import { Anchor } from "ui/components/Anchor/Anchor";
import { pages } from "ui/pages";
import { Hero } from "ui/uiData/heroes/types";

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
        <${Anchor}
            className=${clsx(cls.heroSelectItemRoot, className)}
            style=${`background-image: url("/art/${hero.code}.webp");`}
            key=${hero.code}
            href=${pages.talents.constructPath({
                hero: hero.code,
                view: "currentViewPlaceholder",
            })}
            onPointerUp=${() => {
                onChange(hero);
            }}
        >
            <div class=${cls.itemImageContainer}>
                <img
                    class=${clsx(cls.itemImage, cls[hero.code])}
                    src=${`/icons/heroes/${hero.code}.webp`}
                    height=256
                    width=256
                />
            </div>
            <div class=${clsx(cls.itemTextContainer, cls[`${hero.code}Text`])}>
                <div class=${cls.itemText}>
                    ${hero.name}
                </div>
            </div>
        </${Anchor}>
    `;
}
