import { heroesBase } from "data/heroes/heroesBase";

// Download hero list
const url = "https://buildmaker.ravenswatch.com/api/game-heroes?lang=en";
const resp = await fetch(url);
await new Promise<void>(res => setTimeout(() => { res(); }, 500));
const data = await resp.json();

// Parse hero list
const heroes = data.map((hero: any) => ({
    name: hero.name,
    passtechCode: hero.raw_name,
}));

const newHeroes = heroes.filter((hero: any) => {
    return !heroesBase.asArray.find(it => it.name === hero.name);
})

// Print hero list
console.log({ heroes });
console.log({ newHeroes });
