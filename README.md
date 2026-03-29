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

## Adding a new hero
1. Add the hero to the `heroesManualOrigin` object in `src\data\heroesManualOrigin.ts`
    1. The property name will be the `code` of the new hero in the whole app, so choose a good value. 
        * It should be clear understandable and simple, and it should not have uppercase letters or any strange symbols. Remember that it will be used in the url in the browser and also in the filesystem e.g. choose `snowqueen`✅ instead of `snowQueen`❌
1. Download passtech talent data for the hero from the official buildmaker app at `https://buildmaker.ravenswatch.com/`.
    1. Open browser dev tools Network tab
    1. Open new build creation screen
    1. Choose the new hero
    1. In the network tab find the response with the talents of the new hero e.g. `/api/game-heroes/merlin?lang=en`
    1. The `skills` property in the response should have an array of the heroes talents
        * Copy this data to `src\data\passtechResponses\heroes\{heroCode}.ts` e.g. `src\data\passtechResponses\heroes\merlin.ts`
        * See existing heroes for an example of how this data should be stored exactly
1. Generate a manual list of heroes talents based on the data from the buildmaker
    1. Modify the `hero` constant in the manual talent list template generation script `src\scripts\talents\generateManualTalentsTemplate\generateManualTalentsTemplate.ts` so it runs for the new hero
    1. Run the manual talent list template generation script
        ```
        npm run generateManualTalentsTemplate
        ```
        The file should appear in `src\data\heroes\talents\manual` with the hero code as the file name e.g. `src\data\heroes\talents\manual\merlin.ts`
    1. Fix the order of the talents in the generated template file so they match the in game order completely
        * The app tries to copy this one to one from the game itself, not the buildmaker app or wiki or anything else
    1. Fix the `unlockedAtRank` properties of the manual talents so they match the game one to one
    1. Add any other properties that are not available in the buildmaker response e.g. the `multiplayerOnly` property for *Romeo* and *Juliet* talents
1. Generate the merged talents by running
    ```
    npm run generateTalents
    ```
    The file should appear in `src\data\heroes\talents\merged` e.g. `src\data\heroes\talents\merged\merlin.ts`
1. In `src\ui\uiData\heroes\utils\injectBaseHeroesWithTalents.ts` import the talents for the new hero and add them to the `talentsByHero` map e.g.
    ```
    import { merlin } from "../../../../data/heroes/talents/merged/merlin";
    ...
        
    const talentsByHero: Record<HeroCode, Talent[]> = {
        ...
        merlin,
    };
    ```
1. Handle the talent icons
    1. Download the new hero talent icons
        1. Modify the `heroes` array in `src\scripts\talents\downloadTalentIcons\downloadTalentIcons.ts` so it includes the heroes you want to download the icons for (probably just the new hero)
        1. Run the download script
            ```
            npm run downloadTalentIcons
            ```
            New icons should appear in `public/icons/talents/new/{heroCode}` e.g. `public/icons/talents/new/merlin`
    1. Optimize the new talent icons
        1. Run the optimization script
            ```
            npm run optimizeTalentIcons
            ```
            New icons should appear in `public/icons/talents/new/optimized/{heroCode}` e.g. `public/icons/talents/new/optimized/merlin`
    1. Move the optimized talent icons to `public/icons/talents/{heroCode}` e.g. `public/icons/talents/merlin`
    1. Delete any unneeded temporary files, e.g. unoptimized icons in the `/new` folder  (move to archive)
1. Handle the hero icon
    1. To download hero icon go to `https://buildmaker.ravenswatch.com/` and copy the png of the hero from the buildmaker to `public\icons\heroes\{heroCode}.webp` e.g. `public\icons\heroes\merlin.webp`
    1. Optimize the new hero icon 
        1. Modify the `.filter` of the `files` constant in the `optimizeHeroIcons.ts` script so it matches your new hero
        1. Run the optimization script
            ```
            npm run optimizeHeroIcons
            ```
            The new optimized icon should appear in `public/icons/heroes/optimized`
    1. Move the new icon to `public/icons/heroes` 
    1. Delete the unoptimized icon (move to archive)
1. Handle the hero art
    1. Downloading the art
        1. Not sure where is the best place to get the hero art so far the best bet was the fandom wiki
        1. Find the hero art
        1. Decide what part of the image you want to see behind the hero icon and name in the hero selection component
        1. Cut out a square with the same dimensions as other hero arts out of the image
        1. Make any adjustments - e.g. upscale with ai, modify colors, make it brighter etc. (had to do that for Merlin's art because it looked very bad by default)
        1. Save the art as a jpg in `public/art/{heroCode}.jpg`
    1. Optimizing the art
        1. Modify the `.filter` of the `files` constant in the `optimizeArt.ts` script so it matches your new hero
        1. Run the optimization script
            ```
            npm run optimizeArt
            ```
            The new optimized art should appear in `public/art/optimized`
    1. Move the art to `public/art` 
    1. Delete the unoptimized art (move to archive)
1. Run the app in dev mode and double check that the new hero looks and operates normally. Check:
    1. Talents
        1. Descriptions and all the `improvements` and `degradations` in the descriptions
        1. Icons
        1. Names
        1. How they are moved to used or preferred and back
        1. If the they are saved to local storage properly and loaded back from it
        1. Double check all tooltips
    1. Check that the hero is switched properly and is loaded from local storage
    1. Check that the hero switch looks good
    1. Check the url
    1. You might need to do manual micro adjustments to the hero icon placement (some of the other heroes needed that)
    1. Hero name might need micro adjustments like the names of some other heroes needed
    1. Some css classes use the hero name, double check those
    1. Double check that both `builder` and `compendium` views look good
    1. Double check how the rank slider works for this new hero
    1. Double check that TS is compiling properly
1. Delete leftover temporary files if there are any (move to archive)
1. Check git diff screen, commit, push, check netlify preview, deploy, check prod, enjoy

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
1. Delete the temporary icons in the `new` and `optimized` folders (move to archive)
1. Check git diff screen, commit, push, check netlify preview, deploy, check prod, enjoy