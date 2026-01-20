import clsx from "clsx";
import { html } from "htm/preact";

import { Hero } from "../../../../../finalData/finalData";
import { useBooleanState } from "../../../../hooks/useBooleanState";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { HeroArtDownloadForcer } from "./components/HeroArtDownloadForcer/HeroArtDownloadForcer";
import { HeroSelectItem } from "./components/HeroSelectItem/HeroSelectItem";

import cls from "./HeroSelect.module.css";

interface Props {
    className?: string;
    compact?: boolean;
    items: Hero[]
    value: Hero;
    onChange: (code: Hero) => void;
}

export function HeroSelect({
    className,
    compact,
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
                class=${clsx({
                    [cls.input]: true,
                    [`${value.code}BgArt`]: true, 
                    [cls.inputActive]: open.is
                })}
            >
                <div 
                    class=${clsx({
                        [cls.inputImageContainer]: true,
                        [cls[`${value.code}InputImgContainer`]]: true,
                    })}
                >
                    <img
                        class=${clsx({
                            [cls.inputImage]: true,
                            [cls.inputImageSmall]: compact,
                            [cls[`${value.code}InputImg`]]: true,
                        })}
                        src=${`/icons/heroes/${value.code}.png`}
                        height=256
                        width=256
                    />
                </div>
                <div 
                    class=${clsx({
                        [cls.inputText]: true, 
                        [cls[`${value.code}InputText`]]: true,
                    })}
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
            <${HeroArtDownloadForcer} />
        </div>
    `;
}
