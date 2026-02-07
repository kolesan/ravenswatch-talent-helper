import clsx from "clsx";
import { html } from "htm/preact";
import { useEffect } from "preact/hooks";

import { pages } from "../../../../pages";
import { Hero, heroes } from "../../../finalData/finalData";
import { Talent } from "../../../scripts/extractTalents/types";
import { ListLabelRight } from "../../components/ListLabelRight/ListLabelRight";
import { useRouter } from "../../components/RouterProvider/RouterProvider";
import { hst } from "../../core/hst";
import { useBooleanState } from "../../hooks/useBooleanState";
import { useIsStickyElemStuck } from "../../hooks/useIsStickyElemStuck";
import { usePageTitle } from "../../hooks/usePageTitle";

import { Compendium } from "./components/Compendium/Compendium";
import { HeroSelect } from "./components/HeroSelect/HeroSelect";
import { MainList } from "./components/MainList/MainList";
import { TalentsViewSwitch } from "./components/TalentsViewSwitch/TalentsViewSwitch";
import { maxUsedTalents } from "./consts/maxUsedTalents";
import { rankConsts } from "./consts/rankConsts";
import { useHandleUrl } from "./hooks/useHandleUrl";
import { useSaveTalentsPageStateToStorage } from "./hooks/useSaveTalentsPageStateToStorage";
import { useStoredState } from "./hooks/useStoredState";
import { useTalentsPageState } from "./hooks/useTalentsPageState";
import { isTalentsPageView, TalentsPageView } from "./talentsPageViews";
import { TalentWithLockedFlag } from "./types";
import { calculatePageTitle } from "./utils/calculatePageTitle";
import { getDerivedTalentsState } from "./utils/getDerivedTalentsState";
import { markLocked } from "./utils/markLocked";

import cls from "./TalentsPage.module.css";

