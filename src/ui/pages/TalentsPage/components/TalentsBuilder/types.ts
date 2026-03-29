import { Hero } from "../../../../uiData/heroes/types";
import { Talent } from "../../../../uiData/heroes/talents/types";
import { BuilderType } from "../../../../components/Builder/types";

export type TalentsBuilderType = {
    hero: Hero;
    builder: BuilderType<Talent>;
};
