import { html } from "htm/preact";

import { pages } from "../../../../pages";
import { Hero } from "../../../finalData/finalData";
import { hst } from "../../core/hst";

import { Builder } from "./components/Builder/Builder";
import { Compendium } from "./components/Compendium/Compendium";
import { Controls } from "./components/Controls/Controls";
import { TalentsPageView } from "./talentsPageViews";

import cls from "./TalentsPageContent.module.css";

type Props = {
    hero: Hero;
    view: TalentsPageView;
}

export function TalentsPageContent({
    hero,
    view,
}: Props) {
    console.log("= TPC RENDERING =", { 
        hero: hero.code, 
        view 
    });

    return html`
        <${Controls}
            hero=${hero}
            view=${view}
            onHeroChange=${(hero: Hero) => {
                hst.push(`${pages.talents.path}/${hero.code}/${view}`);
            }}
            onViewChange=${(view: TalentsPageView) => {
                hst.push(`${pages.talents.path}/${hero.code}/${view}`);
            }}
        />
        ${view === "compendium" && html`
            <${Compendium} 
                classes=${{ 
                    list: {
                        label: cls.listLabel,
                        content: cls.listContent,
                    }
                }}
                hero=${hero}
            />
        `}
        ${view === "builder" && html`
            <${Builder} 
                classes=${{ 
                    list: {
                        label: cls.listLabel,
                        content: cls.listContent,
                    }
                }}
                hero=${hero}
            />
        `}
    `;
}
