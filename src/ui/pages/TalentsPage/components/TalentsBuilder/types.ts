import { Hero } from "../../../../uiData/heroes";
import { Talent } from "../../../../../scripts/extractTalents/types";
import { BuilderType } from "../../../../components/Builder/types";

export type TalentsBuilderType = {
    hero: Hero;
    builder: BuilderType<Talent>;
};
