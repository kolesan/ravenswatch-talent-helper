# ravenswatch-talent-helper
A web app that shows you what talents are still available for your character during a Ravenswatch run. Helps decide whether it is worth spending a reroll during a level up.

## Running the app in dev mode
```
npm run dev
```
This will start vite dev mode with hot reload, check console for details on the host and port

# When a new patch is released
1. Carefully check all patchnotes for:
    1. Item changes
    1. Talent changes
    1. New heroes
    1. New items
1. Make sure all the changes are reflected in this app

## Adding new hero
1. Add the hero to the `heroesManualOrigin` object in `src\data\heroesManualOrigin.ts`
    1. The property name will be the `code` of the new hero in the whole app, so choose a good value. 
        * It should be clear understandable and simple, and it should not have uppercase letters or any strange symbols. Temember that it will be used in the url in the browser and also in the filesystem e.g. choose `snowqueen`✅ instead of `snowQueen`❌
1. Download passtech talent data for the hero from the official buildmaker app at `https://buildmaker.ravenswatch.com/`.
    1. Open browser dev tools Network tab
    1. Open new build creation screen
    1. Choose the new hero
    1. In the network tab find the response with the talents of the new hero e.g. `/api/game-heroes/merlin?lang=en`
    1. The `skills` property in the response should have an array of the heroes talents
        * Copy this data to `src\data\passtechResponses\heroes\{heroCode}.ts` e.g. `src\data\passtechResponses\heroes\merlin.ts`
        * See existing heroes for an example of how this data should be stored exactly
    1. 
1. TODO describe how the talents should be merged and placed in the merged folder
1. In `src\ui\uiData\utils\injectBaseHeroesWithTalents.ts` import the talents for the new hero and add them to the `talentsByHero` map
1. 

## Adding new items (magical objects)
1. Go to the official buildmaker app at `https://buildmaker.ravenswatch.com/`
1. Open browser Dev Tools Network tab
1. Open a build creation screen for any hero
1. Check the Network tab for a request to `/api/game-items?lang=en`
    1. The response should have a list of all items in the game
1. Copy that response into `src\data\passtechResponses\items\items.ts`
    1. Double check all changes in the git diff just in case
1. Run the magical object generation script using
    ```
    npm run generateMagicalObjects
    ```
    This script parses the Buildmaker items and generates legendary
    and cursed magical objects usable in this app.

    You should see the new magical objects appear in `src\data\objects\cursed.ts` and `src\data\objects\legendary.ts`. 
        
    1. Double check all the changes in the git diff viewer just in case.
1. Download new magical object icons
    1. Go into `src\scripts\downloadObjectIcons.ts` and modify the filter callbacks
    in the `legendaryObjects` and/or `cursedObjects` array creation at the start of the script, so that only the new objects, that you want to download the icons for, are left in the array
    1. At this point you can comment out the actual downloading and add a `console.log`
    to double check what items are in the arrays
    1. Now trigger the download using
        ```
        npm run downloadObjectIcons
        ```
    1. You should see the new icons appear in the `public\icons\objects\new\cursed` 
    and/or `public\icons\objects\new\legendary` folders
1. Optimize new magical object icons
    1. Run
        ```
        npm run optimizeObjectIcons
        ```
    2. Optimized icons should appear in the `public\icons\objects\new\optimized\cursed` 
    and/or `public\icons\objects\new\optimized\legendary` folders
1. Copy the optimized icons of the new objects to `public\icons\objects\cursed` 
    and/or `public\icons\objects\legendary` folders
1. Run the app in dev mode and double check that the new objects look and operate normally. Check:
    1. Descriptions and all the `improvements` and `degradations` in the descriptions
    1. Icons
    1. Names
    1. How they are moved to used or preferred and back
    1. If the they are saved to local storage properly and loaded back from it
1. Delete the temporary icons in the `new` and `optimized` folders
1. Check git diff screen, commit, push, check netlify preview, deploy, check prod, enjoy