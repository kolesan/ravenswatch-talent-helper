export type Hero = {
    name: HeroName;
    code: string;
    wikiUrl: string;
}

type HeroName = 
      "Scarlet"
    | "The Pied Piper"
    | "Beowulf"
    | "The Snow Queen"
    | "Aladdin"
    | "Melusine"
    | "Geppetto"
    | "Sun Wukong"
    | "Carmilla"
    | "Romeo"
    | "Juliet"; 

const scarlet: Hero = {
    name: "Scarlet",
    code: "scarlet",
    wikiUrl: "https://ravenswatch.fandom.com/wiki/Scarlet,_The_Red_Hood",
};
const piper: Hero = {
    name: "The Pied Piper",
    code: "piper",
    wikiUrl: "https://ravenswatch.fandom.com/wiki/The_Pied_Piper",
};
const beowulf: Hero = {
    name: "Beowulf",
    code: "beowulf",
    wikiUrl: "https://ravenswatch.fandom.com/wiki/Beowulf",
};
const snowQueen: Hero = {
    name: "The Snow Queen",
    code: "snowQueen",
    wikiUrl: "https://ravenswatch.fandom.com/wiki/The_Snow_Queen",
};
const aladdin: Hero = {
    name: "Aladdin",
    code: "aladdin",
    wikiUrl: "https://ravenswatch.fandom.com/wiki/Aladdin",
};
const melusine: Hero = {
    name: "Melusine",
    code: "melusine",
    wikiUrl: "https://ravenswatch.fandom.com/wiki/Melusine",
};
const geppetto: Hero = {
    name: "Geppetto",
    code: "geppetto",
    wikiUrl: "https://ravenswatch.fandom.com/wiki/Geppetto",
};
const wukong: Hero = {
    name: "Sun Wukong",
    code: "wukong",
    wikiUrl: "https://ravenswatch.fandom.com/wiki/Sun_Wukong",
};
const carmilla: Hero = {
    name: "Carmilla",
    code: "carmilla",
    wikiUrl: "https://ravenswatch.fandom.com/wiki/Carmilla",
};
const romeo: Hero = {
    name: "Romeo",
    code: "romeo",
    wikiUrl: "https://ravenswatch.fandom.com/wiki/Romeo",
};
const juliet: Hero = {
    name: "Juliet",
    code: "juliet",
    wikiUrl: "https://ravenswatch.fandom.com/wiki/Juliet",
}

const all = {
    scarlet,
    piper,
    beowulf,
    snowQueen,
    aladdin,
    melusine,
    geppetto,
    wukong,
    carmilla,
    romeo,
    juliet,
};

export const heroes = {
    asArray: Object.values(all),
}
