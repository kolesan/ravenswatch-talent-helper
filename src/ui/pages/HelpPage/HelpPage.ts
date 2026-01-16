import { clsx } from "clsx";
import { html } from "htm/preact";

import { usePageTitle } from "../../hooks/usePageTitle";

import cls from "./HelpPage.module.css";

type Props = {
    className?: string;
}

export function HelpPage({
    className,
}: Props) {
    usePageTitle("Help");

    return html`
        <div class=${clsx(cls.helpPageRoot, className)}>
            <div class=${cls.textContainer}>
                <p>
                    <h3>About</h3>
                    This is a fan-made web app intended to help you track what talents 
                    and magical objects are still available during a
                    ${" "}
                    <a 
                        class=${cls.url} 
                        href="https://ravenswatch.com/en/" 
                        target=_blank
                    >
                        Ravenswatch
                    </a> 
                    ${" "}
                    run. 
                </p> 
                <p>
                    Knowing what is still available helps you decide
                    if you want to spend that precious
                    reroll star or not.
                </p>

                <p>
                    <h3>How it works</h3>
                    Pick a hero, set his rank and you get a list of available standard
                    talents. You can then either add talents
                    to a list of Preferred (Favorite) talents or directly to the
                    list of Used talents.
                </p>
                <p>
                    The Legendary and Cursed Objects pages work exactly the same.
                </p>
                
                <p>
                    <h3>Contacts</h3>
                    If you want to contact the author for any reason, drop an email here:
                    ${" "}
                    <a 
                        class=${cls.url} 
                        href="mailto:lebedev.k90@gmail.com" 
                        target=_blank
                    >
                        lebedev.k90@gmail.com
                    </a>
                    .
                </p>

                <p class=${cls.rights}>
                    This is an unofficial, fan-made project.
                    All rights to Ravenswatch and its associated assets,
                    including artwork, fonts, and images,
                    belong to their respective owners.
                </p>
            </div>
        </div>
    `;
}
