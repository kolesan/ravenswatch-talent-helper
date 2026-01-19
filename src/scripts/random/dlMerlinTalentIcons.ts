import { mkdir, writeFile } from "fs/promises";
import talents from "../../scrapedData/heroTalents/merlin.json"

talents.slice(1).forEach((it, i) => {
    setTimeout(() => {
        fetch(it.iconUrl)
            .then(res => res.arrayBuffer())
            .then(arrayBuffer => {
                const dirName = "public/icons/talents/new/merlin";
                const fileName = it.code;

                const filePath = `${dirName}/${fileName}.png`;

                return mkdir(dirName, { recursive: true })
                    .then(() => writeFile(filePath, Buffer.from(arrayBuffer)))
                    .then(() => console.log(`Success: ${filePath}`))
                    .catch(err => console.log(`Error: ${filePath}`));
            });
    }, 1500*i);
})
