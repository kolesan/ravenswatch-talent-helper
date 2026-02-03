import { clsx } from "clsx";
import { html } from "htm/preact";

import { useIsStickyElemStuck } from "../../hooks/useIsStickyElemStuck";
import { usePageTitle } from "../../hooks/usePageTitle";

import cls from "./HelpPage.module.css";

type Props = {
    className?: string;
}

export function HelpPage({
    className,
}: Props) {
    usePageTitle("Help");

    const { 
        stickyElemRef, 
        isStuck: rightsStuck 
    } = useIsStickyElemStuck({
        stuckAtPx: 56,
    });

    return html`
        <div class=${clsx(cls.helpPageRoot, className)}>
            <div 
                class=${clsx({
                    [cls.rights]: true,
                    [cls.rightsStuck]: rightsStuck,
                })} 
                ref=${stickyElemRef}
            >
                This is an unofficial, fan-made project.
                All rights to Ravenswatch and its associated assets,
                including artwork, fonts, and images,
                belong to their respective owners.
            </div>
            <div class=${cls.textContainer}>
                <div>
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
                        The Legendary and Cursed Objects pages work the same way.
                    </p>

                    <p>
                        <h3>Controls</h3>
                        1. <span class=${cls.i}>Click</span> an <span class=${cls.i}>Available</span> list item to move it to <span class=${cls.i}>Used</span>.<br/>
                        <span class=${cls.i}>Alt+Click</span> to mark as <span class=${cls.i}>Preferred</span>.<br/>
                        2. <span class=${cls.i}>Click</span> a <span class=${cls.i}>Preferred</span> list item to move it to <span class=${cls.i}>Used</span>.<br/>
                        <span class=${cls.i}>Alt+Click</span> to move back to <span class=${cls.i}>Available</span>.<br/>
                        3. <span class=${cls.i}>Click</span> a <span class=${cls.i}>Used</span> list item to move it back to either <span class=${cls.i}>Preferred</span> or <span class=${cls.i}>Available</span>, depending on whether it is marked as preferred.<br/>
                        4. <span class=${cls.i}>Holding Click</span> for a while works the same as <span class=${cls.i}>Alt+Click</span> (this is mostly for mobile users).
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
                </div>
            </div>
        </div>
    `;
}
