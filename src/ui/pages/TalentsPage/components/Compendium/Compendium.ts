import { clsx } from "clsx";
import { html } from "htm/preact";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { MainList } from "../MainList/MainList";

import { markIfLocked } from "./utils/markIfLocked";

import cls from "./Compendium.module.css";

type Props = {
    className?: string;
    classes?: {
        list?: {
            label?: string;
            content?: string;
        }
    }
    heroCode: string;
    heroRank: number;
    talents: Talent[];
}

export function Compendium({
    className,
    classes,
    heroCode,
    heroRank,
    talents,
}: Props) {
    console.log("========== Compendium rendering ==========");

    const mapped = talents.map(markIfLocked(heroRank));

    const starting = mapped.filter(it => it.type === "starting");
    const standard = mapped.filter(it => it.type === "standard");
    const final = mapped.filter(it => it.type === "final");

    return html`
        <div class=${clsx(cls.root, className)}>
            <${MainList}
                classes=${{ 
                    label: classes?.list?.label,
                    content: classes?.list?.content,
                }}
                disableHover
                showRanks
                label=Starting 
                heroCode=${heroCode} 
                talents=${starting}
            />
            <${MainList} 
                classes=${{ 
                    label: classes?.list?.label,
                    content: classes?.list?.content,
                }}
                disableHover
                showRanks
                label=Standard 
                heroCode=${heroCode} 
                talents=${standard} 
            />
            <${MainList} 
                classes=${{ 
                    label: classes?.list?.label,
                    content: classes?.list?.content,
                }}
                disableHover
                showRanks
                label=Final 
                heroCode=${heroCode} 
                talents=${final}
            />
        </div>
    `;
}
