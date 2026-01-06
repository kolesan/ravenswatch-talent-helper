import { mkdir, writeFile } from "fs/promises";

const base = "https://buildmaker.ravenswatch.com";

const legendaryItemUrls = [
    "/_next/image?url=%2Fitems%2Fframes%2FCursed.png&w=3840&q=75"
];

legendaryItemUrls.forEach((it, i) => {
    setTimeout(() => {
        fetch(`${base}${it}`)
            .then(res => res.arrayBuffer())
            .then(arrayBuffer => {
                const dirName = "public/icons/items/new/cursed";
                const fileName = "frame";

                const filePath = `${dirName}/${fileName}.png`;

                return mkdir(dirName, { recursive: true })
                    .then(() => writeFile(filePath, Buffer.from(arrayBuffer)))
                    .then(() => console.log(`Success: ${filePath}`))
                    .catch(err => console.log(`Error: ${filePath}`));
            });
    }, 1500*i)
})
