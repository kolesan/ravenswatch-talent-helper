import { mkdir, writeFile } from "fs/promises";

import { legendary } from "../../scrapedData/items/legendary";

const base = "https://buildmaker.ravenswatch.com";

// used selector 
// <div class="BuildMaker_items__hAfWX">
// [...temp1.children]
//     .map(it => it.children[0].children[0].children[0].children[0].attributes.getNamedItem("src").value)

const legendaryItemUrls = [
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_PhilosopherStone.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_NibelungenRing.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_VorpalBlade.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_UnspokenWater.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_Tamatebako.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_HolyGrail.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_SwanCloak.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_RingOfDispel.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_Excalibur.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_FastWalkerBoots.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_GoldenCoatChainmail.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_RavenEffigy.png&w=3840&q=75",
    "/_next/image?url=%2Fapi%2Fproxy-image%2Fobjects%2Fimages%2FIcon_Object_FatherTimeHourglass.png&w=3840&q=75",
];

legendaryItemUrls.forEach((it, i) => {
    setTimeout(() => {
        fetch(`${base}${it}`)
            .then(res => res.arrayBuffer())
            .then(arrayBuffer => {
                const dirName = "/public/icons/items/new/legendary";
                const fileName = legendary[i].code;

                const filePath = `${dirName}/${fileName}.png`;

                return mkdir(dirName, { recursive: true })
                    .then(() => writeFile(filePath, Buffer.from(arrayBuffer)))
                    .then(() => console.log(`Success: ${filePath}`))
                    .catch(err => console.log(`Error: ${filePath}`));
            });
    }, 1500*i)
});
