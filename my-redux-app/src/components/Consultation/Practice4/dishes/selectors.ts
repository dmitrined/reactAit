import type { RootState } from "../../../../store";
import type Dish from "./types/Dish";

const selectdishes = (state:RootState):Dish[]=>state.dishes;
export default selectdishes;