import { clsx } from "clsx";
import { html } from "htm/preact";

import { Hero } from "../../../../../finalData/finalData";
import { MainList } from "../MainList/MainList";

import { groupTalentsByType } from "./utils/groupTalentsByType";

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
    heroRank: number;
    onRankChange: (rank: number) => void;
}

export function Compendium({
    className,
    classes,
    hero,
    heroRank,
}: Props) {
    console.log("=== Compendium rendering ===", { 
        hero: hero.code
    });

    const {
        starting,
        standard,
        final,
    } = groupTalentsByType(heroRank, hero.talents);

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
