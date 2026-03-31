import { heroesBase } from "../../../../data/heroes/heroesBase";
import { aladdin } from "../../../../data/heroes/talents/merged/aladdin";
import { beowulf } from "../../../../data/heroes/talents/merged/beowulf";
import { carmilla } from "../../../../data/heroes/talents/merged/carmilla";
import { geppetto } from "../../../../data/heroes/talents/merged/geppetto";
import { juliet } from "../../../../data/heroes/talents/merged/juliet";
import { melusine } from "../../../../data/heroes/talents/merged/melusine";
import { merlin } from "../../../../data/heroes/talents/merged/merlin";
import { piper } from "../../../../data/heroes/talents/merged/piper";
import { romeo } from "../../../../data/heroes/talents/merged/romeo";
import { scarlet } from "../../../../data/heroes/talents/merged/scarlet";
import { snowqueen } from "../../../../data/heroes/talents/merged/snowqueen";
import { wukong } from "../../../../data/heroes/talents/merged/wukong";
import { TalentMerged } from "../../../../data/heroes/talents/types";
import { Talent } from "../talents/types";
import { Hero, HeroCode, HeroRecord } from "../types";

const talentsByHero: Record<HeroCode, TalentMerged[]> = {
    scarlet,
    piper,
    beowulf,
    snowqueen,
    aladdin,
    melusine,
    geppetto,
    wukong,
    carmilla,
    romeo,
    juliet,
    merlin,
};

export function injectBaseHeroesWithTalents() {
    let heroesObj: Partial<HeroRecord> = {};

    for (let i = 0; i < heroesBase.asArray.length; i++) {
        const heroBase = heroesBase.asArray[i]!;

        const talents = talentsByHero[heroBase.code];
        const uiTalents = talents.map(toUiTalent);

        const hero: Hero = {
            code: heroBase.code,
            name: heroBase.name,
            talents: uiTalents,
        };

        heroesObj[heroBase.code] = hero;
    }

    return {
        asObj: heroesObj as HeroRecord,
        asArray: Object.values(heroesObj),
    }
}

function toUiTalent(talentMerged: TalentMerged): Talent {
    return {
        code: talentMerged.code,
        name: talentMerged.name,
        type: talentMerged.type,
        unlockedAtRank: talentMerged.unlockedAtRank,
        multiplayerOnly: talentMerged.multiplayerOnly,
        description: talentMerged.description,
        improvements: talentMerged.improvements,
        degradations: talentMerged.degradations,
    }
}
