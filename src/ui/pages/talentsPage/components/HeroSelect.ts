import { html } from "htm/preact";

import { HeroCode } from "../../../../data/heroes";
import { isHeroCode } from "../../../utils/isHeroCode";

interface Props {
    classes?: string;
    items: HeroItem[]
    value: HeroCode;
    onChange: (code: HeroCode) => void;
}

type HeroItem = {
    code: HeroCode;
    name: string;
}

export function HeroSelect({
    classes,
    items,
    value,
    onChange,
}: Props) {
    return html`
        <label class=${`container-label ${classes}`}>
            Select Hero
            <select 
                value=${value} 
                onChange=${(e: preact.TargetedEvent<HTMLSelectElement>) => {
                    const newHeroCode = e.currentTarget.value;

                    if (!isHeroCode(newHeroCode)) {
                        console.error(`No such hero code: '${newHeroCode}'`);
                        return;
                    }

                    onChange(newHeroCode);
                }}
            >
                ${items.map(it => html`
                    <option 
                        key=${it.code}
                        value=${it.code}
                    >
                        ${it.name}
                    </option>
                `)}
            </select>
        </label>
    `;
}
