import clsx from "clsx";
import { html } from "htm/preact";
import { useEffect } from "preact/hooks";
import { useParams, useSearchParams } from "wouter-preact";

import { Hero, heroes } from "../../../finalData/finalData";
import { Talent } from "../../../scripts/extractTalents/types";
import { hst } from "../../core/hst";
import { useBooleanState } from "../../hooks/useBooleanState";
import { usePageTitle } from "../../hooks/usePageTitle";

import { Encyclopedia } from "./components/Encyclopedia/Encyclopedia";
import { HeroSelect } from "./components/HeroSelect/HeroSelect";
import { ListLabelRight } from "./components/ListLabelRight/ListLabelRight";
import { MainList } from "./components/MainList/MainList";
import { TalentsViewSwitch } from "./components/TalentsViewSwitch/TalentsViewSwitch";
import { TalentsView } from "./components/TalentsViewSwitch/types";
import { maxUsedTalents } from "./consts/maxUsedTalents";
import { rankConsts } from "./consts/rankConsts";
import { useEmptyHeroRedirect } from "./hooks/useEmptyHeroRedirect";
import { useIsStickyElemStuck } from "./hooks/useIsStickyElemStuck";
import { useSaveStateToStorage } from "./hooks/useSaveStateToStorage";
import { useTalentsPageState } from "./hooks/useTalentsPageState";
import { TalentWithLockedFlag } from "./types";
import { allTalentsViewState } from "./utils/allTalentsViewState";
import { getDerivedTalentsState } from "./utils/getDerivedTalentsState";
import { markLocked } from "./utils/markLocked";

import cls from "./TalentsPage.module.css";

type RouteParams = {
    hero: string;
}

export function TalentsPage() {
    const params = useParams<RouteParams>();

    const heroFromUrl = params.hero 
        ? heroes.utils.findByCode(params.hero) 
        : undefined;

    usePageTitle(heroFromUrl ? `Talents: ${heroFromUrl.name}` : `Talents`);

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

    useEffect(() => {
        if (heroFromUrl && heroFromUrl.code !== state.hero.code) {
            dispatch({
                type: "set_hero",
                heroCode: heroFromUrl.code,
            });
        }
    }, [heroFromUrl]);
    useEmptyHeroRedirect({
        heroCodeFromUrl: heroFromUrl?.code,
        heroCodeFromState: state.hero.code,
    });

    // TODO Rework all of this
    const [searchParams] = useSearchParams();
    const viewAllFromSearch = searchParams.has(allTalentsViewState.queryParam);
    useEffect(() => {
        if (allTalentsViewState.enabled && !viewAllFromSearch) {
            const search = allTalentsViewState.searchParams(true);
            hst.replace(`${state.hero.code}${search}`);
        } else if (viewAllFromSearch && !allTalentsViewState.enabled) {
            allTalentsViewState.enabled = true;
        }
    }, [viewAllFromSearch]);

    if (!heroFromUrl) {
        return null;
    }

    const derivedTalentsState = getDerivedTalentsState(state);
    const viewAllEnabled = viewAllFromSearch;

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
                        const search = allTalentsViewState.searchParams(viewAllEnabled);
                        hst.push(`${hero.code}${search}`);
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
                view=${viewAllEnabled ? "compendium" : "builder"}
                onSwitch=${(view: TalentsView) => {
                    const viewAll = view === "compendium";
                    if (viewAll !== viewAllEnabled) {
                        allTalentsViewState.enabled = viewAll;
                        const search = allTalentsViewState.searchParams(viewAll);
                        hst.push(`${state.hero.code}${search}`);
                    }
                }}
            />
        </div>
        ${viewAllEnabled && html`
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
        ${!viewAllEnabled && html`
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
                            />
                        `,
                    }}
                    label=Preferred 
                    heroCode=${state.hero.code} 
                    talents=${state.talents.preferred} 
                    onStickyLabelScrollingAgain=${preferredLabelScrollingAgain.set}
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
