import { HeroCode } from "../../../../../data/heroes";
import { Hero } from "../../../../../finalData/finalData";
import { TalentsPageView } from "../../talentsPageViews";
import { ReactiveTalentsPageState, StorableTalentsPageState } from "../../types";

import { baseTalentsPageStateStorage } from "./baseTalentsPageStateStorage";
import { deserializeTalentsPageState } from "./deserializeTalentsPageState/deserializeTalentsPageState";
import { serializeTalentsPageStateStorage } from "./serializeTalentsPageStateStorage/serializeTalentsPageStateStorage";

// TODO double check the serialization deserialization logic for safety and sense

export const talentsPageStateStorage = {
    getCurrentHero(): StorableTalentsPageState {
        return deserializeTalentsPageState(baseTalentsPageStateStorage.get());
    },
    getHero(heroCode: HeroCode): StorableTalentsPageState {
        return deserializeTalentsPageState(baseTalentsPageStateStorage.get(), heroCode);
    },
    set(storableState: StorableTalentsPageState) {
        const currentStoredState = baseTalentsPageStateStorage.get();

        const newSerializedState = serializeTalentsPageStateStorage({
            ...storableState, 
            currentStoredState
        });

        baseTalentsPageStateStorage.set(newSerializedState);
    }
}
