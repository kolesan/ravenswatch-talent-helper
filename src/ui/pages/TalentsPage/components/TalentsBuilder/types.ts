import { Hero } from "../../../../../finalData/finalData";
import { Talent } from "../../../../../scripts/extractTalents/types";
import { BuilderType } from "../../../../components/Builder/types";

export type TalentsBuilderType = {
    hero: Hero;
    builder: BuilderType<Talent>;
};
