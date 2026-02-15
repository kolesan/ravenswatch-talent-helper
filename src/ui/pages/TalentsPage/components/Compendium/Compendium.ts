import { clsx } from "clsx";
import { html } from "htm/preact";

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
    talentsCompendium: TalentsCompendium;
}

export function Compendium({
    className,
    classes,
    talentsCompendium,
}: Props) {
    console.log("=== Compendium rendering ===", { 
        hero: talentsCompendium.hero.code
    });

    const {
        hero,
        talents,
    } = talentsCompendium;

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
                talents=${talents.starting}
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
                talents=${talents.standard} 
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
                talents=${talents.final}
            />
        </div>
    `;
}
