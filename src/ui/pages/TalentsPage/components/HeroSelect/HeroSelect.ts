import clsx from "clsx";
import { html } from "htm/preact";

import { Hero } from "../../../../../finalData/finalData";
import { useBooleanState } from "../../../../hooks/useBooleanState";

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

    return html`
        <div 
            class=${clsx(cls.root, className)}
            onClick=${open.toggle}
        >
            <div 
                class=${`${cls.input} ${value.code}BgArt ${open.is ? `${cls.inputActive}` : ""}`}
            >
                <div class=${cls.inputImageContainer}>
                    <img
                        class=${clsx({
                            [cls.inputImage]: true,
                            [cls.inputImageSmall]: compact,
                        })}
                        src=${`/icons/heroes/${value.code}.png`}
                        height=256
                        widht=256
                    />
                    <div class=${cls.inputText}>
                        ${value.name}
                    </div>
                    <div class=${cls.inputArrow}>
                        >
                    </div>
                </div>
            </div>
            ${open.is && html`
                <div class=${cls.items}>
                    ${items.filter(it => it.code !== value.code).map(it => html`
                        <div
                            class=${cls.item}
                            style=${`background-image: url("/art/${it.code}.jpg");`}
                            key=${it.code}
                            onClick=${() => {
                                onChange(it);
                            }}
                        >
                            <img
                                class=${cls.itemImage}
                                src=${`/icons/heroes/${it.code}.png`}
                                height=256
                                widht=256
                            />
                            <div class=${cls.itemTextContainer}>
                                <div class=${cls.itemText}>
                                    ${it.name}
                                </div>
                                <div class=${cls.itemTextBigger}>
                                    ${it.name}
                                </div>
                            </div>
                        </div>
                    `)}
                </div>
            `}
        </div>
    `;
}

            // ${open.is && html`
            //     <div class=${cls.backdrop} />
            // `}