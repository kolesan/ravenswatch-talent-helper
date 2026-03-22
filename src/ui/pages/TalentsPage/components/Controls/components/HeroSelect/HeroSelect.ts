import clsx from "clsx";
import { html } from "htm/preact";

import { Hero } from "../../../../../../ui_data/heroes";
import { useBooleanState } from "../../../../../../hooks/useBooleanState";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";

import { HeroArtPreloader } from "./components/HeroArtPreloader";
import { HeroSelectItem } from "./components/HeroSelectItem/HeroSelectItem";

import cls from "./HeroSelect.module.css";

interface Props {
    className?: string;
    classes?: {
        portraitContainer?: string;
    };
    items: Hero[]
    value: Hero;
    onChange: (code: Hero) => void;
}

export function HeroSelect({
    className,
    classes,
    items,
    value,
    onChange,
}: Props) {
    const open = useBooleanState(false);

    const { ref } = useOnClickOutside(open.off);

    return html`
        <div 
            class=${clsx(cls.root, className)}
            ref=${ref}
            onClick=${open.toggle}
        >
            <div 
                class=${clsx(cls.input, `${value.code}BgArt`, {
                    [cls.inputActive!]: open.is
                })}
            >
                <div 
                    class=${clsx(
                        cls.inputImageContainer, 
                        cls[`${value.code}InputImgContainer`], 
                        classes?.portraitContainer
                    )}
                >
                    <img
                        class=${clsx(cls.inputImage, cls[`${value.code}InputImg`])}
                        src=${`/icons/heroes/${value.code}.webp`}
                        height=256
                        width=256
                    />
                    <${HeroArtPreloader} heroCode=${value.code} />
                </div>
                <div 
                    class=${clsx(cls.inputText, cls[`${value.code}InputText`])}
                >
                    ${value.name}
                </div>
                <div class=${cls.inputArrow}>
                    >
                </div>
            </div>
            ${open.is && html`
                <div class=${cls.items}>
                    ${items.filter(it => it.code !== value.code).map(it => html`
                        <${HeroSelectItem} 
                            key=${it.code}
                            hero=${it}
                            onChange=${onChange}
                        />
                    `)}
                </div>
            `}
        </div>
    `;
}
