import { Hero } from "ui/uiData/heroes/types";
import { Talent } from "ui/uiData/heroes/talents/types";
import { BuilderType } from "ui/components/Builder/types";

export type TalentsBuilderType = {
    hero: Hero;
    builder: BuilderType<Talent>;
};
