import { clsx } from "clsx";
import { html } from "htm/preact";
import { createPortal } from "preact/compat";

import { Hero } from "../../../../../finalData/finalData";
import { RankSlider } from "../Controls/components/RankSlider/RankSlider";
import { rankSliderPortalContainerId } from "../Controls/constants";
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
    rank: number;
    onRankChange: (rank: number) => void;
}

export function Compendium({
    className,
    classes,
    hero,
    rank,
    onRankChange,
}: Props) {
    console.log("=== Compendium rendering ===", { 
        hero: hero.code
    });

    const rankSliderPortalContainer = document
        .getElementById(rankSliderPortalContainerId);

    const {
        starting,
        standard,
        final,
    } = groupTalentsByType(rank, hero.talents);

    return html`
        ${rankSliderPortalContainer && createPortal(html`
            <${RankSlider}
                value=${rank}
                onChange=${onRankChange}
            />
        `, rankSliderPortalContainer)}
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
