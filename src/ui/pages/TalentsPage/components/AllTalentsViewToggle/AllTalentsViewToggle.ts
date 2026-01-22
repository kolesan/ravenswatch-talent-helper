import { clsx } from "clsx";
import { html } from "htm/preact";

import cls from "./AllTalentsViewToggle.module.css";

type Props = {
    className?: string;
    enabled: boolean;
    onToggleEnabled: (newEnabled: boolean) => void;
}

export function AllTalentsViewToggle({
    className,
    enabled,
    onToggleEnabled,
}: Props) {
    return html`
        <div 
            class=${clsx({
                [cls.talentViewToggleRoot]: true, 
                [cls.enabled]: enabled,
                [className]: !!className,
            })}
            onClick=${() => {
                onToggleEnabled(!enabled)
            }}
        >
            <span class=${cls.text}>
                Toggle all talents view
            </span>
        </div>
    `;
}
