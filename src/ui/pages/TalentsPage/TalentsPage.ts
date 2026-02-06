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

import { Encyclopedia } from "./components/Encyclopedia/Encyclopedia";
import { HeroSelect } from "./components/HeroSelect/HeroSelect";
import { MainList } from "./components/MainList/MainList";
import { TalentsViewSwitch } from "./components/TalentsViewSwitch/TalentsViewSwitch";
import { maxUsedTalents } from "./consts/maxUsedTalents";
import { rankConsts } from "./consts/rankConsts";
import { useHandleUrl } from "./hooks/useHandleUrl";
import { useSaveStateToStorage } from "./hooks/useSaveStateToStorage";
import { useTalentsPageState } from "./hooks/useTalentsPageState";
import { isTalentsPageView, TalentsPageView } from "./talentsPageViews";
import { TalentWithLockedFlag } from "./types";
import { calculatePageTitle } from "./utils/calculatePageTitle";
import { getDerivedTalentsState } from "./utils/getDerivedTalentsState";
import { markLocked } from "./utils/markLocked";
import { talentsViews } from "./utils/talentsViews";

import cls from "./TalentsPage.module.css";

type RouteParams = {
    hero: string;
    view: string;
}

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

    const [state, dispatch] = useTalentsPageState(heroFromUrl?.code);

    useSaveStateToStorage(state);

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
            hero: heroFromUrl?.code,
            view: viewFromUrl,
        },
        state: {
            hero: state.hero.code,
            view: talentsViews.current,
        },
        updateStateHero: hero => {
            console.log("changing state hero to:", hero);
            dispatch({
                type: "set_hero",
                heroCode: hero,
            });
        },
        updateStateView: view => {
            console.log("changing state view to:", view);
            talentsViews.current = view;
        },
        updateUrl: ({ hero, view }) => {
            console.log("changing url to:", `${pages.talents.path}/${hero}/${view}`);
            hst.replace(`${pages.talents.path}/${hero}/${view}`);
        }
    });

    if (!heroFromUrl || !viewFromUrl) {
        return null;
    }

    const derivedTalentsState = getDerivedTalentsState(state);

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
                    value=${state.hero}
                    onChange=${(hero: Hero) => {
                        if (hero.code !== state.hero.code) {
                            hst.push(`${pages.talents.path}/${hero.code}/${talentsViews.current}`);
                        }
                    }}
                />
                <label class=container-label>
                    Rank
                    <input
                        type=range
                        min=${rankConsts.min}
                        max=${rankConsts.max}
                        value=${state.rank}
                        oninput=${(e: preact.TargetedEvent<HTMLInputElement>) => {
                            const newRank = +e.currentTarget.value;

                            dispatch({
                                type: "set_rank",
                                rank: newRank,
                            })
                        }}
                    />
                    <output>${state.rank}</output>
                </label>
            </div>
            <${TalentsViewSwitch}
                view=${viewFromUrl}
                onSwitch=${(view: TalentsPageView) => {
                    if (view !== talentsViews.current) {
                        hst.push(`${pages.talents.path}/${state.hero.code}/${view}`);
                    }
                }}
            />
        </div>
        ${viewFromUrl === "compendium" && html`
            <${Encyclopedia} 
                classes=${{ 
                    list: {
                        label: cls.listLabel,
                        content: cls.listContent,
                    }
                }}
                heroCode=${state.hero.code}
                heroRank=${state.rank}
                talents=${state.hero.talents}
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
                    heroCode=${state.hero.code} 
                    talents=${state.talents.used} 
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
                                used=${state.talents.used.length}
                                maxUsed=${maxUsedTalents}
                            />
                        `,
                    }}
                    label=Preferred 
                    heroCode=${state.hero.code} 
                    talents=${state.talents.preferred} 
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
                                used=${state.talents.used.length}
                                preferred=${state.talents.preferred.length}
                                maxUsed=${maxUsedTalents}
                            />
                        `,
                    }}
                    label=Available 
                    heroCode=${state.hero.code} 
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
