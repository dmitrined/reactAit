import { combineReducers, createStore } from "redux";
import counterReducer from "./components/Lecture/L8/counter/counterReducer";
import sandwichReducer from "./components/HW/HW8/sandwichRedux/sandwichReducer";
import tasksReducer from "./components/HW/HW9/tasks/TasksReduser";
import dishesReducer from "./components/Consultation/Practice4/dishes/dishesReducer";
import moviesReducer from "./components/Lecture/L11/Movies/moviesReducer";

const store = createStore(
  combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer,
    tasks: tasksReducer,
    dishes: dishesReducer,
    movies: moviesReducer,
  })
);

export default store;
export type RootState = ReturnType<typeof store.getState>;
