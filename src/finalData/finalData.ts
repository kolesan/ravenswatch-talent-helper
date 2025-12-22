import { Hero as RawHero, HeroCode, heroes as rawHeroes } from "../data/heroes";
import aladdinTalents from "../scrapedData/heroTalents/aladdin.json";
import beowulfTalents from "../scrapedData/heroTalents/beowulf.json";
import carmillaTalents from "../scrapedData/heroTalents/carmilla.json";
import geppettoTalents from "../scrapedData/heroTalents/geppetto.json";
import julietTalents from "../scrapedData/heroTalents/juliet.json";
import melusineTalents from "../scrapedData/heroTalents/melusine.json";
import piperTalents from "../scrapedData/heroTalents/piper.json";
import romeoTalents from "../scrapedData/heroTalents/romeo.json";
import scarletTalents from "../scrapedData/heroTalents/scarlet.json";
import snowQueenTalents from "../scrapedData/heroTalents/snowQueen.json";
import wukongTalents from "../scrapedData/heroTalents/wukong.json";
import { Talent } from "../scripts/extractTalents/types";

export type Hero = RawHero & {
    talents: Talent[];
}

const all = {
    scarlet: {
        ...rawHeroes.all.scarlet,
        talents: scarletTalents.filter(it => it.type === "standard") as Talent[],
    },
    piper: {
        ...rawHeroes.all.piper,
        talents: piperTalents.filter(it => it.type === "standard") as Talent[],
    },
    beowulf: {
        ...rawHeroes.all.beowulf,
        talents: beowulfTalents.filter(it => it.type === "standard") as Talent[],
    },
    snowQueen: {
        ...rawHeroes.all.snowQueen,
        talents: snowQueenTalents.filter(it => it.type === "standard") as Talent[],
    },
    aladdin: {
        ...rawHeroes.all.aladdin,
        talents: aladdinTalents.filter(it => it.type === "standard") as Talent[],
    },
    melusine: {
        ...rawHeroes.all.melusine,
        talents: melusineTalents.filter(it => it.type === "standard") as Talent[],
    },
    geppetto: {
        ...rawHeroes.all.geppetto,
        talents: geppettoTalents.filter(it => it.type === "standard") as Talent[],
    },
    wukong: {
        ...rawHeroes.all.wukong,
        talents: wukongTalents.filter(it => it.type === "standard") as Talent[],
    },
    carmilla: {
        ...rawHeroes.all.carmilla,
        talents: carmillaTalents.filter(it => it.type === "standard") as Talent[],
    },
    romeo: {
        ...rawHeroes.all.romeo,
        talents: romeoTalents.filter(it => it.type === "standard") as Talent[],
    },
    juliet: {
        ...rawHeroes.all.juliet,
        talents: julietTalents.filter(it => it.type === "standard") as Talent[],
    },
}

export const heroes = {
    all,
    asArray: Object.values(all),
    utils: {
        findByCode(code: HeroCode) {
            return heroes.asArray.find(it => it.code === code);
        }
    }
}
