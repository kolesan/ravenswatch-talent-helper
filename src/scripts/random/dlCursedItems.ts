import { mkdir, writeFile } from "fs/promises";

import { cursed } from "../../scrapedData/items/cursed";

const base = "https://buildmaker.ravenswatch.com";

// used selector 
// <div class="BuildMaker_items__hAfWX">
// [...temp2.children]
//     .map(it => it.children[0].children[0].children[0].children[0].attributes.getNamedItem("src").value)

const itemUrls = [
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FUI_Object_HungryGrass.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FUI_Object_FastWalkerBoots.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_Cauldron.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_MadHat.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_HopeDiamond.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_WitchBroom.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_OniMask.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_BlackLotus.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_NightmareBoo.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_NightmareThorn.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_BabaMortar.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_BloodyMaryMirror.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FUI_Object_BalorEye.png&w=3840&q=75"
];

itemUrls.forEach((it, i) => {
    setTimeout(() => {
        fetch(`${base}${it}`)
            .then(res => res.arrayBuffer())
            .then(arrayBuffer => {
                const dirName = "public/icons/items/new/cursed";
                const fileName = cursed[i].code;

                const filePath = `${dirName}/${fileName}.png`;

                return mkdir(dirName, { recursive: true })
                    .then(() => writeFile(filePath, Buffer.from(arrayBuffer)))
                    .then(() => console.log(`Success: ${filePath}`))
                    .catch(err => console.log(`Error: ${filePath}`));
            });
    }, 1500*i)
});
