import { clsx } from "clsx";
import { html } from "htm/preact";

import { Hero } from "../../../../../finalData/finalData";
import { MainList } from "../MainList/MainList";

import { TalentsCompendium } from "./types";

import cls from "./Compendium.module.css";

type Props = {
    className?: string;
    classes?: {
        list?: {
            label?: string;
            content?: string;
        }
    }
    hero: Hero;
    talentsCompendium: TalentsCompendium;
}

export function Compendium({
    className,
    classes,
    hero,
    talentsCompendium,
}: Props) {
    console.log("=== Compendium rendering ===", { 
        hero: hero.code
    });

    const {
        starting,
        standard,
        final
    } = talentsCompendium.talents;

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
                heroCode=${hero.code} 
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
                heroCode=${hero.code} 
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
                heroCode=${hero.code} 
                talents=${final}
            />
        </div>
    `;
}