export function TalentsPage() {
    const location = useRouter();
    const [_, __, hero, view] = location.split("/");
    const params = { hero, view };

    const heroFromUrl = params.hero 
        ? heroes.utils.findByCode(params.hero) 
        : undefined;

    const viewFromUrl = isTalentsPageView(params.view) 
        ? params.view
        : undefined;
        
    useEffect(() => {
        console.log("TalentsPage mounted");
        return () => {
            console.log("TalentsPage unmounted");
        };
    }, []);
    console.log("rendering talents page", params, location, heroFromUrl?.code);

    usePageTitle(calculatePageTitle(heroFromUrl, viewFromUrl));

    const storedState = useStoredState(heroFromUrl?.code);

    const [reactiveState, dispatch] = useTalentsPageState(storedState.reactiveState);

    useSaveTalentsPageStateToStorage({
        heroCode: heroFromUrl?.code || storedState.heroCode,
        view: viewFromUrl || storedState.view,
        reactiveState,
    });

    const {
        stickyElemRef,
        isStuck: controlsStuck
    } = useIsStickyElemStuck({
        stuckAtPx: 56,
    });
    const usedLabelScrollingAgain = useBooleanState(false);
    const preferredLabelScrollingAgain = useBooleanState(false);

    useHandleUrl({
        url: {
            heroCode: heroFromUrl?.code,
            view: viewFromUrl,
        },
        state: {
            heroCode: storedState.heroCode,
            view: storedState.view,
        },
        updateUrl: ({ heroCode, view }) => {
            console.log("changing url to:", `${pages.talents.path}/${heroCode}/${view}`);
            hst.replace(`${pages.talents.path}/${heroCode}/${view}`);
        }
    });

    if (!heroFromUrl || !viewFromUrl) {
        return null;
    }

    const derivedTalentsState = getDerivedTalentsState(heroFromUrl.talents, reactiveState);

    console.log("got to full render");

    return html`
        <div 
            class=${clsx({
                [cls.controls]: true,
                [cls.controlsStuck]: controlsStuck
            })}
            ref=${stickyElemRef}
        >
            <div class=${cls.nonWrapableControls}>
                <${HeroSelect}
                    classes=${{
                        portraitContainer: cls.heroSelectPortrait
                    }}
                    items=${heroes.asArray}
                    value=${heroFromUrl}
                    onChange=${(hero: Hero) => {
                        if (hero.code !== heroFromUrl.code) {
                            hst.push(`${pages.talents.path}/${hero.code}/${viewFromUrl}`);
                        }
                    }}
                />
                <label class=container-label>
                    Rank
                    <input
                        type=range
                        min=${rankConsts.min}
                        max=${rankConsts.max}
                        value=${reactiveState.rank}
                        oninput=${(e: preact.TargetedEvent<HTMLInputElement>) => {
                            const newRank = +e.currentTarget.value;

                            dispatch({
                                type: "set_rank",
                                rank: newRank,
                            })
                        }}
                    />
                    <output>${reactiveState.rank}</output>
                </label>
            </div>
            <${TalentsViewSwitch}
                view=${viewFromUrl}
                onSwitch=${(view: TalentsPageView) => {
                    if (view !== viewFromUrl) {
                        hst.push(`${pages.talents.path}/${heroFromUrl.code}/${view}`);
                    }
                }}
            />
        </div>
        ${viewFromUrl === "compendium" && html`
            <${Compendium} 
                classes=${{ 
                    list: {
                        label: cls.listLabel,
                        content: cls.listContent,
                    }
                }}
                heroCode=${heroFromUrl.code}
                heroRank=${reactiveState.rank}
                talents=${heroFromUrl.talents}
            />
        `}
        ${viewFromUrl === "builder" && html`
            <div class=${cls.talentLists}>
                <${MainList}
                    classes=${{ 
                        label: cls.listLabel,
                        content: cls.listContent,
                    }}
                    label=Used 
                    heroCode=${heroFromUrl.code} 
                    talents=${reactiveState.talents.used} 
                    maxItems=${maxUsedTalents}
                    onStickyLabelScrollingAgain=${usedLabelScrollingAgain.set}
                    onClear=${() => {
                        dispatch({
                            type: "clear_used",
                        });
                    }}
                    onTalentClick=${(talent: Talent) => {
                        dispatch({
                            type: talent.preferred
                                ? "talent_from_used_to_preferred"
                                : "talent_from_used_to_available",
                            talent,
                        });
                    }}
                    onTalentAltClick=${(talent: TalentWithLockedFlag) => {
                        dispatch({
                            type: talent.preferred
                                ? "talent_from_used_to_preferred"
                                : "talent_from_used_to_available",
                            talent,
                        });
                    }}
                    onTalentHold=${(talent: TalentWithLockedFlag) => {
                        dispatch({
                            type: talent.preferred
                                ? "talent_from_used_to_preferred"
                                : "talent_from_used_to_available",
                            talent,
                        });
                    }}
                />
                <${MainList} 
                    classes=${{ 
                        label: cls.listLabel,
                        content: cls.listContent,
                    }}
                    slots=${{
                        labelRight: html`
                            <${ListLabelRight} 
                                className=${cls.listLabelRight}
                                visible=${
                                    usedLabelScrollingAgain.is 
                                    && !preferredLabelScrollingAgain.is
                                }
                                used=${reactiveState.talents.used.length}
                                maxUsed=${maxUsedTalents}
                            />
                        `,
                    }}
                    label=Preferred 
                    heroCode=${heroFromUrl.code} 
                    talents=${reactiveState.talents.preferred} 
                    onStickyLabelScrollingAgain=${preferredLabelScrollingAgain.set}
                    confirmBeforeClear
                    onClear=${() => {
                        dispatch({
                            type: "clear_preferred",
                        });
                    }}
                    onTalentClick=${(talent: Talent) => {
                        dispatch({
                            type: "talent_from_preferred_to_used",
                            talent,
                        });
                    }}
                    onTalentAltClick=${(talent: Talent) => {
                        dispatch({
                            type: "talent_from_preferred_to_available",
                            talent,
                        });
                    }}
                    onTalentHold=${(talent: TalentWithLockedFlag) => {
                        dispatch({
                            type: "talent_from_preferred_to_available",
                            talent,
                        });
                    }}
                />
                <${MainList} 
                    classes=${{ 
                        label: cls.listLabel,
                        content: cls.listContent,
                    }}
                    slots=${{
                        labelRight: html`
                            <${ListLabelRight}
                                className=${cls.listLabelRight}
                                visible=${preferredLabelScrollingAgain.is}
                                used=${reactiveState.talents.used.length}
                                preferred=${reactiveState.talents.preferred.length}
                                maxUsed=${maxUsedTalents}
                            />
                        `,
                    }}
                    label=Available 
                    heroCode=${heroFromUrl.code} 
                    talents=${[
                        ...derivedTalentsState.available, 
                        ...derivedTalentsState.locked.map(markLocked),
                    ]}
                    onTalentClick=${(talent: TalentWithLockedFlag) => {
                        if (talent.locked) {
                            return;
                        }

                        dispatch({
                            type: "talent_from_available_to_used",
                            talent,
                        });
                    }}
                    onTalentAltClick=${(talent: TalentWithLockedFlag) => {
                        if (talent.locked) {
                            return;
                        }
                        
                        dispatch({
                            type: "talent_from_available_to_preferred",
                            talent,
                        });
                    }}
                    onTalentHold=${(talent: TalentWithLockedFlag) => {
                        if (talent.locked) {
                            return;
                        }
                        
                        dispatch({
                            type: "talent_from_available_to_preferred",
                            talent,
                        });
                    }}
                />
            </div>
        `}
    `;
}
