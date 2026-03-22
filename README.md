# ravenswatch-talent-helper
A web app that shows you what talents are still available for your character during a Ravenswatch run. Helps decide whether it is worth spending a reroll during a level up.

## Adding new hero
1. Add the hero to the `heroesManualOrigin` object in `src\data\heroesManualOrigin.ts`
    1. The property name will be the `code` of the new hero in the whole app, so choose a good value. 
        * It should be clear understandable and simple, and it should not have uppercase letters or any strange symbols. Temember that it will be used in the url in the browser and also in the filesystem e.g. `snowqueen`✅ instead of `snowQueen`❌
1. Download passtech talent data for the hero from the official buildmaker app at `https://buildmaker.ravenswatch.com/`.
    1. Open browser dev tools Network tab
    1. Open new build creation screen
    1. Choose the new hero
    1. In the network tab find the response with the talents of the new hero
    1. Save this data in `TODO`
1. TODO describe how the talents should be merged and placed in the merged folder
1. In `src\ui\uiData\utils\injectBaseHeroesWithTalents.ts` import the talents for the new hero and add them to the `talentsByHero` map
1. 