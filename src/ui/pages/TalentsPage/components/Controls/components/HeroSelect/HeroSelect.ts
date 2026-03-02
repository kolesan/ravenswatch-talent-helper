import clsx from "clsx";
import { html } from "htm/preact";

import { Hero } from "../../../../../../../finalData/finalData";
import { useBooleanState } from "../../../../../../hooks/useBooleanState";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";

import { HeroImagesDownloadEnforcer } from "./components/HeroImagesDownloadEnforcer";
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
                    }, classes?.portraitContainer)}
                >
                    <img
                        class=${clsx({
                            [cls.inputImage]: true,
                            [cls[`${value.code}InputImg`]]: true,
                        })}
                        src=${`/icons/heroes/optimized/${value.code}.webp`}
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
            <${HeroImagesDownloadEnforcer} />
        </div>
    `;
}
